# aria-portfolio

A static, single-page portfolio site. No build step, no dependencies — just
`index.html`, `styles.css`, `script.js`, and two PDFs in `assets/`.

## Preview locally

Open `index.html` directly in a browser, or serve it so relative links behave
exactly like they will in production:

```sh
cd portfolio
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

**Option A — user/org site** (lives at `aaradhyaa717.github.io`)
1. Create (or reuse) a repo named exactly `Aaradhyaa717.github.io`.
2. Copy everything in this `portfolio/` folder into the root of that repo.
3. Commit and push to the `main` branch.
4. In the repo's Settings → Pages, set the source to `main` / `root` (this is
   usually automatic for a repo named like this).
5. Site goes live at `https://aaradhyaa717.github.io`.

**Option B — project site** (lives at `aaradhyaa717.github.io/portfolio`)
1. Push this `portfolio/` folder as its own repo (e.g. named `portfolio`).
2. In Settings → Pages, set the source to the `main` branch, `/ (root)`.
3. Site goes live at `https://aaradhyaa717.github.io/portfolio`.

You already have a repo at `aaradhyaa717.github.io/portfolio` linked from your
GitHub README — Option B will slot straight into that.

## What's left to fill in

- `assets/resume.pdf` and `assets/thesis.pdf` are already your real files —
  swap them out any time you update either document, keeping the same
  filenames so the links on the page keep working.
- Tech Policy Press and GitHub links are real and live.
- If you add a live demo for any project (Cornell Fact-Checker, Learning
  Analytics Dashboard, etc.), add a second link next to the existing GitHub
  link in that project's `<article>` block in `index.html`.
