# H4CK-O-W33N

Landing page for the **H4CK-O-W33N** Hacktoberfest 2026 meetup — build a haunted
lantern, wake it up with AI. Free workshop at FabLab Spinderihallerne,
Spinderigade 11H, Vejle — Wed 28 Oct 2026, 15:00–20:00. Ages 13+.

Static site: plain HTML, CSS and JavaScript — no build step, no dependencies.

## Files

| File         | Purpose                                            |
| ------------ | -------------------------------------------------- |
| `index.html` | Page markup                                        |
| `style.css`  | All styles + responsive breakpoints                |
| `script.js`  | Countdown to the event start                       |

## Local preview

Just open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

The site is served from the root of the `main` branch.

1. Push the branch:
   ```sh
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment**.
3. Set **Source** to *Deploy from a branch*.
4. Choose branch **main** and folder **/ (root)**, then **Save**.
5. Wait for the build, then open **https://simedev42.github.io/h4ck0w33n/**.

`.nojekyll` is included so GitHub Pages serves the files as-is (no Jekyll
processing).

## Things to update before/after launch

- **Sign-up** — currently disabled on purpose. To re-enable, in `index.html`
  restore the real URL on the `.cta` links and remove `aria-disabled="true"`
  (see the comments in the hero and the register box).
- **`<title>` / meta descriptions / `og:` tags** — in `index.html` `<head>`.
  Consider adding an `og:image` for nicer link previews.
- **Event details** — When / Where / Cost / Who blocks and the countdown target
  in `script.js` (`2026-10-28T15:00:00+01:00`).
