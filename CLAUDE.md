# RevenueCat /for-product refresh

Concept refresh of the RevenueCat /for-product page, targeting Product Managers.

## Audience
Product managers at subscription apps, solo through enterprise.
They own revenue outcomes. They do not write billing code.

## Direction
Draft positioning in docs/positioning.md (v0.1, under review).

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

Added September 2026. Surfaces sampled from full-page captures of
RevenueCat's feature pages (canvas pixel reads); the rest derived and
contrast-checked:
| Token | Hex | Use |
|---|---|---|
| `--rc-offwhite` | #F9F9FB | Alternating section background (sampled) |
| `--rc-wash-lavender` | #EFF0FA | Hero wash only (sampled) |
| `--rc-wash-peach` | #FCF6F7 | Hero wash only (sampled) |
| `--rc-blue-text` | #4F60C5 | Chevron text links. Blue + 15% ink. Also the blue hover state |
| `--rc-green-tint` | #E2FAF0 | Winner card fill. Green 12% on white |
| `--rc-line` | #E4E4E9 | Ink 12%. Decorative borders only |
| `--rc-outline` | #84849A | Ink 55%. Control outlines |
| `--rc-dot` | #D2D2DA | Ink 20%. Dotted grid and orbit dots, decorative |

Rules:
- Light page by default. Dark sections use --rc-ink, never pure black.
- Sections alternate --rc-white and --rc-offwhite, as on RevenueCat's
  feature pages. The hero and scale strip share the off-white.
- Primary CTAs use --rc-blue. White on blue passes WCAG AA at
  4.59:1. This matches the live site, where "Sign up", "Start for
  free" and "Request a demo" are all blue.
- Red is for emphasis and accent, not for primary buttons.
- One filled primary CTA per viewport. Secondary CTAs are text links
  with a chevron ("Talk to sales >"), as on every feature page.
- Green means "this won" or "this went up". Never decorative. Winners
  are a green pill with a check and ink text, on --rc-green-tint.
- Blue is for action only: primary CTA fills (--rc-blue), chevron text
  links (--rc-blue-text) and the demo cursor's "You" pill. Never
  decorative, never a section background. Confirmed by the user
  2026-09-27; replaces the earlier "blue at most twice" rule.

Color roles (set by the user 2026-09-27, applied across every visual):
- Blue: actions and selection. Buttons, links, selected toggles and
  tabs, the "You" pill. Stays the dominant color.
- Green: winning, growth and live states. The pulsing "Running" dot,
  variant B's chart line, "Now live", positive deltas, completed
  steps. Fills use --rc-green with ink on top; lines and dots use
  --rc-green-line (#16956E); green text uses --rc-green-text
  (#197062).
- Red: emphasis. Key numbers, the demo cursor's arrow, variant A's
  chart line (3.39:1 on white passes the 3:1 bar for graphics). Red
  text still needs 19px bold or larger.
- Ink: text and UI chrome.
- Graphical lines must pass 3:1 against their background.
- No gradients between any two of these. Flat fills only. One
  exception: the hero wash, a faint radial lavender-to-peach gradient
  from --rc-wash-lavender and --rc-wash-peach, behind the hero visual.

### Visual grammar
Recreated from RevenueCat's feature pages as vector HTML and CSS,
telling our story. Their files live in docs/reference/inspiration/,
which is gitignored. Never embed or copy RevenueCat's images or
videos. Exceptions: press-kit brand logos, and customer logos in the
scale strip.
- Hero: off-white with the wash; dotted orbit rings with one or two
  small glowing dots around the hero visual.
- Product UI: white cards, light border, soft shadow, on a dotted-grid
  canvas. Phones have a white bezel.
- Cursor demos: a red arrow (color roles: red is emphasis) with a blue
  "You" pill.
- Proof points: checkmark bullet lists.
- Testimonial block: rounded square logo tile, large quote with the
  key number in red, name and role, "Read case study >". Customer
  logos are not copied into tiles; the tile shows the company name.

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
- Added September 2026, for the visual grammar:
  - --rc-blue as text on --rc-offwhite is 4.37:1. FAILS at normal
    size, so text links use --rc-blue-text: 5.51:1 on white, 5.24:1 on
    off-white, 4.86:1 on the lavender wash.
  - Red text on --rc-offwhite is 3.22:1 and on the lavender wash
    2.99:1. Red numbers stay 19px bold or larger, and never on the
    wash.
  - Ink on --rc-offwhite 14.85:1; body on --rc-offwhite 9.88:1; ink on
    --rc-green-tint 14.25:1.
  - --rc-green pill on --rc-green-tint is 1.78:1, so the pill always
    carries a text label ("Leads") in ink.
  - --rc-outline is 3.65:1 on white and 3.47:1 on off-white.
  - White on --rc-blue for the "You" pill is 4.59:1. On the ink band,
    chevron links are white (15.61:1); a blue button's hover there adds
    a white ring instead of darkening (the hover blue is 2.83:1
    against ink).
- Added for the color roles: --rc-green-line #16956E is 3.78:1 on
  white, 3.59:1 on off-white, 3.45:1 on the green tint (lines, dots).
  --rc-green-text #197062 is 5.94:1 on white (text; white icons on it).
  --rc-red as a chart line is 3.39:1 on white, 3.22:1 on off-white.
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
