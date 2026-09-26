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
