# Page architecture: /for-product refresh

Status: v1.8, frozen (phase 5.1: final fixes from the ranked list). No
more design changes. Phase 5.1 in brief: Pixelcut is section 4's
customer story (its case study has weekly beating monthly, which
clashed with section 5's simulator); section 5 chips are plain tags
with a prices line; hero cards keep their last result until their own
beat and the mobile chip changes with the phone; Enterprise links
Security and compliance; section 6 step 4 names the download and the
link; section 7 restores the store's final call on refunds and states
Customer Center's plans; churn sits below the 20th percentile. Built on docs/positioning.md v0.3. Words live in
docs/copy.md v1.7 (locked). Color roles: CLAUDE.md. Visual grammar: CLAUDE.md.

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
   Phase 4: Design, Test, Roll out. About 8 seconds, three beats of 2.6
   seconds, starting on load with no idle pause. Test shows what is
   tested and what it is judged on, with a mini chart of two labeled
   lines (A red, B green) and a green "B leads". Roll out: the cursor
   clicks "Roll out B", the card shows "Published. No app release."
   with a green check and the phone locks to B. Reduced motion: the
   Roll out state, done.
   Phase 5: the three cards are one size (184 x 156px) with a header
   row, so the Test chart spans the card. Test: "Weekly vs monthly", the
   two labeled lines, a "B leads" chip. Roll out: a progress bar fills
   green (green-line, a graphic at 3.78:1) from "B · 50%" to "B ·
   100%", then "No app release." The cursor fades after each click so
   the change stays readable. The H1 variant not shown carries the
   hidden attribute, so screen readers get one H1.
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
   Phase 4: no slider. Three tab pills; each tab shows Before and With
   RevenueCat side by side at equal heights, stacked on mobile. Change:
   two tracks, four stops ending "Live after the next release" against
   a short track ending "Live. No app release." Learn: two segmented
   12-month bars, week one only against the whole year, predicted.
   Fit: one paywall on one phone for three users against iPhone,
   Android and web, each with a different offer.
   Phase 5: mobile tabs are three equal segments with short labels
   ("Change", "Learn", "Fit"); the full label stays as the accessible
   name. Change: every stop names its owner (blue only on "You"), and
   when the tab opens a dot runs both tracks at once, 4.8 seconds
   Before, 1.2 seconds with RevenueCat, which lands first and pulses
   "Live. No app release." Learn: paying-customer dots computed from
   the simulator's model (one dot per 50): 22 A and 15 B in week one,
   A wins; stepping months 1 to 12, A falls to 1 and B to 3, B wins
   the year. CSS defaults are the end states, so reduced motion and
   no-JS show them.
   Rule: "before" is the PM's status quo, never an older RevenueCat.
   Rule: web appears as a channel, never as a forecasted experiment.
   Predicted 12-month LTV is not claimed for web (positioning v0.3).

4. JOB 1: CHANGE IT WITHOUT A RELEASE. Static. Text left, visual right.
   Visual (static, built phase 3B): the Tidelark paywall in a paywall
   editor. Layers panel left, the shared paywall (variant C, annual
   featured) center, the AI Editor prompt bar below, a green
   "Published. No app release." chip and a version-history chip
   ("Saved by Maya, 2 min ago"; no role, per the audit).
   Proof: visual editor, templates, AI Editor as a drafting tool, one
   paywall across the app SDKs and the web. No status label for the AI
   Editor: RevenueCat's docs say beta, its changelog says generally
   available (July 2026). Figma import is its own starting point (the
   Figma plugin), never something the AI Editor drafts from.
   Phase 4: small print for SDK versions and the web route, and two
   links: the Paywalls page and the product demo video (linked, never
   embedded; the same video ID the Paywalls page embeds).
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
   Phase 4, simulator v4: the "Why B wins" table is gone; the why sits
   on the chart lines ("Weekly: 3.5% still paying at month 12", "Monthly:
   18% still paying at month 12"), as a key under the chart on narrow
   screens. Compact variant cards, side by side at every width, both
   metrics as rows. No dialog: "Roll out winner" arms a second step,
   "Confirm: roll out B to 100%"; Escape or blur disarms. The toast
   stays inline. The one-time demo runs the whole sequence (LTV, Roll
   out, confirm, phone live) without moving focus. Desktop: the phone
   is sticky beside the panel. Mobile: a "What users see" strip with a
   small paywall thumbnail and the live chip. Mobile height 2,167px to
   about 1,210px.
   Phase 5: a "What you can test" chip row above the simulator (Price,
   Trial length, Paywall design, Up to 4 variants); the caption uses
   RevenueCat's forecast wording and names no variant count (none is
   published). Charts follow the color roles: the leading paywall in
   green-line, the second in ink, a red ring with an ink label on the
   key point; Benchmarks markers green above the median and red below,
   churn below the median and tagged "Where to focus"; mobile tabs are
   three equal segments ("Paywalls", "LTV", "Benchmarks"). The demo
   dashboard link was not added: demo.revenuecat.com redirects to the
   login page.
   Phase 4, Charts module: headline "The test ends. The learning
   doesn't." The tables are replaced by line charts in the style of
   RevenueCat Charts, with a hover marker (pointer, touch drag, or
   arrow keys on the focused plot, announced through a live region):
   Paywall Conversion with two paywalls, and Realized LTV per Customer
   by cohort month with the recent months marked incomplete.
   Benchmarks keeps the percentile bars, now with RevenueCat's 20th to
   80th band. The Apple Search Ads chip appears on the first two only.
   Below: the Charts API line and "Learn more about Charts".
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
   Phase 4: the text sits beside three web lines in RevenueCat's own
   phrasing (lower platform fees on web purchases, flexible pricing and
   promos on the web, pre-sell before launch) and links to Funnels and
   Web. The journey is full width in two lanes, "On the web" and "In
   the app", on a shared four-column grid with chevrons; on mobile a
   tight timeline. Visual height: 739px to 411px on desktop, 727px to
   615px on mobile.
   Phase 5: four steps only, Ad, Quiz, Checkout, Unlocked in the app
   (with one link); the targeting chips are gone (the body names
   targeting). Visual height 411px to 212px on desktop, 615px to 311px
   on mobile. A fourth web line: "See which campaigns drive paying
   customers on the web".
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
   - Fees: only "Lower platform fees on web purchases" (a heading on
     RevenueCat's Funnels page), with "Fee rules differ by store and
     region." in the small print. No percentages, never "eliminate",
     "bypass" or "commission-free".

7. THE FOUNDATION (phase 5; was Teams and foundation). Static. Text
   left, diagram right.
   Eyebrow "The foundation", headline "Subscribe once. Unlocked
   everywhere." Body: infrastructure trusted by over 146,000 apps, one
   set of entitlements across the App Store, Google Play and the web,
   Apple and Google API changes handled. Bullets: Customer Center (an
   offer to stay before they cancel; never "win-back"), Refund Control
   (App Store and Google Play), paywall version history and audit logs
   plus SSO on Enterprise. The diagram keeps the store side, the
   entitlement key and Pro on three devices, with its text trimmed so
   it doesn't repeat the bullets. Collaborator roles now live in
   section 4's bullets.
   Before phase 5:
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
   Phase 4: the diagram is redrawn as "Subscribe once, unlocked
   everywhere": the store side on top (bought once on the App Store;
   Google Play and Web beside it; Refund Control as a small dashed
   node), the entitlement as the shared key in the middle, and Pro
   unlocked on iPhone, Android and web below, for the same account.
   "Learn more about infrastructure" under the checklist. The Charts
   API line moved to section 5.
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
| Charts: Paywall Conversion, Realized LTV per Customer, Benchmarks, Charts API | 5 |
| Web-to-app Funnels | 3, 6 |
| RevenueCat Billing (formerly Web Billing) | 3, 6 |
| Targeting | 1, 6 |
| Refund Control, cross-platform entitlements, Customer Center | 7 |
| Funnels campaign (UTM) breakdown | 6 |

## Motion rules
- Subtle. Loops under 10 seconds (the hero is about 8). Pause when
  off-screen or on hover.
- Respect prefers-reduced-motion: every dynamic module has a static
  poster state.
- No layout shift. No sound.

## Build order and fallbacks
1. Section 5 simulator, 45-minute timebox.
2. Hero loop.
3. Static sections.
4. Section 6 scroll flow, then section 3 tabs (the slider was cut in
   phase 4).

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
