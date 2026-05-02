# Glassmorphism Design System

> A complete visual reference for building premium frosted-glass interfaces.

---

## Table of Contents

1. [Colour Palette](#colour-palette)
2. [Typography](#typography)
3. [Glass Card Variants](#glass-card-variants)
4. [Buttons](#buttons)
5. [Form Inputs](#form-inputs)
6. [Tags & Badges](#tags--badges)
7. [CSS Variables](#css-variables)
8. [Design Rules](#design-rules)
9. [Implementation Reference](#implementation-reference)
10. [Motion Tokens](#motion-tokens)

---

## Colour Palette

| Name    | Hex / RGBA                    | Usage                          |
|---------|-------------------------------|--------------------------------|
| White   | `#FFFFFF`                     | Page background                |
| Sky Blue| `#38bdf8`                     | Primary accent, highlights     |
| Frost   | `rgba(255,255,255, 0.08–0.18)`| Glass card fill                |
| Violet  | `#a78bfa`                     | Secondary accent               |
| Rose    | `#f472b6`                     | Danger / error states          |
| Emerald | `#34d399`                     | Success states                 |
| Amber   | `#fbbf24`                     | Warning states                 |
| Navy    | `#0f172a`                     | Deep background gradient end   |

**Core duo — white & blue:**

- Background: `#FFFFFF` (white) with a sky-blue gradient overlay `rgba(56,189,248, 0.12)`
- Accent: `#38bdf8` (sky blue) for borders, buttons, and focus rings
- Glass fill: `rgba(255,255,255, 0.55)` — heavier opacity since background is light

---

## Typography

| Role         | Font              | Weight | Size  | Notes                          |
|--------------|-------------------|--------|-------|--------------------------------|
| Display      | Syne              | 800    | 3rem  | Hero headings                  |
| Heading H1   | Syne              | 700    | 2rem  | Section titles                 |
| Heading H2   | Syne              | 700    | 1.4rem| Card titles                    |
| Body         | DM Sans           | 300    | 1rem  | Paragraph text                 |
| Label        | Syne              | 700    | 0.7rem| Uppercase, 0.18em letter-spacing|
| Monospace    | Courier New       | 400    | 0.85rem| Code snippets                 |

**Google Fonts import:**

```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
```

**Text colours (white/blue theme):**

```css
--text-primary:   #0f172a;               /* dark navy for headings */
--text-secondary: rgba(15, 23, 42, 0.70); /* body copy */
--text-muted:     rgba(15, 23, 42, 0.45); /* labels, captions */
```

---

## Glass Card Variants

### Standard Frost Card

```css
.glass-card {
  background:          rgba(255, 255, 255, 0.55);
  border:              1px solid rgba(255, 255, 255, 0.80);
  backdrop-filter:     blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius:       24px;
  box-shadow:          0 8px 32px rgba(56, 189, 248, 0.12);
}
```

### Blue Accent Card

```css
.glass-card--accent {
  background:          rgba(56, 189, 248, 0.12);
  border:              1px solid rgba(56, 189, 248, 0.35);
  backdrop-filter:     blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius:       24px;
  box-shadow:          0 8px 32px rgba(56, 189, 248, 0.18);
}
```

### Gradient Glass Card

```css
.glass-card--gradient {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.60),
    rgba(56, 189, 248, 0.15)
  );
  border:          1px solid rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  border-radius:   24px;
}
```

---

## Buttons

### Primary

```css
.btn-primary {
  background:    linear-gradient(135deg, #38bdf8, #0ea5e9);
  color:         #ffffff;
  border:        none;
  border-radius: 100px;
  padding:       0.7rem 1.6rem;
  font-family:   'Syne', sans-serif;
  font-weight:   700;
  font-size:     0.85rem;
  box-shadow:    0 4px 20px rgba(56, 189, 248, 0.40);
  cursor:        pointer;
  transition:    transform 0.18s, box-shadow 0.18s;
}
.btn-primary:hover {
  transform:  translateY(-2px);
  box-shadow: 0 8px 28px rgba(56, 189, 248, 0.55);
}
```

### Glass Secondary

```css
.btn-secondary {
  background:      rgba(255, 255, 255, 0.50);
  color:           #0f172a;
  border:          1px solid rgba(56, 189, 248, 0.35);
  border-radius:   100px;
  padding:         0.7rem 1.6rem;
  backdrop-filter: blur(12px);
  font-family:     'Syne', sans-serif;
  font-weight:     700;
  cursor:          pointer;
  transition:      transform 0.18s;
}
.btn-secondary:hover { transform: translateY(-2px); }
```

### Ghost Outline

```css
.btn-ghost {
  background:    transparent;
  color:         #38bdf8;
  border:        1px solid rgba(56, 189, 248, 0.50);
  border-radius: 100px;
  padding:       0.7rem 1.6rem;
  font-family:   'Syne', sans-serif;
  font-weight:   700;
  cursor:        pointer;
}
```

---

## Form Inputs

```css
.glass-input {
  background:      rgba(255, 255, 255, 0.60);
  border:          1px solid rgba(56, 189, 248, 0.25);
  border-radius:   10px;
  padding:         0.75rem 1rem;
  color:           #0f172a;
  font-family:     'DM Sans', sans-serif;
  font-size:       0.9rem;
  width:           100%;
  outline:         none;
  backdrop-filter: blur(8px);
  transition:      border-color 0.2s, background 0.2s;
}
.glass-input::placeholder { color: rgba(15, 23, 42, 0.40); }
.glass-input:focus {
  border-color: rgba(56, 189, 248, 0.70);
  background:   rgba(255, 255, 255, 0.80);
  box-shadow:   0 0 0 3px rgba(56, 189, 248, 0.15);
}
```

---

## Tags & Badges

```css
/* Base tag */
.tag {
  font-family:    'Syne', sans-serif;
  font-size:      0.72rem;
  font-weight:    700;
  letter-spacing: 0.06em;
  padding:        0.35rem 0.9rem;
  border-radius:  100px;
}

/* Blue (primary) */
.tag--blue    { background: rgba(56,189,248,0.15);  color: #0369a1; border: 1px solid rgba(56,189,248,0.35); }

/* Violet */
.tag--violet  { background: rgba(167,139,250,0.15); color: #6d28d9; border: 1px solid rgba(167,139,250,0.35); }

/* Emerald */
.tag--success { background: rgba(52,211,153,0.15);  color: #047857; border: 1px solid rgba(52,211,153,0.35); }

/* Amber */
.tag--warning { background: rgba(251,191,36,0.15);  color: #92400e; border: 1px solid rgba(251,191,36,0.35); }

/* Rose */
.tag--danger  { background: rgba(244,114,182,0.15); color: #9d174d; border: 1px solid rgba(244,114,182,0.35); }

/* Neutral */
.tag--neutral { background: rgba(15,23,42,0.06);    color: #475569; border: 1px solid rgba(15,23,42,0.15); }
```

---

## CSS Variables

Paste this in your `:root` for a consistent white + blue glassmorphism theme:

```css
:root {
  /* Background */
  --bg-page:          #f0f9ff;                        /* lightest blue-white */
  --bg-gradient:      linear-gradient(135deg, #ffffff 0%, #e0f2fe 60%, #bae6fd 100%);

  /* Glass surfaces */
  --glass-bg:         rgba(255, 255, 255, 0.55);
  --glass-bg-accent:  rgba(56, 189, 248, 0.12);
  --glass-border:     rgba(255, 255, 255, 0.80);
  --glass-border-blue:rgba(56, 189, 248, 0.35);
  --glass-blur:       blur(18px);
  --glass-shadow:     0 8px 32px rgba(56, 189, 248, 0.12);

  /* Text */
  --text-primary:     #0f172a;
  --text-secondary:   rgba(15, 23, 42, 0.70);
  --text-muted:       rgba(15, 23, 42, 0.45);

  /* Accents */
  --accent-blue:      #38bdf8;
  --accent-blue-dark: #0ea5e9;
  --accent-violet:    #a78bfa;
  --accent-rose:      #f472b6;
  --accent-emerald:   #34d399;
  --accent-amber:     #fbbf24;

  /* Border radius */
  --radius-sm:        8px;
  --radius-md:        16px;
  --radius-lg:        24px;
  --radius-xl:        32px;

  /* Typography */
  --font-display:     'Syne', sans-serif;
  --font-body:        'DM Sans', sans-serif;
  --font-mono:        'Courier New', monospace;
}
```

---

## Design Rules

### 01 — Always blur, never flat

Every glass surface must use `backdrop-filter: blur(12px–24px)`. Without blur, it is just a transparent box — not glass.

### 02 — Layered backgrounds are mandatory

Glass reads as glass only when rich background content sits behind it. For a white/blue theme use a soft radial gradient or floating orb blobs behind all glass cards.

```css
body {
  background: linear-gradient(135deg, #ffffff 0%, #e0f2fe 60%, #bae6fd 100%);
  min-height: 100vh;
}
```

### 03 — Light border, always

Every glass card needs a white or blue-tinted border to simulate the refracted light edge that makes glass feel physical:

```css
border: 1px solid rgba(255, 255, 255, 0.80); /* standard */
border: 1px solid rgba(56, 189, 248, 0.35);  /* blue accent */
```

### 04 — Restrained opacity on light backgrounds

On a white/blue background keep fill opacity between `0.45–0.65`. Going higher looks like a regular white card. Going lower destroys legibility on a light bg.

| Context         | Recommended opacity |
|-----------------|---------------------|
| Standard card   | 0.55                |
| Accent card     | 0.12–0.20           |
| Input fields    | 0.60                |
| Modal / hero    | 0.70                |

### 05 — Performance awareness

`backdrop-filter` is GPU-accelerated but expensive. Limit to 6–8 overlapping glass elements per viewport. Add `will-change: backdrop-filter` only on elements that animate.

### 06 — Accessibility on light glass

Because the background is white/blue and the glass is also light, ensure text contrast ratio is at least 4.5:1. Use dark navy (`#0f172a`) for body text, never light gray.

---

## Implementation Reference

### ✅ Do this

```css
.glass-card {
  background:               rgba(255, 255, 255, 0.55);
  border:                   1px solid rgba(255, 255, 255, 0.80);
  backdrop-filter:          blur(18px);
  -webkit-backdrop-filter:  blur(18px);   /* Safari support */
  border-radius:            24px;
  box-shadow:               0 8px 32px rgba(56, 189, 248, 0.12);
}
```

### ❌ Don't do this

```css
/* Missing backdrop-filter — not glass, just transparent */
.fake-glass {
  background: rgba(255, 255, 255, 0.55);
}

/* Too opaque — completely defeats the glass effect */
.too-solid {
  background: rgba(255, 255, 255, 0.95);
}

/* No border — loses the physical light-edge feel */
.borderless {
  background:      rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(18px);
  /* missing border */
}
```

### Full page boilerplate (white + blue theme)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'DM Sans', sans-serif;
      background: linear-gradient(135deg, #ffffff 0%, #e0f2fe 60%, #bae6fd 100%);
      min-height: 100vh;
      color: #0f172a;
    }

    /* Floating orb blobs for depth */
    .orb {
      position: fixed;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.45;
      pointer-events: none;
    }
    .orb-1 { width: 400px; height: 400px; background: #38bdf8; top: -80px; right: -80px; }
    .orb-2 { width: 300px; height: 300px; background: #a78bfa; bottom: -60px; left: -60px; }

    .glass-card {
      background:              rgba(255, 255, 255, 0.55);
      border:                  1px solid rgba(255, 255, 255, 0.80);
      backdrop-filter:         blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border-radius:           24px;
      box-shadow:              0 8px 32px rgba(56, 189, 248, 0.12);
      padding:                 2rem;
    }
  </style>
</head>
<body>
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>

  <div class="glass-card" style="max-width: 480px; margin: 4rem auto;">
    <h1 style="font-family: 'Syne'; font-weight: 800; font-size: 1.8rem;">Hello, Glass.</h1>
    <p style="color: rgba(15,23,42,0.70); margin-top: 0.75rem; font-weight: 300;">
      Your glassmorphism component is ready.
    </p>
  </div>
</body>
</html>
```

---

## Motion Tokens

| Token        | CSS                                          | Use case                     |
|--------------|----------------------------------------------|------------------------------|
| Lift (hover) | `transform: translateY(-3px)`                | Buttons, cards on hover      |
| Fade in      | `opacity: 0 → 1`, `transition: 0.3s ease`   | Cards entering viewport      |
| Scale pop    | `transform: scale(0.97 → 1)`                 | Modal / dialog open          |
| Float loop   | `translateY(0 → -12px → 0)` 4s infinite     | Decorative hero elements     |
| Pulse        | `scale(1 → 1.08 → 1)` 2s infinite           | CTA buttons, attention draws |
| Blur in      | `blur(8px) → blur(0)`, `0.4s ease-out`       | Glass card entrance          |

### Blur-in entrance animation

```css
@keyframes blurIn {
  from { opacity: 0; filter: blur(8px); transform: translateY(12px); }
  to   { opacity: 1; filter: blur(0);   transform: translateY(0); }
}

.glass-card {
  animation: blurIn 0.5s ease-out both;
}

/* Stagger children */
.glass-card:nth-child(1) { animation-delay: 0.0s; }
.glass-card:nth-child(2) { animation-delay: 0.1s; }
.glass-card:nth-child(3) { animation-delay: 0.2s; }
```

---

> **Note:** All placeholder values like colors and blur amounts are starting points. Adjust opacity and blur intensity based on the richness of your background — busier backgrounds need stronger blur; simpler backgrounds can use lighter opacity.

*Glassmorphism Design System · v1.0 · White & Blue Theme*
