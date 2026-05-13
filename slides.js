const SLIDES = [
    // ── COVER ──────────────────────────────────────────
    {
        type: "cover", tag: "Welcome",
        title: "Git & GitHub Workshop",
        subtitle: "From absolute zero to your first deployed website.",
        emoji: "🚀",
        bullets: null, code: null
    },

    {
        type: "concept", tag: "Outcome",
        title: "What will you get from this workshop?",
        emoji: "🎯",
        bullets: [
            "Learn <strong>Git</strong> and <strong>GitHub</strong> from scratch",
            "Understand the technical vocabulary and commands",
            "Build and deploy a website to <strong>GitHub Pages</strong>",
            "Walk away with practical skills for teamwork and CI/CD",
        ]
    },

    {
        type: "concept", tag: "The Pain",
        title: "Why bother learning this?",
        emoji: "😫",
        bullets: [
            "<strong>Fear of breaking things:</strong> You change a working file, and it stops working.",
            "<strong>Lost work:</strong> \"I accidentally deleted my code from yesterday.\"",
            "<strong>Collaboration chaos:</strong> Emailing zip files like <code>project-final-FINAL2.zip</code>.",
            "<strong>\"It works on my machine\":</strong> Your code works for you, but not for your teammate.",
        ]
    },

    // ── TECHNICAL HISTORY & DEFINITIONS ────────────────
    {
        type: "section", tag: "Section 1",
        title: "What is Git?",
        section_num: "01",
        subtitle: "The history and technical definition."
    },

    {
        type: "concept", tag: "Definition",
        title: "What does Wikipedia say?",
        emoji: "📖",
        bullets: [
            "Git is a software for <strong>tracking changes</strong> in any set of files.",
            "Usually used for <strong>coordinating work among programmers</strong> collaboratively developing source code.",
            "Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
        ]
    },

    {
        type: "concept", tag: "History",
        title: "Development of Git",
        emoji: "🐧",
        bullets: [
            "Git was originally authored by <strong>Linus Torvalds</strong> in 2005 for the development of the Linux kernel.",
            "It is a <strong>Distributed Version Control System (DVCS)</strong>.",
            "It speeds up most operations, allows branching, and enables working offline.",
        ]
    },

    {
        type: "concept", tag: "Comparison",
        title: "Distributed vs Centralized",
        emoji: "🕸️",
        bullets: [
            "In a <strong>Centralized</strong> system, everyone connects to one master server. If it goes down, nobody can work.",
            "In a <strong>Distributed</strong> system (like Git), the complete codebase, including its full history, is mirrored on every developer's computer.",
        ]
    },

    {
        type: "concept", tag: "GitHub",
        title: "What is GitHub?",
        emoji: "☁️",
        bullets: [
            "Provider of Internet hosting for software development and version control using Git.",
            "<strong>Git != GitHub</strong>. Git is the tool on your computer; GitHub is the platform in the cloud.",
            "Other alternatives exist, like GitLab or Bitbucket.",
        ]
    },

    {
        type: "concept", tag: "Overview",
        title: "Git Vocabularies",
        emoji: "📚",
        bullets: [
            "<strong>Repository:</strong> The project folder tracking all changes.",
            "<strong>Clone:</strong> Downloading a copy of a repository.",
            "<strong>Add:</strong> Selecting files to be saved (Staging).",
            "<strong>Status:</strong> Checking the current state of files.",
            "<strong>Commit:</strong> Saving a snapshot of your changes.",
            "<strong>Pull:</strong> Downloading updates from the cloud.",
            "<strong>Push:</strong> Uploading your changes to the cloud.",
            "<strong>Branch:</strong> Creating a parallel timeline for a feature.",
            "<strong>Merge:</strong> Combining a branch back into the main project."
        ]
    },

    // ── SETUP ──────────────────────────────────────────
    {
        type: "section", tag: "Section 2",
        title: "Setting up",
        section_num: "02",
        subtitle: "Getting our tools ready."
    },

    {
        type: "concept", tag: "Context",
        title: "What is the Terminal?",
        emoji: "💻",
        bullets: [
            "<strong>The Terminal (or Command Line)</strong> is a text-based way to talk to your computer.",
            "<strong>Why the black screen?</strong> It's how developers worked before mice and GUIs existed.",
            "<strong>Why commands?</strong> It is faster, automatable (scripts), and it's the universal language of remote servers."
        ]
    },

    {
        type: "concept", tag: "Step 1",
        title: "Create a GitHub Account",
        emoji: "👤",
        bullets: [
            "Go to <a href='https://github.com' target='_blank'>github.com</a>",
            "Click <strong>Sign up</strong> in the top right corner",
            "Follow the prompts to create your free account",
        ]
    },

    {
        type: "concept", tag: "Step 2",
        title: "Install Git",
        emoji: "💾",
        bullets: [
            "<strong>Windows:</strong> Download from <a href='https://git-scm.com/download/win' target='_blank'>git-scm.com/download/win</a>",
            "<strong>Mac:</strong> Open Terminal and type <code>git --version</code>",
            "<strong>Linux:</strong> <code>sudo apt install git</code>",
        ]
    },

    {
        type: "command", tag: "Step 3",
        title: "Install GitHub CLI",
        subtitle: "We will use the GitHub CLI (gh) because it makes authentication much easier.",
        bullets: [
            "Download and install from: <a href='https://cli.github.com/' target='_blank'>cli.github.com</a>",
            "This tool securely connects your local computer to your GitHub account."
        ],
        code: null
    },

    {
        type: "command", tag: "Step 4",
        title: "Log in via Terminal",
        subtitle: "Open your terminal and type:",
        code: `gh auth login`,
        bullets: [
            "Choose <strong>GitHub.com</strong>",
            "Choose <strong>HTTPS</strong>",
            "Choose <strong>Login with a web browser</strong>",
            "Copy the 8-digit code and paste it in your browser.",
        ]
    },

    {
        type: "command", tag: "Verify Check",
        title: "Did it work?",
        subtitle: "Let's verify our installations.",
        code: `git --version
gh auth status`,
        bullets: [
            "<strong>If it works:</strong> You will see version numbers and a \"Logged in\" message.",
            "<strong>If it fails:</strong> Close the terminal, open a new one, and try again.",
        ]
    },

    // ── VOCABULARY + HANDS ON ──────────────────────────
    {
        type: "section", tag: "Section 3",
        title: "Vocabulary in Action",
        section_num: "03",
        subtitle: "Learning the terms by building a project."
    },

    {
        type: "command", tag: "Hands-on",
        title: "Create a new project",
        subtitle: "Let's create a folder for a website.",
        code: `mkdir my-website
cd my-website`,
        bullets: []
    },

    {
        type: "concept", tag: "Vocabulary",
        title: "1. Repository",
        emoji: "📦",
        bullets: [
            "Contains all your source code files and their entire history/versions.",
            "<strong>Remote repository:</strong> On the server (GitHub).",
            "<strong>Local repository:</strong> On your client (laptop).",
        ]
    },

    {
        type: "command", tag: "Action",
        title: "Initialize a Repository",
        subtitle: "Make our normal folder a Git repository.",
        code: `git init`,
        bullets: ["Creates a hidden `.git` folder."]
    },

    {
        type: "command", tag: "Vocabulary",
        title: "2. Clone (git clone)",
        subtitle: "If a repository already existed on the server, you would use this instead of git init.",
        code: `git clone https://github.com/username/repo.git`,
        bullets: [
            "Clones (creates a copy) of a repository from the server to the client.",
        ]
    },

    {
        type: "concept", tag: "Vocabulary",
        title: "3. Add (git add)",
        emoji: "➕",
        bullets: [
            "Makes changed, added, or removed files ready to commit.",
            "Moves files into the <strong>Staging Area</strong>.",
        ]
    },

    {
        type: "command", tag: "Action",
        title: "Let's write and add code",
        subtitle: "Create an index.html file, write some code, and stage it.",
        code: `# 1. Create index.html and add some HTML code.
# 2. Stage the file:
git add index.html

# (Or stage everything in the folder at once):
git add .`,
        bullets: []
    },

    {
        type: "command", tag: "Vocabulary",
        title: "4. Status (git status)",
        subtitle: "If you are not sure what’s the current status -> check the status.",
        code: `git status`,
        bullets: [
            "Shows exactly which files are modified, staged, or untracked."
        ]
    },

    {
        type: "concept", tag: "Best Practices",
        title: "Why Commit Messages Matter?",
        emoji: "✍️",
        bullets: [
            "Imagine reading your history 6 months later. \"fix stuff\" won't help you.",
            "<strong>Bad:</strong> <span style='color:#ff6b6b'>\"asdf\", \"changes\", \"fix\"</span>",
            "<strong>Good:</strong> <span style='color:#51cf66'>\"add navigation bar\", \"fix login screen bug\"</span>",
            "<strong>Format:</strong> Use an action verb (add, fix, remove, update) followed by what you did."
        ]
    },

    {
        type: "command", tag: "Vocabulary",
        title: "5. Commit (git commit)",
        subtitle: "Makes staged files ready on the local repository to push to remote.",
        code: `git commit -m "add index.html"`,
        bullets: [
            "<strong>-m</strong>: Stands for 'message'. It attaches your description to the snapshot.",
            "<strong>Rule:</strong> Commit early, commit often, keep your commits small.",
            "Smaller commits result in less code to review!",
        ]
    },

    {
        type: "command", tag: "Action",
        title: "Connecting the Remote Repository",
        subtitle: "Go to GitHub.com → click 'New Repository' → copy the URL.",
        code: `git remote add origin https://github.com/USERNAME/my-website.git`,
        bullets: [
            "This command connects your local repository to the new empty one on GitHub.",
        ]
    },

    {
        type: "concept", tag: "Context",
        title: "Wait, what is 'origin'?",
        emoji: "🏷️",
        bullets: [
            "When we talk to GitHub, the URL is long: <code>https://github.com/user/repo.git</code>",
            "Git creates a nickname for that URL so you don't have to type it out every time.",
            "<strong>'origin'</strong> is simply the default nickname for your cloud repository.",
            "So 'push to origin' just means 'push to my GitHub URL'."
        ]
    },

    {
        type: "command", tag: "Vocabulary",
        title: "6. Push (git push)",
        subtitle: "Pushes (synchronizes) all changes from the local repository to the remote.",
        code: `git branch -M main
git push -u origin main`,
        bullets: [
            "<strong>-M main</strong>: Renames your default branch to 'main'.",
            "<strong>-u</strong>: Remembers your choice so next time you just type <code>git push</code>.",
            "<strong>origin</strong>: The remote nickname.",
            "<strong>main</strong>: The specific branch you are pushing.",
        ]
    },

    {
        type: "command", tag: "Vocabulary",
        title: "7. Pull (git pull)",
        subtitle: "Pulls (synchronizes) all changes from the remote repository to the local.",
        code: `git pull origin main`,
        bullets: [
            "If a teammate pushed changes to GitHub, this downloads them to your laptop.",
            "<strong>origin main</strong> means: Pull from the remote repository ('origin') and grab the 'main' branch.",
        ]
    },

    {
        type: "concept", tag: "Vocabulary",
        title: "8. Branch & Merge",
        emoji: "🌿",
        bullets: [
            "<strong>Branch:</strong> A parallel version of your repository. Create a branch for each feature you want to develop.",
            "<strong>Merge:</strong> Combining one branch into another when the feature is finished.",
            "<strong>Crucial Rule:</strong> Never push directly to the main/master branch on a team. Use branches for features.",
        ]
    },

    {
        type: "diagram", tag: "Concept",
        title: "Why Branches Exist",
        subtitle: "Testing ideas safely in parallel timelines.",
        diagram: [
            {label: "main", sub: "Stable Code", cls: "green"},
            {arrow: "→ split branch →"},
            {label: "feature", sub: "Your messy work", cls: "highlight"},
            {arrow: "→ pull request → merge →"},
            {label: "main", sub: "Updated & Safe", cls: "green"}
        ]
    },

    {
        type: "command", tag: "Action",
        title: "Branching in Action",
        subtitle: "Create a branch, make changes, and push it.",
        code: `git checkout -b "styling-feature"
# ... edit a CSS file ...
git add .
git commit -m "added some styles"
git push -u origin styling-feature`,
        bullets: [
            "<strong>-b</strong>: Tells Git to create a new branch AND switch to it immediately.",
            "<em>Alternative:</em> Newer Git versions use <code>git switch -c styling-feature</code>.",
            "When pushing, we use <code>origin styling-feature</code> because we are pushing to a new branch, not main."
        ]
    },

    {
        type: "concept", tag: "Collaboration",
        title: "Pull Request (PR)",
        emoji: "🔀",
        bullets: [
            "After your implementation on a branch is finalized, open a PR on GitHub.",
            "A PR asks your team to review your code before it merges into the main timeline.",
            "After the PR is reviewed, you <strong>Merge</strong> the changes to the main branch.",
        ]
    },

    // ── THE VISUAL WAY (VS CODE) ───────────────────────
    {
        type: "section", tag: "Section 4",
        title: "The Visual Way",
        section_num: "04",
        subtitle: "You don't always need the terminal."
    },

    {
        type: "concept", tag: "VS Code",
        title: "Source Control in VS Code",
        emoji: "🖥️",
        bullets: [
            "IDEs like VS Code have Git built directly into the interface.",
            "Click the <strong>Source Control</strong> tab (the icon with three connected circles).",
            "It automatically highlights changed files, deleted files, and untracked files.",
            "Everything we just did in the terminal can be done visually here."
        ]
    },

    {
        type: "diagram", tag: "Mapping",
        title: "Terminal to UI Mapping",
        diagram: [
            {label: "git add", sub: "Click the ➕ icon next to a file", cls: ""},
            {arrow: "→"},
            {label: "git commit", sub: "Type message in the box & click 'Commit'", cls: "highlight"},
            {arrow: "→"},
            {label: "git push", sub: "Click 'Sync Changes' button", cls: "green"}
        ]
    },

    // ── PROJECT HYGIENE ────────────────────────────────
    {
        type: "section", tag: "Section 5",
        title: "Project Hygiene",
        section_num: "05",
        subtitle: "README, .gitignore, and keeping your repo clean."
    },

    {
        type: "concept", tag: "README",
        title: "What is a README?",
        emoji: "📄",
        bullets: [
            "The front page of your GitHub repo.",
            "Written in Markdown (<code>.md</code>).",
            "Should answer: What is this project? Why does it exist? How do I use it?",
            "GitHub renders it automatically on the repository home page."
        ]
    },

    {
        type: "concept", tag: ".gitignore",
        title: "What is .gitignore?",
        emoji: "🙈",
        bullets: [
            "A file listing paths Git should <strong>ignore</strong>.",
            "<strong>How to use it?</strong> Just create a file exactly named <code>.gitignore</code> and type the file names inside it.",
            "For example, to ignore a file named <code>test.txt</code>, simply write <code>test.txt</code> on a new line inside.",
            "<strong>Crucial step:</strong> You must <code>git add</code>, commit, and push the <code>.gitignore</code> file itself!",
            "Never commit: <code>node_modules/</code>, <code>.env</code> (secrets), or build folders."
        ],
        code: `# .gitignore example
test.txt
node_modules/
.env
*.log`
    },

    // ── OPEN SOURCE ────────────────────────────────────
    {
        type: "section", tag: "Section 6",
        title: "Open Source",
        section_num: "06",
        subtitle: "Contributing to the community."
    },

    {
        type: "concept", tag: "Issues",
        title: "What are Issues?",
        emoji: "🐛",
        bullets: [
            "GitHub's built-in task and bug tracker.",
            "Anyone can open an issue: bug reports, feature requests, or questions.",
            "Reference them in commits: <code>git commit -m \"fix #42\"</code>",
            "Issues close automatically when a linked PR merges."
        ]
    },

    {
        type: "concept", tag: "Fork",
        title: "What is a Fork?",
        emoji: "🍴",
        bullets: [
            "A <strong>personal copy</strong> of someone else's repository.",
            "You cannot push directly to repositories you do not own.",
            "Fork → Clone → Branch → Commit → Open PR is the standard open source loop."
        ]
    },

    {
        type: "diagram", tag: "Open source loop",
        title: "How do I contribute?",
        diagram: [
            {label: "Fork repo", sub: "on GitHub", cls: ""},
            {arrow: "→"},
            {label: "Clone fork", sub: "to your PC", cls: "highlight"},
            {arrow: "→"},
            {label: "Make changes", sub: "branch + commit", cls: "green"},
            {arrow: "→"},
            {label: "Open PR", sub: "to original repo", cls: "purple"}
        ]
    },

    {
        type: "concept", tag: "Portfolio",
        title: "Your GitHub Profile",
        emoji: "🏆",
        bullets: [
            "Your GitHub Profile is the modern developer resume.",
            "The <strong>Green Squares</strong> (contribution graph) show your daily commit activity.",
            "Companies look at your profile to see your code quality, projects, and consistency.",
            "Contribute to open source or push your own projects to build it up!"
        ]
    },

    // ── ADVANCED COMMANDS ──────────────────────────────
    {
        type: "section", tag: "Section 7",
        title: "Advanced Commands",
        section_num: "07",
        subtitle: "Handling complex updates."
    },

    {
        type: "command", tag: "Fetch",
        title: "What is git fetch?",
        subtitle: "Pull = Fetch + Merge. What if you only want to download without merging?",
        code: `git fetch origin main`,
        bullets: [
            "Downloads updates from GitHub but <strong>does not</strong> merge them into your working files.",
            "It is safe to do anytime to see what teammates have been working on."
        ]
    },

    {
        type: "command", tag: "Cherry Pick",
        title: "What is git cherry-pick?",
        subtitle: "When you want ONE specific commit from another branch, but not the whole branch.",
        code: `git cherry-pick a1b2c3d`,
        bullets: [
            "Grabs exactly one commit (using its hash ID) and applies it to your current branch.",
            "Useful when someone fixes a critical bug in a messy feature branch, and you only want the bugfix."
        ]
    },

    // ── WHAT IF (TROUBLESHOOTING) ──────────────────────
    {
        type: "section", tag: "Section 8",
        title: "What if...?",
        section_num: "08",
        subtitle: "Troubleshooting common scenarios."
    },

    {
        type: "command", tag: "Scenario",
        title: "What if I already wrote code?",
        subtitle: "You have a folder of code, but no Git yet.",
        code: `cd my-existing-folder
git init
git add .
git commit -m "initial commit: add existing code"`,
        bullets: ["It's never too late to start tracking changes."]
    },

    {
        type: "command", tag: "Scenario",
        title: "What if I accidentally deleted a file?",
        subtitle: "You deleted it on your computer, but Git remembers.",
        code: `git restore my-file.txt`,
        bullets: ["Git brings the file back exactly as it was in the last commit."]
    },

    {
        type: "command", tag: "Scenario",
        title: "What if I cloned the wrong repo?",
        subtitle: "Or you initialized git in the wrong folder.",
        code: `rm -rf .git`,
        bullets: [
            "Deleting the hidden <code>.git</code> folder completely removes Git from the folder.",
            "Your files are safe, but the tracking history is gone."
        ]
    },

    {
        type: "command", tag: "Scenario",
        title: "What if my push failed?",
        subtitle: "Git says 'updates were rejected because the remote contains work that you do not have locally'.",
        code: `git pull origin main
# Fix conflicts if any
git push origin main`,
        bullets: ["Someone pushed code while you were working. You MUST pull their code before you can push yours."]
    },

    {
        type: "warning", tag: "Scenario",
        title: "What if Git says there's a conflict?",
        emoji: "⚔️",
        bullets: [
            "Git pauses the merge because two people edited the <strong>exact same line</strong>.",
            "Open the file. Git adds markers: <code><<<<<<< HEAD</code> and <code>=======</code>.",
            "Delete the markers, keep the code you want, and commit the file."
        ]
    },

    {
        type: "command", tag: "Scenario",
        title: "What if I want an older version?",
        subtitle: "Git is a time machine. Let's travel back.",
        code: `# Look at the history, find the commit hash (e.g. 5f2a1b)
git log --oneline

# Temporarily go back to look around:
git checkout 5f2a1b

# OR permanently undo everything after that commit:
git reset --hard 5f2a1b`,
        bullets: []
    },

    {
        type: "concept", tag: "Scenario",
        title: "What if I forgot to commit?",
        emoji: "🤷",
        bullets: [
            "Git is not magic. It only tracks what you explicitly tell it to track.",
            "If you work for 3 days and don't commit, and then delete your files... they are gone.",
            "Commit often!"
        ]
    },

    {
        type: "command", tag: "Scenario",
        title: "What if I committed the wrong file?",
        subtitle: "You typed 'git commit' but realized you added a file you shouldn't have.",
        code: `# Undo the commit, but keep the files on your PC:
git reset --soft HEAD~1

# Now unstage the bad file:
git restore --staged bad-file.txt

# Commit again:
git commit -m "the right files this time"`,
        bullets: []
    },

    {
        type: "command", tag: "Scenario",
        title: "What if I need to switch tasks immediately?",
        subtitle: "You are halfway through a feature, but an urgent bug comes up. You aren't ready to commit.",
        code: `git stash          # Saves your messy work invisibly
git switch main    # Go fix the bug
# ...later...
git switch my-branch
git stash pop      # Restores your messy work`,
        bullets: []
    },

    // ── DEPLOYMENT & RECAP ─────────────────────────────
    {
        type: "section", tag: "Section 9",
        title: "Deployment",
        section_num: "09",
        subtitle: "Getting your code live."
    },

    {
        type: "concept", tag: "Deployment",
        title: "GitHub Pages & CI/CD",
        emoji: "🌐",
        bullets: [
            "<strong>CI/CD:</strong> Continuous Integration / Continuous Deployment. Automating testing and delivery of code.",
            "<strong>GitHub Pages</strong> automatically deploys your HTML directly from your repository.",
            "Go to Repo Settings -> Pages -> Set source branch to 'main' and Save.",
            "Just edit, push, and your changes are live automatically."
        ]
    },

    {
        type: "recap", tag: "Cheat Sheet",
        title: "Commands to remember",
        code: `git clone URL            # Download repo
git status               # Check status
git add .                # Stage changes
git commit -m "msg"      # Save snapshot
git push origin main     # Send to cloud
git pull origin main     # Get from cloud
git checkout -b branch   # Create branch
git reset --soft HEAD~1  # Undo commit
git stash                # Save WIP`,
        bullets: []
    },

    {
        type: "cover", tag: "Congratulations 🎉",
        title: "You are now using Git & GitHub.",
        emoji: "🌟",
        subtitle: "Keep practicing. Every expert was once a beginner who typed git status and had no idea what it meant.",
        bullets: null, code: null
    }
];
