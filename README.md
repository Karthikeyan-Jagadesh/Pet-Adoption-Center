# Pet Adoption Center

A modern, multi-page pet adoption website with a minimal design system, responsive layout, and interactive JavaScript features.

---

## Site Identity

| | |
|---|---|
| **Name** | Pet Adoption Center |
| **Type** | Multi-page frontend website |
| **Stack** | HTML5, CSS3, JavaScript |
| **Version** | 2.0.0 |

---

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `index.html` | Hero, stats, process overview, featured pets |
| Pets | `pages/pets.html` | Filterable pet listings |
| Adopt | `pages/adopt.html` | Adoption form with validation |
| How It Works | `pages/how-it-works.html` | Step-by-step adoption guide |
| Success Stories | `pages/success-stories.html` | Adopter testimonials |
| Contact | `pages/contact.html` | Contact info, inquiry form, FAQ |

---

## Project Structure

```
Pet-Adoption-Center/
├── index.html
├── pages/
│   ├── pets.html
│   ├── adopt.html
│   ├── how-it-works.html
│   ├── success-stories.html
│   └── contact.html
├── assets/
│   ├── css/
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── components.css
│   │   └── pages/
│   └── js/
│       ├── main.js
│       ├── pets.js
│       └── adopt.js
└── Resources/
    └── Images/
```

---

## Design System

- **Style:** Minimal modern — neutral grays with a teal accent (`#0F766E`)
- **Typography:** DM Sans + Inter (Google Fonts)
- **Components:** Shared header, footer, cards, buttons, forms

---

## JavaScript Features

- Mobile navigation toggle
- Active page highlighting in nav
- Pet search and filter (species, age, size)
- Adoption form validation with inline errors
- Contact form validation
- Pet auto-fill from URL on adopt page (`?pet=Max`)

---

## Run Locally

Open `index.html` in your browser, or use a local server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000`

---

## Deploy to GitHub Pages

1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://<username>.github.io/Pet-Adoption-Center/`

---

## Preview

Screenshots are available in `Resources/Screenshots/`.

---

## License

Open source — feel free to use and modify.
