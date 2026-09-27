# Page architecture: /for-product refresh

Status: v1.5. Built on docs/positioning.md v0.3. Words live in
docs/copy.md v1.5 (locked). Color roles: CLAUDE.md. Visual grammar: CLAUDE.md.

## Principles
- The hero carries the idea. The sections carry the proof.
- Every capability that is new since the last page update has a
  visual home.
- Half static, half dynamic. Motion explains the product, never
  decorates.
- One fictional app appears across every visual: its paywall, its
  experiment, its web funnel, its multi-platform setup. Named at the
  copy stage and checked so it doesn't match a real App Store app.
- All mock data labeled "illustrative".

## Sections

1. HERO. Dynamic, auto loop.
   Job: the reader feels seen in three seconds and sees the idea
   working.
   Visual: a phone (the user's experience) flanked by three decision
   cards: Change (a paywall edit), Learn (a two-variant experiment with
   the winner picked on predicted 12-month value), Fit (a different
   offer for an audience or on web). Cards activate in sequence, about 3
   seconds each, and each visibly changes what the phone shows.
   Mobile: phone only, with a caption chip cycling the three decisions.
   Rebuilt (phase 3A) as Design, Test, Keep, about 10.5 seconds, on the
   shared Tidelark paywall. Design: the cursor changes the featured
   plan to Monthly and the phone updates. Test: the cursor starts a
   test; "A/B test running · 50/50" appears, the phone alternates A
   and B, and a small forecast line draws in. Keep: "B leads on
   predicted 12-month LTV"; the cursor clicks "Roll out", the phone
   locks to B: "Published. No app release." Pauses off-screen, on
   hover and in background tabs. Reduced motion: the Keep state,
   static. Eyebrow pill above the H1: "For product teams".
   Copy: H1 is B1 by default. Hero test: B1 against B2, switchable
   with a URL parameter (?v=b2). Same sub, cards and CTAs in both.
   The closing band swaps with the hero: each variant closes with the
   other's line (B1 closes with B2, B2 closes with B1).
   CTAs: Start for free (primary, blue fill). Talk to sales (chevron
   text link). Small link: "Already on RevenueCat? Open Paywalls".
   Background: off-white with the lavender-to-peach wash; dotted orbit
   rings with two small dots around the hero visual.

2. SCALE STRIP. Static.
   146K+ apps supported. $17B+ revenue processed. Customer logos
   taken from revenuecat.com only: six grayscale logos from RevenueCat's
   own product-page strips. Shares the hero's off-white.
   Not used: the Refund Control page's trust line, which says "annual
   revenue".

3. THE SHIFT. Dynamic: one module, three tabs, one before/after
   slider per tab.
   Job: the whole argument in one glance, for skimmers, one job at a
   time.
   Tabs: Change it without a release, Learn what users value, Fit the
   offer to every user. Before sits left, Now right; dragging the
   handle moves the split (pointer, touch, keyboard: arrows, Page
   Up/Down, Home, End). Each tab ends with "See how >" to its section.
   Fallback, not needed: tabs with side-by-side Before and Now columns.
   Phase 3B: each side is mini product UI. Change: a backlog ticket, a
   sprint badge and an app update waiting for review, against a
   dashboard Publish toggle and "Published. No app release." Learn: a
   dashboard cheering trial starts, against a forecast sparkline with
   a predicted 12-month LTV winner chip. Fit: one paywall for three
   users, against three users with three paywalls plus a web checkout
   card. No numbers that would need a source.
   Rule: "before" is the PM's status quo, never an older RevenueCat.
   Rule: web appears as a channel, never as a forecasted experiment.
   Predicted 12-month LTV is not claimed for web (positioning v0.3).

4. JOB 1: CHANGE IT WITHOUT A RELEASE. Static. Text left, visual right.
   Visual (static, built phase 3B): the Tidelark paywall in a paywall
   editor. Layers panel left, the shared paywall (variant C, annual
   featured) center, the AI Editor prompt bar below, a green
   "Published. No app release." chip and a version-history chip
   ("Saved by Maya, 2 min ago"; no role, per the audit).
   Proof: visual editor, templates, AI Editor as a drafting tool
   (generally available July 2026), one-action rollout.
   Language rule: "one release, then none".

5. JOB 2: LEARN WHAT USERS VALUE. Dynamic, toggle. BUILD FIRST, 45
   minute timebox.
   Simulator v3 (phase 3A): variant A features Weekly with a 3-day
   trial, variant B Monthly with a 7-day trial, on the shared Tidelark
   paywall. Judged by "Conversion to paying" (RevenueCat's metric name)
   or predicted 12-month LTV. A cumulative revenue chart, month 0 to 1
   observed, months 1 to 12 predicted: A leads early, B overtakes at
   month 4 and ends about 47% higher. The conversion view shows only
   the observed month; the LTV view draws the forecast in, marks the
   crossover and shows "Why B wins" (conversion, month-3 retention,
   price per month, refund rate). The phone alternates "Variant A ·
   50%" and "Variant B · 50%" during the test; on rollout a pulse
   travels to it and it shows "Now live: Variant B · 100%". The
   "Running" dot pulses. Model fitted to RevenueCat's published
   ranges; LTV per enrolled customer, labelled as our illustrative
   unit (RevenueCat publishes none). Also: a Benchmarks percentile
   visual, and a four-way traffic-split bar for multivariate testing.
   Earlier (v2): two surfaces on a dotted-grid canvas.
   Left, the PM's panel: experiment header and state, the toggle,
   two variant cards, the winner line, "Roll out winner" and the
   toast. Right, the user's phone, showing only the Tidelark paywall.
   Two variants. No public page shows a predicted LTV winner on a test
   with three or more variants, so the simulator never shows three.
   Both metrics sit on every card; the judged one is large, and the
   sizes swap so card height never changes. The winner flips when
   toggled: a green pill ("Leads", ink text) on a light green tint.
   No Chance to Win or interval: RevenueCat shows those for conversion
   metrics only. "Roll out winner" opens a confirm dialog naming the
   current winner. Confirm reorders the phone's plans to the winner's
   featured plan, sets the state to "Rolled out" and shows the toast
   with one small cat moment.
   One-time demo: on first scroll into view, the "You" cursor clicks
   the LTV option, the winner flips, a 2-second pause, the cursor
   leaves. Never repeats. Any click, key press or focus in the
   simulator cancels it. Reduced motion: the LTV view, static.
   The toast has its own slot below the winner line and never overlaps.
   After rollout the button is a disabled "Rolled out", with a "Reset
   demo" link that restores the starting state.
   Caption: the forecast appears once enough data is in, for
   experiments with a revenue primary metric. A forward-looking
   signal, not a guarantee.
   Below it, two rows. First: a paywall performance chart card,
   illustrative (realized LTV for RevenueCat Paywalls only, so no
   forecast on it), beside the Benchmarks line. Second: "Test up to
   four variants at once" (no predicted LTV attached) beside the
   Pixelcut proof block. Nothing near Pixelcut mentions 12-month value.
   Phase 3B: the chart card, Benchmarks card and four-way bar are
   replaced by one Charts module in the style of RevenueCat's Charts
   page: a sidebar (Paywall performance, Cohort and prediction,
   Benchmarks; vertical tabs, keyboard operable) and a chart panel.
   RevenueCat's own names inside: the four Paywall charts, Prediction
   Explorer, Benchmarks metrics with percentiles, an "Apple Search Ads
   Keyword" filter chip (not on Benchmarks). Below: the Charts API line
   in the audited wording. "Test up to four variants at once" is a
   checkmark line beside Pixelcut.
   Fallback if over the timebox: a static two-panel comparison with the
   same numbers and the green winner.

6. JOB 3: FIT THE OFFER TO EVERY USER, WHEREVER THEY BUY. Dynamic,
   plays once on scroll. Visual left, text right (text first on
   mobile).
   Built (phase 3B): small cards that light up in order once on
   scroll, completed steps with green checks, targeting chips beside
   them, "RevenueCat Billing" on the checkout card. Reduced motion and
   no-JS show the final state.
   Visual: an ad, then a web funnel with a branch by survey answer,
   tagged as localized to the visitor's country, then web checkout
   with Apple Pay and Google Pay labeled "where supported", then a
   Redemption Link, then the app is downloaded, the link is tapped,
   and the subscription is active.
   Plus targeting chips showing different paywalls for different
   audiences.
   Flow steps: Ad click, Web funnel, Checkout, Get a Redemption Link,
   Download the app, Tap the link (subscription active).
   Customer story block, static: Floga, $120K+ in one day of
   pre-launch lifetime memberships through RevenueCat Web Billing. The
   case study covers Web Billing only, so the block sits apart from
   the flow and must not suggest Floga used Funnels.
   Rules:
   - Country is localization only, never a funnel branch. No public
     page names country as a branch condition.
   - Wallets are "where supported": Stripe-based checkout only, and
     only on devices and browsers that support them.
   - The download beat always comes before the link tap.
   - "RevenueCat Billing" in UI labels. "Web Billing" only in the
     Floga proof, as the case study's own "RevenueCat Web Billing".
   - No store-fee or commission claims anywhere in this section.

7. TEAMS AND FOUNDATION. Static. Text left; visual right (badges,
   then the diagram).
   Job: answer the enterprise PM's first question, who can change a
   live paywall, with verified capabilities only.
   Visual, top: the governance badges lead. Collaborator roles
   including a Growth role, paywall version history, audit logs, SSO
   (SAML or OIDC), labeled Enterprise plan only.
   Visual, below (built phase 3B): the layered foundation diagram. App
   Store, Google Play and Web at the bottom; one set of entitlements in
   the middle; the Tidelark app on top; Refund Control as a node beside
   the stores. The body is two sentences; the foundation detail lives
   in the diagram labels.
   One line: Charts API for your own dashboards.
   Proof block for the enterprise reader: OpenAI (case-study sentence;
   the feature-page quote contains an em dash).
   Rule: no undo, revert or approval claims. None is documented.

8. TWO WAYS TO START PLUS FINAL CTA. Static.
   Card CTAs are chevron text links; the closing band holds the last
   filled primary.
   Card "Pro": start free. Pricing sentence, exact: "Free up to
   $2,500 in monthly tracked revenue, then 1% of all tracked revenue,
   with Experiments and Targeting included." Keep "all".
   Card "Enterprise": custom pricing and SSO, talk to sales.
   Each card: an icon tile, a label ("For product teams getting
   started", "For product orgs at scale") and three audited bullets.
   "Trusted by" logos sit full width below both cards, never inside
   one: no public page ties a customer to a plan.
   Closing band: the other hero line (see section 1), then the CTAs.

## Coverage: what's new, and where it shows
| Capability | Sections |
|---|---|
| Paywalls, AI generation | 1, 4 |
| Experiments: predicted 12-month LTV, one-action rollout, multivariate | 1, 5 |
| Charts: LTV prediction, paywall performance, Charts API | 5, 7 |
| Web-to-app Funnels | 3, 6 |
| RevenueCat Billing (formerly Web Billing) | 3, 6 |
| Targeting | 1, 6 |
| Refund Control | 7 |

## Motion rules
- Subtle. Loops under 10 seconds. Pause when off-screen or on hover.
- Respect prefers-reduced-motion: every dynamic module has a static
  poster state.
- No layout shift. No sound.

## Build order and fallbacks
1. Section 5 simulator, 45-minute timebox.
2. Hero loop.
3. Static sections.
4. Section 6 scroll flow, then section 3 slider.

If time runs short, sections 6 and 3 ship as static diagrams. The hero
and the simulator stay dynamic because they carry the positioning.

## Above the fold
Desktop: headline, sub and CTAs on the left; hero visual on the right;
stat strip visible at the bottom edge.
390px: headline of roughly eight words maximum, sub, primary CTA, then
the phone.

## Cut from the current page
SDK how-it-works steps (link to docs instead), the feature-tile grid,
the time-saved CTO testimonial, Figma export, custom variables, draft
mode, ASA segmentation, the branding system, and any competitor names.

## Not claimed
- Realized-LTV check: cut. The v0.3 audit found no page that
  describes checking a past forecast against what a cohort or an
  experiment later realized.
- Alerts: not claimed. Revenue anomaly email alerts exist but are in
  beta.

## Before publishing
Final check of every claim against the live pages.
