# Akham Travel — Budget-Appropriate Frontend Plan

> Combines the visual identity from `prepr/akham-travel-design.md` with the reduced
> scope from `prepr/akham-travel-proforma-frontend-50k.md` (65 000 DZD budget).
> Status: **planning only — not yet implemented.**

---

## What's kept from the design doc

- **Visual identity**
  - Background: `#F4EFE6` (lime white)
  - Accent: `#C8A27A` (sand ochre)
  - Primary (buttons, links): `#2F6F8F` (M'zab blue)
  - Text: `#2B2118` (dark earth)
  - Headings: Cormorant Garamond (serif)
  - Body: Inter (sans-serif)
- **Page structure**: Home, Programs list, Program detail, Hotel, Etiquette, Contact
- **Content sections on Home**: hero (static image), story section, programs list
  (static cards, no hover video), final CTA

## What's cut (per 65k budget scope)

- No hero/card video, no hover-play previews, no GIFs
- No scroll-reveal / IntersectionObserver animations, no parallax, no smooth-scroll libraries
- No RTL/Arabic, no i18n (single language — French)
- No booking flow (`/book`, `/my-trip`) — replaced by a simple contact/inquiry form
- No Next.js SSR/SSG, no `django-unfold`, no Celery/Redis/S3 media pipeline, no PDF/WhatsApp
- No custom admin styling — plain Django admin (backend side, out of scope for this frontend plan)

## Stack

- **Vite + React (JS)** — already scaffolded in `frontend/`
- **React Router** for pages: `/`, `/programs`, `/programs/:slug`, `/hotel`, `/etiquette`, `/contact`
- **Plain CSS or Tailwind CSS** (static utility classes, no animation plugins) following the design palette/fonts
- Static content hardcoded or loaded from a local JSON file (no CMS/API yet);
  contact form posts to a placeholder endpoint (to be wired to Django later)
- Fonts self-hosted (WOFF2, Latin subset only)

## File/folder structure

```
frontend/src/
├── assets/            # static images, fonts
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProgramCard.jsx   (static image only)
│   └── ContactForm.jsx
├── pages/
│   ├── Home.jsx
│   ├── Programs.jsx
│   ├── ProgramDetail.jsx
│   ├── Hotel.jsx
│   ├── Etiquette.jsx
│   └── Contact.jsx
├── data/
│   └── programs.js    # static placeholder data until backend exists
├── styles/
│   └── theme.css       # color tokens, font-face, base styles
└── App.jsx / main.jsx
```

## Implementation order

1. Theme setup — fonts, color tokens, base layout (Header/Footer)
2. Home page (static hero, story, programs preview, CTA)
3. Programs list + Program detail pages
4. Hotel page
5. Etiquette page
6. Contact page (form UI only, no backend wiring yet)
7. Responsive pass (mobile-first, no layout shift) + basic Lighthouse check
