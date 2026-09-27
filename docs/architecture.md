# Page architecture: /for-product refresh

Status: v1. Built on docs/positioning.md v0.3.

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
   cards: Change (a paywall edit), Learn (an experiment with the
   winner picked on predicted 12-month value), Fit (a different offer
   for an audience or on web). Cards activate in sequence, about 3
   seconds each, and each visibly changes what the phone shows.
   Mobile: phone only, with a caption chip cycling the three decisions.
   Copy: headline from customer language, written at the copy stage.
   CTAs: Start for free (primary, blue). Talk to sales (secondary,
   outlined). Small link: "Already on RevenueCat? Open Paywalls".

2. SCALE STRIP. Static.
   Trusted by 146K+ apps. $17B+ revenue processed. Customer logos
   taken from revenuecat.com only.

3. THE SHIFT. Dynamic, drag-to-reveal before/after slider.
   Job: the whole argument in one glance, for skimmers.
   Left, before: a paywall change as a ticket, a sprint, App Review,
   judged on trial starts.
   Right, now: edited in the dashboard, tested in the app, predicted
   12-month value shown, rolled out in one action. Then a separate
   beat: a web checkout for people who arrive on the web.
   Below: three rows (Change, Learn, Fit) that anchor-link to sections
   4, 5 and 6.
   Rule: "before" is the PM's status quo, never an older RevenueCat.
   Rule: web appears as a channel, never as a forecasted experiment.
   Predicted 12-month LTV is not claimed for web (positioning v0.3).

4. JOB 1: CHANGE IT WITHOUT A RELEASE. Static.
   Visual: the paywall editor with the AI Editor prompt bar and a
   published state.
   Proof: visual editor, templates, AI Editor as a drafting tool
   (generally available July 2026), one-action rollout.
   Language rule: "one release, then none".

5. JOB 2: LEARN WHAT USERS VALUE. Dynamic, toggle. BUILD FIRST, 45
   minute timebox.
   The experiment simulator: two variants, three if time allows to
   show multivariate. Toggle: judge by trial conversion, or judge by
   predicted 12-month LTV. The winner flips when toggled. Winner shown
   as a green fill with ink text on top, per the contrast rules. "Ship
   the winner" updates the paywall and shows a "rolled out, no app
   release" toast, with one small cat moment. Caption: the forecast
   appears once enough data is in.
   Beside it, static: a paywall performance and LTV chart card,
   illustrative.
   One supporting line: Benchmarks, compare to similar apps.
   Fallback if over the timebox: a static two-panel comparison with the
   same numbers and the green winner.

6. JOB 3: FIT THE OFFER TO EVERY USER, WHEREVER THEY BUY. Dynamic,
   plays once on scroll.
   Visual: an ad, then a web funnel with a branch (by country or survey
   answer), then web checkout with Apple Pay and Google Pay, then a
   Redemption Link, then the app opens with the subscription active.
   Plus targeting chips showing different paywalls for different
   audiences.
   Proof card, static: Floga, $120K+ in one day of pre-launch lifetime
   memberships through Web Billing.

7. FOUNDATION AND TEAMS. Static.
   Layered diagram: App Store, Google Play and Web at the bottom;
   entitlements and one source for analytics in the middle; your app on
   top.
   Badges: Refund Control, collaborator roles including a Growth role,
   audit logs, paywall version history, SSO (SAML or OIDC), labeled
   Enterprise plan only.
   One line: Charts API for your own dashboards.

8. TWO PATHS PLUS FINAL CTA. Static.
   Startup path: start free. Pricing sentence, exact: "Free up to
   $2,500 in monthly tracked revenue, then 1% of all tracked revenue,
   with Experiments and Targeting included." Keep "all".
   Team path: talk to sales, governance recap.
   Closing CTA.

## Coverage: what's new, and where it shows
| Capability | Sections |
|---|---|
| Paywalls, AI generation | 1, 4 |
| Experiments: predicted 12-month LTV, one-action rollout, multivariate | 1, 5 |
| Charts: LTV prediction, paywall performance, Charts API | 5, 7 |
| Web-to-app Funnels | 3, 6 |
| Web Billing | 3, 6 |
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
