# Lomvi Robotics website

Static website for lomvi-robotics.ch (GitHub Pages).

- `index.html` – Home
- `project/`, `progress/`, `team/`, `partners/`, `contact/` – one folder per page
- `style.css` – design tokens (Lomvi design system) and shared styles
- `script.js` – header on scroll, mobile menu, hero video
- `images/`, `fonts/` – assets

Publish: push to the repo, then Settings → Pages → Deploy from branch (main, root). `CNAME` keeps the custom domain.
Preview locally: `python3 -m http.server` in this folder, then open http://localhost:8000.
