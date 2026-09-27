# RevenueCat /for-product refresh

Concept refresh of the RevenueCat /for-product page, targeting Product Managers.

## Audience
Product managers at subscription apps, solo through enterprise.
They own revenue outcomes. They do not write billing code.

## Direction
[LOCKED IN STAGE 2: not yet decided]

## Non-negotiables
- No invented stats, customers, quotes or logos.
- No feature lists. Every section answers a PM job-to-be-done.
- "No app release" and "no engineering sprint". NEVER "no engineering".
- Prices live in App Store Connect and Play Console. RevenueCat
  controls which products, packages and paywall a user sees.
- Predicted LTV is a forward-looking signal, not a guarantee.
- Fully responsive. Check 390px first.
- No em dashes. No corporate filler.

## Design tokens

Sources: RevenueCat press kit and revenuecat.com, inspected September 2026.

### Colors
| Token | Hex | Use |
|---|---|---|
| `--rc-red` | #F2545B | Accent and emphasis. Not for primary buttons. Sparingly |
| `--rc-blue` | #576CDB | Primary CTAs. Never a section background |
| `--rc-green` | #11D483 | Positive states, winners, gains |
| `--rc-ink` | #1F1F47 | Headings and dark section backgrounds |
| `--rc-body` | #3D3D5C | Body copy |
| `--rc-white` | #FFFFFF | Default page background |
| Logo files only | #F25A5A | logo_red.svg and logomark_red.svg use this red; the press kit swatch card states #F2545B. Use --rc-red for UI. Never recolor the logo files |

Rules:
- Light page by default. Dark sections use --rc-ink, never pure black.
- Primary CTAs use --rc-blue. White on blue passes WCAG AA at
  4.59:1. This matches the live site, where "Sign up", "Start for
  free" and "Request a demo" are all blue.
- Red is for emphasis and accent, not for primary buttons.
- One primary CTA per viewport still holds.
- Green means "this won" or "this went up". Never decorative.
- Apart from primary CTAs, blue is the least-used color. More than
  twice on the page means cut it.
- No gradients between any two of these. Flat fills only.

### Contrast rules
Verified September 2026. WCAG AA needs 4.5:1 for normal text, 3:1 for
large text and non-text marks.
- White on --rc-blue is 4.59:1. PASSES at normal size, which is why
  primary CTAs are blue. The margin is thin, so check hover and
  pressed states too.
- White on --rc-red is 3.39:1. FAILS at normal size, which is why red
  is not used for primary buttons. Red text on white is the same
  3.39:1, so red emphasis text must be 24px or larger (19px if bold),
  as on the live site's highlighted numbers. Text on a red fill uses
  --rc-ink (4.60:1).
- --rc-green on white is 1.95:1. FAILS even the 3:1 bar. Never use
  green as text or a line on white. Use green as a FILL with --rc-ink
  text on top, or green on --rc-ink (8.01:1).
- Any new color pairing must be checked before it ships.

### Typography
Observed on revenuecat.com:
- H1: objectSans, 60px, weight 500, #1F1F47
- Body lead: helveticaNeue, 20px, weight 400, #3D3D5C
- Section body: helveticaNeue, 20px, weight 300, #3D3D5C, centered
- Declared fallback chain: ui-sans-serif, system-ui, sans-serif

DECISION: objectSans and helveticaNeue are commercial licensed fonts
and cannot be self-hosted. Substituting:
- Display/headings: Manrope (Google Fonts), weight 500 for H1
- Body: ui-sans-serif, system-ui, sans-serif (RevenueCat's own
  declared fallback chain)
Log this in docs/iteration-log.md as a deliberate substitution.

Scale to use:
- H1 60px / 500 / --rc-ink
- H2 40px / 500 / --rc-ink
- H3 24px / 500 / --rc-ink
- Body 20px / 400 / --rc-body
- Small 16px / 400 / --rc-body
Scale down proportionally at 390px.

### Logo assets
Official SVGs from the press kit (wordmarks 852x180, marks 512x512).
- public/brand/logo_dark.svg: wordmark on light, black
- public/brand/logo_light.svg: wordmark on dark, white
- public/brand/logo_red.svg: wordmark in red, #F25A5A
- public/brand/logomark_red.svg: cat mark alone (default), #F25A5A
- public/brand/logomark_dark.svg: cat mark alone, black
- public/brand/logomark_light.svg: cat mark alone, white
- public/brand/logomark_red-background.svg: white cat mark on a
  square #F2545B tile
- public/brand/app_icon.svg: app icon, white cat mark on a rounded
  #F2545B tile
Never recolor, stretch or redraw the mark.

### Reference screenshots
Full-page captures for brand-guard to compare against. Each original
is too tall to read as one image, so open the sections instead. They
are screen-height slices, 1568px wide, numbered top to bottom, in
docs/reference/sections/.

revenuecat.com homepage (docs/reference/www.revenuecat.com.png).
Cut off partway down the page (exactly 16,384px tall), so there is
no footer:
home-01.png, home-02.png, home-03.png, home-04.png, home-05.png,
home-06.png, home-07.png, home-08.png, home-09.png

Current /for-product page
(docs/reference/www.revenuecat.com-for-product.png), top to footer:
for-product-01.png, for-product-02.png, for-product-03.png,
for-product-04.png, for-product-05.png, for-product-06.png,
for-product-07.png, for-product-08.png

## Reference
- docs/brief.md
- docs/positioning.md
- docs/competitive-scan.md
- docs/architecture.md
- docs/iteration-log.md
