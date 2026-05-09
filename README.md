# The Scholar's Circle Website

Static single-page website for a home tutoring service in Lahore.

## Tech Stack

- `index.html`: page content and structure
- `styles.css`: design system, layout, responsive styles
- `script.js`: mobile menu, smooth scrolling, WhatsApp form routing, reveal animations
- `assets/`: images used by the page

## Project Structure

```text
mama website/
├── assets/
│   ├── hero-study.jpg
│   ├── tutor-profile.jpg
│   ├── map.png
│   └── whatsapp-icon.jpg
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Run Locally

No build step is required.

1. Open `index.html` directly in a browser, or
2. Serve with any static server (recommended for testing):

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Content Update Guide

## 1) Tutor and Service Copy

Edit text in `index.html` sections:
- Hero
- About
- Subjects
- Why Choose Us
- Contact
- Footer

## 2) Contact Information

Update these values in `index.html`:
- WhatsApp/Phone display text
- Email address
- Residence/availability

## 3) WhatsApp Routing Number (Important)

Three places must stay in sync:

1. Hero CTA link: `index.html` (`https://wa.me/...`)
2. Floating WhatsApp button: `index.html` (`https://wa.me/...`)
3. Form submit target: `script.js`, `targetPhone` constant

Use international format without `+` or spaces, e.g. `923XXXXXXXXX`.

## Design Notes

- Main visual theme variables are in `:root` inside `styles.css`.
- Fonts are loaded via Google Fonts import in `styles.css`.
- Responsive behavior is defined in media queries near the bottom of `styles.css`.

## Behavior Notes

`script.js` handles:
- Mobile nav toggle
- Sticky header style on scroll
- Smooth anchor scrolling with header offset
- Contact form -> prefilled WhatsApp message
- IntersectionObserver-based reveal animation

## Deployment

Deploy as static files on any host:
- GitHub Pages
- Netlify
- Vercel (static)
- Shared hosting / cPanel

No backend is required for current functionality.

## Recommended Next Improvements

- Add proper `rel="noopener noreferrer"` to external links using `target="_blank"`.
- Keep all WhatsApp links and JS number consistent.
- Add Open Graph/Twitter metadata in `<head>`.
- Improve accessibility for mobile menu (`aria-expanded`, keyboard close).
