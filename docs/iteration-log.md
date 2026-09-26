# Iteration log

## 2026-09-26

- Font substitution: RevenueCat uses objectSans and helveticaNeue,
  both commercially licensed and not self-hostable. Substituted
  Manrope for display and RevenueCat's own declared fallback chain
  (ui-sans-serif, system-ui, sans-serif) for body. Deliberate, not
  a shortcut.
- Contrast audit: white on brand red fails WCAG AA at normal size
  (3.39:1) and brand green fails on white (1.95:1). Caught by
  running a contrast check on the palette rather than assuming a
  published brand palette is accessible. Changed green from a text
  color to a fill color as a result.
- CLAUDE.md was created containing an em dash despite the file's
  own rule banning them. The AI flagged its own violation on the
  next pass, and it still took a second explicit instruction to
  actually remove it. Stated rules in a context file are not
  self-enforcing. This is why claim-auditor exists as a separate
  agent rather than as a line in the prompt.
- Logo red mismatch: logo_red.svg and logomark_red.svg use #F25A5A,
  while the press kit swatch card states #F2545B (the red that
  logomark_red-background.svg and app_icon.svg use). Kept --rc-red
  at #F2545B for UI and left the logo files untouched, since the
  mark is never recolored. Caught by reading the fill colors in the
  SVG source.
- Design tokens initially stated red as the only CTA color, taken
  from the press kit swatch card without checking the live site.
  Screenshot sections showed every primary CTA is blue. Blue also
  passes WCAG AA on white text at 4.59:1 where red fails at 3.39:1,
  which is likely why RevenueCat made the same call. Corrected.
  Second time a brand assumption from a static asset was wrong
  against the live product.
