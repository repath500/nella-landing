# Design — Nella

A locked design system for this app. Every page redesign reads this file before
emitting code. Do not regenerate per page — extend or amend this file when the
system needs to grow.

## Genre
modern-minimal (soft-trust variant: law-firm audience, warm light palette, calm motion)

## Macrostructure family
- Marketing pages: Bento Grid (homepage keeps the bento; sub-pages vary archetypes only)
- App/content pages: Long Document (page-hero intro → bands → CTA)
- How-it-works / implementation: **Process Timeline** — vertical scroll-drawn rail,
  numbered nodes, full-width roomy cards (21st.dev process-timeline pattern).

## Theme
Light-only. No `prefers-color-scheme: dark` override — the site always renders
the pastel palette regardless of system setting.

- `--color-backdrop` oklch(95.5% 0.014 42) — pale pastel cream
- `--color-paper`     oklch(99% 0.005 80)
- `--color-paper-2`   oklch(97% 0.01 76)
- `--color-ink`       oklch(34% 0.018 42) — softened warm ink
- `--color-ink-soft`  oklch(46% 0.016 45)
- `--color-rule`      oklch(91% 0.012 60)
- `--color-accent`    oklch(83% 0.07 42)  — soft pastel apricot (no dark brown anywhere)
- `--color-accent-deep` oklch(64% 0.095 38) — lighter warm clay for text accents/links
- `--color-cta-surface` oklch(91% 0.045 30) — pastel blush CTA band (was near-black)
- `--color-focus`     oklch(56% 0.12 38)
- Tints (blush/sage/lilac) stay pastel and airy.

## Typography
- Display: Bricolage Grotesque Variable, weight 650, roman only
- Body: Geist Variable, weight 400/650
- Display tracking: -0.035em; scale anchor `--text-display` = clamp(3rem, 5.5vw, 5.2rem)

## Spacing
4-point named scale in `tokens.css`. Pages use named tokens, never raw values.

## Motion
- Easings: `--ease-out` cubic-bezier(0.16, 1, 0.3, 1) is the only reveal easing
- Reveal pattern: fade + rise, **staggered children** (`--stagger-i * 70ms`) via `[data-motion]` and `[data-stagger] > *`
- Scroll-drawn elements: hero trail connector, section heading rules
- Nav morphs (border + shadow) after 24px scroll (`is-scrolled` on `.site-nav`)
- Hover: cards lift 2px with layered shadow + border tint; buttons lift with sheen sweep
- Marquee keeps edge fade masks
- Reduced-motion fallback: opacity-only, ≤150ms; marquee paused

## Microinteractions stance
- Silent success; no celebratory animation
- Hover transitions ≤ 220ms; no hover-delay patterns
- All interactive elements keep 3px `--color-focus` outlines

## CTA voice
- Primary: filled pill, light apricot `--color-accent` fill + ink text, sheen sweep on hover
- Secondary: underlined text-link with animated underline origin-left

## Per-page allowances
- Marketing pages MAY use Tier-A CSS-art accents (gradient washes, drawn rules)
- Content pages: typography only + shared card system

## What pages MUST share
- Wordmark, accent placement (≤5% per viewport), fonts, CTA voice, section-heading rhythm (eyebrow + display)

## What pages MAY differ on
- Bento tile spans, hero archetype within family, card tint rotation

## Exports
Source of truth: `tokens.css` at project root (imported by `src/styles.css`).
