const SLIDES = [
// ── COVER ──────────────────────────────────────────
{type:"cover", tag:"Welcome",
 title:"What are we learning today?",
 subtitle:"Git & GitHub — from absolute zero to real workflow.",
 emoji:"🚀",
 bullets:null, code:null},

{type:"concept", tag:"The Problem",
 title:"Why does code go wrong?",
 emoji:"😱",
 bullets:[
  "You changed something… and it broke",
  "You deleted a file… accidentally",
  "Your teammate's code clashes with yours",
  "\"Which version was working again?\"",
 ]},

{type:"concept", tag:"The Solution",
 title:"What is Git?",
 emoji:"⏳",
 bullets:[
  "<strong>Git = a time machine for your code</strong>",
  "Tracks every change you ever saved",
  "Lets you go back to any point in time",
  "Works offline — it's on your computer",
 ],
 analogy:"Think of Git like a video game with unlimited save slots. You can save before a boss fight, and reload if you die."},

{type:"concept", tag:"Git vs GitHub",
 title:"What is GitHub?",
 emoji:"☁️",
 bullets:[
  "<strong>GitHub = Git in the cloud</strong>",
  "Backup of your code online",
  "Share with teammates (or the world)",
  "Git ≠ GitHub — Git is the tool, GitHub is the platform",
 ],
 analogy:"Git is the save system. GitHub is Google Drive for your saves."},

// ── SECTION 1 ──────────────────────────────────────
{type:"section", tag:"Section 1",
 title:"Getting started",
 section_num:"01",
 subtitle:"Install, configure, and understand the basics."},

{type:"concept", tag:"Install",
 title:"How do I install Git?",
 emoji:"💾",
 bullets:[
  "<strong>Windows:</strong> <a href='https://git-scm.com/download/win' target='_blank'>git-scm.com/download/win</a>",
  "<strong>Mac:</strong> Run <code>xcode-select --install</code> or use Homebrew",
  "<strong>Linux:</strong> <code>sudo apt install git</code>",
  "Check: <code>git --version</code> should print a version number",
 ]},

{type:"command", tag:"First-time setup",
 title:"How do I tell Git who I am?",
 subtitle:"Run these once — they tag every commit with your identity.",
 code:`git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global core.editor "code --wait"   # VS Code
git config --list   # verify`,},

// ── SECTION 2 ──────────────────────────────────────
{type:"section", tag:"Section 2",
 title:"Core concepts",
 section_num:"02",
 subtitle:"Repos, commits, staging — the mental model."},

{type:"concept", tag:"Repository",
 title:"What is a repository?",
 emoji:"📦",
 bullets:[
  "A <strong>repo</strong> = a folder Git is watching",
  "Contains your files + the entire history of changes",
  "Lives in a hidden <code>.git/</code> folder inside your project",
  "Never delete that <code>.git/</code> folder!",
 ]},

{type:"diagram", tag:"The Three Zones",
 title:"What happens when I save code?",
 subtitle:"Git has three zones your files move through.",
 diagram:[
  {label:"Working Directory", sub:"Files you edit", cls:""},
  {arrow:"→  git add  →"},
  {label:"Staging Area", sub:"\"Ready to save\"", cls:"highlight"},
  {arrow:"→  git commit  →"},
  {label:"Repository", sub:"Permanent history", cls:"green"},
 ]},

{type:"concept", tag:"Commit",
 title:"What is a commit?",
 emoji:"💾",
 bullets:[
  "<strong>Commit = a save point in a game</strong>",
  "A snapshot of your staged files at one moment",
  "Has a unique ID (called a SHA/hash)",
  "Has your name, time, and a message",
 ],
 analogy:"Every commit is a photo. Your history is a photo album you can scroll through forever."},

{type:"command", tag:"Your first repo",
 title:"What if I have no code yet?",
 subtitle:"Starting fresh from scratch:",
 code:`mkdir my-project
cd my-project
git init          # creates .git/
# start coding...
git add .         # stage everything
git commit -m "first commit"`,},

{type:"command", tag:"Existing code",
 title:"What if I already wrote code?",
 subtitle:"You have a folder. No Git yet. Easy fix:",
 code:`cd my-existing-project
git init
git add .
git commit -m "initial commit: add existing code"`,},

{type:"command", tag:"Daily loop",
 title:"What do I type every day?",
 subtitle:"The core Git loop — memorise these 3 commands:",
 code:`git status           # what changed?
git add .            # stage all changes
git commit -m "what I did"   # save snapshot`,},

{type:"command", tag:"Status & Diff",
 title:"How do I see what changed?",
 code:`git status           # overview of changes
git diff             # line-by-line changes (unstaged)
git diff --staged    # changes ready to commit
git log --oneline    # quick history`,},

// ── SECTION 3 ──────────────────────────────────────
{type:"section", tag:"Section 3",
 title:"GitHub & Authentication",
 section_num:"03",
 subtitle:"Connecting your local Git to the cloud."},

{type:"concept", tag:"Auth options",
 title:"How do I log in to GitHub?",
 emoji:"🔐",
 bullets:[
  "<strong>GitHub CLI</strong> — easiest for beginners ✅",
  "<strong>HTTPS + token</strong> — works everywhere, one-time setup",
  "<strong>SSH key</strong> — best for daily use once set up",
 ]},

{type:"command", tag:"GitHub CLI (Easiest)",
 title:"Option 1: GitHub CLI",
 subtitle:"Install gh, then run one command:",
 code:`# Install: https://cli.github.com/
gh auth login
# Follow prompts → Browser → Authorize → Done ✅`,},

{type:"command", tag:"HTTPS Token",
 title:"Option 2: HTTPS Personal Access Token",
 code:`# 1. GitHub → Settings → Developer Settings
#    → Personal Access Tokens → Tokens (classic)
#    → Generate new token (check: repo, workflow)

# 2. When Git asks for password, paste the token
#    (not your GitHub password!)

# Save it so Git remembers:
git config --global credential.helper store`,},

{type:"command", tag:"SSH Key",
 title:"Option 3: SSH Key",
 code:`ssh-keygen -t ed25519 -C "you@email.com"
# Press Enter for defaults

cat ~/.ssh/id_ed25519.pub   # copy this

# GitHub → Settings → SSH Keys → New → Paste
ssh -T git@github.com       # test connection`,},

// ── SECTION 4 ──────────────────────────────────────
{type:"section", tag:"Section 4",
 title:"Local ↔ GitHub",
 section_num:"04",
 subtitle:"Pushing, pulling, cloning — the remote workflow."},

{type:"diagram", tag:"Remote concept",
 title:"How do local and remote connect?",
 diagram:[
  {label:"Your Computer", sub:"local repo", cls:""},
  {arrow:"⇄  push / pull  ⇄"},
  {label:"GitHub", sub:"remote repo", cls:"highlight"},
 ]},

{type:"command", tag:"Case: No GitHub repo yet",
 title:"What if I have local code, no GitHub repo?",
 code:`# On GitHub: New Repository → copy the URL

git remote add origin https://github.com/YOU/REPO.git
git branch -M main
git push -u origin main   # first push`,},

{type:"command", tag:"Case: GitHub repo exists",
 title:"What if GitHub repo exists, no local?",
 subtitle:"Clone it — downloads the whole project:",
 code:`git clone https://github.com/USER/REPO.git
cd REPO
# Start working!`,},

{type:"command", tag:"Both exist",
 title:"What if both repos exist already?",
 code:`# Just push and pull normally:
git pull origin main   # get latest
# ...make changes...
git add . && git commit -m "my change"
git push origin main   # send to GitHub`,},

{type:"command", tag:"Push & Pull",
 title:"Push, Pull, Fetch — what's the difference?",
 code:`git push     # send MY commits → GitHub
git pull     # get GitHub commits → my machine
             # (= fetch + merge in one step)
git fetch    # download updates, DON'T merge yet
             # safe to check before merging`,},

// ── SECTION 5 ──────────────────────────────────────
{type:"section", tag:"Section 5",
 title:"Branching",
 section_num:"05",
 subtitle:"Work on features without breaking main."},

{type:"concept", tag:"Branches",
 title:"Why branches?",
 emoji:"🌿",
 bullets:[
  "<strong>Branch = an alternate timeline</strong>",
  "<code>main</code> stays clean and working",
  "You experiment in your branch safely",
  "Merge back when it's ready",
 ],
 analogy:"Like creating a parallel universe to test your idea. If it works, merge it in. If not, delete it — no harm done."},

{type:"command", tag:"Branch commands",
 title:"How do I create and use a branch?",
 code:`git branch                    # list branches
git checkout -b my-feature    # create + switch
# (modern way):
git switch -c my-feature      # same thing

git switch main               # go back to main
git branch -d my-feature      # delete branch`,},

{type:"diagram", tag:"Branch flow",
 title:"What does branching look like?",
 diagram:[
  {label:"main", sub:"stable code", cls:"green"},
  {arrow:"→ branch →"},
  {label:"feature", sub:"your work", cls:"highlight"},
  {arrow:"→ merge →"},
  {label:"main", sub:"updated!", cls:"green"},
 ]},

// ── SECTION 6 ──────────────────────────────────────
{type:"section", tag:"Section 6",
 title:"Merging & Conflicts",
 section_num:"06",
 subtitle:"Bringing branches back together."},

{type:"command", tag:"Merging",
 title:"How do I merge a branch?",
 code:`git switch main             # go to main
git merge my-feature        # bring in changes
git branch -d my-feature    # clean up`,},

{type:"warning", tag:"Merge Conflict",
 title:"What is a merge conflict?",
 emoji:"⚔️",
 bullets:[
  "Two people edited the <strong>same line</strong> differently",
  "Git says: \"I need a referee.\"",
  "Git marks the conflict in the file",
  "You pick which version to keep, then commit",
 ],
 analogy:"Two chefs edited the same recipe line. Git prints both versions and asks you to decide which one stays."},

{type:"command", tag:"Resolve conflict",
 title:"How do I fix a merge conflict?",
 code:`# Git marks conflicts like this in the file:
<<<<<<< HEAD
your version of the line
=======
their version of the line
>>>>>>> feature-branch

# 1. Open the file, delete the markers
# 2. Keep the version you want
# 3. Then:
git add .
git commit -m "resolve merge conflict"`,},

// ── SECTION 7 ──────────────────────────────────────
{type:"section", tag:"Section 7",
 title:"GitHub Collaboration",
 section_num:"07",
 subtitle:"Pull Requests, Issues, Forks, and the open source loop."},

{type:"concept", tag:"Pull Request",
 title:"What is a Pull Request?",
 emoji:"🔀",
 bullets:[
  "A formal request to <strong>merge your branch into main</strong>",
  "Teammates review your code before it merges",
  "Happens entirely on GitHub (not your terminal)",
  "= \"Please pull my changes into your branch\"",
 ],
 analogy:"A PR is like handing in your homework for review before it counts. The teacher (reviewer) can approve, request changes, or comment."},

{type:"command", tag:"PR workflow",
 title:"How do I open a Pull Request?",
 code:`# 1. Push your feature branch:
git push origin my-feature

# 2. Go to GitHub → your repo
#    You'll see a "Compare & pull request" button

# 3. Fill in title + description
# 4. Click "Create pull request"
# 5. Wait for review → Merge → Done ✅`,},

{type:"concept", tag:"Issues",
 title:"What are Issues?",
 emoji:"🐛",
 bullets:[
  "GitHub's built-in task / bug tracker",
  "Anyone can open an issue: bug, feature request, question",
  "Reference in commits: <code>git commit -m \"fix #42\"</code>",
  "Closes automatically when linked PR merges",
 ]},

{type:"concept", tag:"Fork",
 title:"What is a Fork?",
 emoji:"🍴",
 bullets:[
  "A <strong>personal copy</strong> of someone else's repo",
  "You can't push directly to repos you don't own",
  "Fork → clone → change → PR is the open source loop",
 ]},

{type:"diagram", tag:"Open source loop",
 title:"How do I contribute to open source?",
 diagram:[
  {label:"Fork repo", sub:"on GitHub", cls:""},
  {arrow:"→"},
  {label:"Clone fork", sub:"to your PC", cls:"highlight"},
  {arrow:"→"},
  {label:"Make changes", sub:"branch + commit", cls:"green"},
  {arrow:"→"},
  {label:"Open PR", sub:"to original repo", cls:"purple"},
 ]},

// ── SECTION 8 ──────────────────────────────────────
{type:"section", tag:"Section 8",
 title:"Essential files",
 section_num:"08",
 subtitle:"README, .gitignore, and project hygiene."},

{type:"concept", tag:"README",
 title:"What is a README?",
 emoji:"📄",
 bullets:[
  "The front page of your GitHub repo",
  "Written in Markdown (<code>.md</code>)",
  "Should answer: What? Why? How to use?",
  "GitHub renders it automatically — make it good!",
 ]},

{type:"concept", tag:".gitignore",
 title:"What is .gitignore?",
 emoji:"🙈",
 bullets:[
  "A file listing paths Git should <strong>ignore</strong>",
  "Never commit: <code>node_modules/</code>, <code>.env</code>, build folders",
  "GitHub has templates: <a href='https://gitignore.io' target='_blank'>gitignore.io</a>",
 ],
 code:`# .gitignore example
node_modules/
.env
*.log
dist/
.DS_Store`,},

// ── SECTION 9 ──────────────────────────────────────
{type:"section", tag:"Section 9",
 title:"Teamwork",
 section_num:"09",
 subtitle:"Working with others without chaos."},

{type:"concept", tag:"Working alone",
 title:"Working alone — the simple loop",
 emoji:"🧑‍💻",
 bullets:[
  "<code>git add .</code> → <code>git commit</code> → <code>git push</code>",
  "One branch (<code>main</code>) is fine for solo work",
  "Still use commits — future-you will thank you",
 ]},

{type:"concept", tag:"Working in a team",
 title:"Working in a team — the team loop",
 emoji:"👥",
 bullets:[
  "<strong>Always pull before you push</strong>",
  "One feature = one branch",
  "Small commits with clear messages",
  "PR before merging to main",
  "Never force-push to shared branches",
 ]},

{type:"command", tag:"Someone changed remote",
 title:"What if someone changed the repo first?",
 code:`git pull origin main
# If conflicts appear → resolve → commit

# Better with rebase (cleaner history):
git pull --rebase origin main`,},

// ── SECTION 10 ─────────────────────────────────────
{type:"section", tag:"Section 10",
 title:"Undoing things",
 section_num:"10",
 subtitle:"Git is a time machine — use it!"},

{type:"command", tag:"Undo staged",
 title:"How do I unstage a file?",
 code:`git restore --staged file.txt   # unstage
git restore file.txt            # discard changes
git clean -fd                   # remove untracked files`,},

{type:"command", tag:"Undo commits",
 title:"How do I undo a commit?",
 code:`# Undo last commit, keep changes:
git reset --soft HEAD~1

# Undo last commit, discard changes (dangerous!):
git reset --hard HEAD~1

# Safe undo — creates a new "revert" commit:
git revert HEAD`,},

{type:"command", tag:"Stash",
 title:"What if I need to switch tasks mid-work?",
 subtitle:"Stash saves your uncommitted work temporarily:",
 code:`git stash          # save work-in-progress
git switch other-branch
# do stuff...
git switch back
git stash pop      # restore your work`,},

// ── SECTION 11 ─────────────────────────────────────
{type:"section", tag:"Section 11",
 title:"Common mistakes",
 section_num:"11",
 subtitle:"Everyone makes these. Here's how to fix them."},

{type:"warning", tag:"Mistake 1",
 title:"Committed to the wrong branch",
 code:`# Move last commit to a new branch:
git branch new-branch   # create branch at current point
git reset --hard HEAD~1 # remove commit from main
git switch new-branch   # go to it — commit is there`,},

{type:"warning", tag:"Mistake 2",
 title:"Committed a secret / password",
 emoji:"🚨",
 bullets:[
  "Revoke the secret <strong>immediately</strong> — GitHub is public",
  "Remove it: <code>git reset --soft HEAD~1</code>, delete, re-commit",
  "Or use <code>git filter-branch</code> / <a href='https://rtyley.github.io/bfg-repo-cleaner/' target='_blank'>BFG Repo Cleaner</a>",
  "Add <code>.env</code> to <code>.gitignore</code> right now!",
 ]},

{type:"warning", tag:"Mistake 3",
 title:"Push rejected — remote is ahead",
 code:`# Error: failed to push — tip of branch is behind

git pull origin main   # get their changes first
# resolve any conflicts
git push origin main   # now it works`,},

{type:"warning", tag:"Mistake 4",
 title:"Accidentally deleted a file",
 code:`git restore file.txt        # restore from last commit
git checkout HEAD -- file.txt  # alternative`,},

// ── SECTION 12 ─────────────────────────────────────
{type:"section", tag:"Section 12",
 title:"Best practices",
 section_num:"12",
 subtitle:"Habits that make you a great collaborator."},

{type:"concept", tag:"Commit messages",
 title:"How do I write good commit messages?",
 emoji:"✍️",
 bullets:[
  "<strong>Bad:</strong> <span class='tag-warn'>\"fix stuff\"  \"asdf\"  \"changes\"</span>",
  "<strong>Good:</strong> <span class='tag-good'>\"add login form validation\"</span>",
  "Format: <code>verb: what you did</code>",
  "Imagine reading it 6 months later — will it make sense?",
 ]},

{type:"concept", tag:"Habits",
 title:"The golden rules",
 emoji:"⭐",
 bullets:[
  "Commit often — small snapshots are better",
  "Never commit directly to <code>main</code> on a team",
  "Pull before you push",
  "Use branches for features/fixes",
  "Write a README on every project",
 ]},

// ── RECAP ──────────────────────────────────────────
{type:"section", tag:"Section 13",
 title:"Recap",
 section_num:"🎓",
 subtitle:"The whole workshop in one screen."},

{type:"recap", tag:"The full picture",
 title:"Everything you now know",
 bullets:[
  "<strong>Git</strong> = local version control time machine",
  "<strong>GitHub</strong> = cloud backup + collaboration",
  "<strong>Commit</strong> = save point | <strong>Branch</strong> = timeline | <strong>Merge</strong> = combine",
  "<strong>Push</strong> = local→cloud | <strong>Pull</strong> = cloud→local | <strong>Clone</strong> = download",
  "<strong>PR</strong> = review before merge | <strong>Fork</strong> = your copy of someone's repo",
  "<strong>Conflict</strong> = you pick the winner | <strong>.gitignore</strong> = what to skip",
 ]},

{type:"recap", tag:"Cheat sheet",
 title:"The commands you'll use daily",
 code:`git init / git clone URL
git status | git diff | git log --oneline
git add . | git commit -m "message"
git push | git pull
git checkout -b branch | git switch -c branch
git merge branch
git stash / git stash pop
git reset --soft HEAD~1
git restore file`,},

{type:"cover", tag:"You did it 🎉",
 title:"Go build something and break things safely.",
 emoji:"🌟",
 subtitle:"Every expert was once a beginner who typed git status and had no idea what it meant.",
 bullets:null, code:null},
];
