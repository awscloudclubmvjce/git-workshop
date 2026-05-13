(() => {
  // ── State ──────────────────────────────────────────────
  let current = 0;
  let total = SLIDES.length;
  let animating = false;

  // ── DOM refs ───────────────────────────────────────────
  const deck = document.getElementById('deck');
  const progressBar = document.getElementById('progress-bar');
  const slideCounter = document.getElementById('slide-counter');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnFs = document.getElementById('btn-fs');
  const zonePrev = document.getElementById('zone-prev');
  const zoneNext = document.getElementById('zone-next');
  const jumpDialog = document.getElementById('jump-dialog');
  const jumpInput = document.getElementById('jump-input');
  const toast = document.getElementById('toast');

  // ── Build slides ───────────────────────────────────────
  function buildSlide(slide, idx) {
    const el = document.createElement('div');
    el.className = 'slide';
    el.setAttribute('data-type', slide.type);
    el.setAttribute('data-index', idx);

    let html = '';

    if (slide.tag) html += `<div class="slide-tag">${slide.tag}</div>`;

    if (slide.type === 'section') {
      html += `<div class="section-num">${slide.section_num}</div>`;
    }
    if (slide.emoji) html += `<div class="slide-emoji">${slide.emoji}</div>`;

    html += `<h1 class="slide-title">${slide.title}</h1>`;

    if (slide.subtitle) html += `<p class="slide-subtitle">${slide.subtitle}</p>`;

    if (slide.analogy) {
      html += `<div class="analogy">💡 <strong>Analogy:</strong> ${slide.analogy}</div>`;
    }

    if (slide.bullets) {
      html += '<ul class="bullets">';
      slide.bullets.forEach(b => { html += `<li>${b}</li>`; });
      html += '</ul>';
    }

    if (slide.diagram) {
      html += '<div class="diagram">';
      slide.diagram.forEach(item => {
        if (item.arrow) {
          html += `<div class="dia-arrow">${item.arrow}</div>`;
        } else {
          html += `<div class="dia-box ${item.cls || ''}">
            ${item.label}
            <div class="dia-label">${item.sub || ''}</div>
          </div>`;
        }
      });
      html += '</div>';
    }

    if (slide.code) {
      const escaped = slide.code
        .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      html += `<div class="code-block">
        <button class="copy-btn" data-code="${encodeURIComponent(slide.code)}">Copy</button>
        <pre>${escaped}</pre>
      </div>`;
    }

    el.innerHTML = html;
    return el;
  }



  // ── Render all slides ──────────────────────────────────
  SLIDES.forEach((s, i) => {
    const el = buildSlide(s, i);
    deck.appendChild(el);
  });

  const slideEls = deck.querySelectorAll('.slide');

  // ── Copy button handler ────────────────────────────────
  deck.addEventListener('click', e => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;
    e.stopPropagation();
    const code = decodeURIComponent(btn.dataset.code);
    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 1800);
    });
  });

  // ── Navigation ─────────────────────────────────────────
  function goto(idx, dir = 1) {
    if (idx < 0 || idx >= total) return;

    const prev = slideEls[current];
    const next = slideEls[idx];

    prev.classList.remove('active');
    prev.classList.add(dir > 0 ? 'exit-left' : 'exit-right');

    next.classList.remove('exit-left', 'exit-right');
    // force reflow
    void next.offsetWidth;
    next.style.transform = dir > 0 ? 'translateX(40px)' : 'translateX(-40px)';
    next.style.opacity = '0';
    next.classList.add('active');

    requestAnimationFrame(() => {
      next.style.transform = '';
      next.style.opacity = '';
    });

    current = idx;
    updateUI();

    setTimeout(() => {
      if (!prev.classList.contains('active')) {
        prev.classList.remove('exit-left', 'exit-right');
      }
    }, 420);
  }

  function next() { goto(current + 1, 1); }
  function prev() { goto(current - 1, -1); }

  // ── Update UI ──────────────────────────────────────────
  function updateUI() {
    slideCounter.textContent = `${current + 1} / ${total}`;
    const pct = ((current) / (total - 1)) * 100;
    progressBar.style.width = pct + '%';
    btnPrev.disabled = current === 0;
    btnNext.disabled = current === total - 1;
  }

  // ── Init first slide ───────────────────────────────────
  slideEls[0].classList.add('active');
  updateUI();

  // ── Keyboard ───────────────────────────────────────────
  document.addEventListener('keydown', e => {
    if (jumpDialog.classList.contains('open')) return;
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    if (e.key === 'g' || e.key === 'G') openJump();
    if (e.key === 'Escape') closeJump();
    if (e.key === 'f' || e.key === 'F') toggleFullscreen();
  });

  // ── Click zones ────────────────────────────────────────
  zoneNext.addEventListener('click', next);
  zonePrev.addEventListener('click', prev);
  btnNext.addEventListener('click', next);
  btnPrev.addEventListener('click', prev);
  slideCounter.addEventListener('click', openJump);

  // ── Fullscreen ─────────────────────────────────────────
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      btnFs.textContent = '⊡';
    } else {
      document.exitFullscreen();
      btnFs.textContent = '⛶';
    }
  }
  btnFs.addEventListener('click', toggleFullscreen);

  // ── Jump to slide ──────────────────────────────────────
  function openJump() {
    jumpDialog.classList.add('open');
    jumpInput.value = '';
    jumpInput.focus();
  }
  function closeJump() { jumpDialog.classList.remove('open'); }

  jumpInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const n = parseInt(jumpInput.value, 10);
      if (n >= 1 && n <= total) {
        goto(n - 1, n - 1 > current ? 1 : -1);
      }
      closeJump();
    }
    if (e.key === 'Escape') closeJump();
  });

  jumpDialog.addEventListener('click', e => {
    if (e.target === jumpDialog) closeJump();
  });

  // ── Touch / swipe ──────────────────────────────────────
  let touchX = null;
  document.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 60) { dx < 0 ? next() : prev(); }
    touchX = null;
  }, { passive: true });

  // ── Toast helper ──────────────────────────────────────
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  }
})();
