# Copy: /for-product refresh

Status: v1.8 LOCKED. Design frozen for good (phase 5.1). Hero B1 by default, B2 as the hero test variant.
Voice: short, direct, a little playful. The headlines carry the
argument on their own. All mock data is illustrative and labeled.

v1.8 changes (build phase 5.1, final fixes, 2026-09-27). Each marked
[v1.8] below. Claim audit of items 2, 4, 5, 6, 7 and 10: 2026-09-27,
see docs/iteration-log.md.
- Pixelcut moves from section 5 to section 4 as its customer story.
- Section 5: a prices line under the chips; the chips become plain
  tags.
- Hero: the Test chip names the metric; no card empties during the
  loop; the mobile chip changes with the phone.
- Enterprise card: "Security and compliance >".
- Section 6 step 4: "Download the app, tap the link, unlocked".
- Section 7: Refund Control bullet restores the store's final call;
  Customer Center plan availability in small print.
- Benchmarks: Monthly Churn Rate at the 14th percentile.
- Not added: "How the forecast works >" (audit: no public page
  explains how the Experiments forecast is made).

v1.7 changes (build phase 5, red team and owner review, 2026-09-27).
Each marked [v1.7] below. Claim audit of every new line: 2026-09-27,
see docs/iteration-log.md. Lines the audit changed keep the requested
wording in a note.
- Hero cards: one size. Test drops "Judged on"; Roll out is a
  progress bar to "B · 100%", then "No app release."
- Section 3: mobile tabs "Change", "Learn", "Fit". Change shows who
  owns each step and races two dots. Learn uses paying-customer dots
  from the simulator's model. New Fit captions.
- Section 4: tighter body, three bullets.
- Section 5: "What you can test" chips; caption reworded to match
  RevenueCat's forecast wording; "Test up to four variants at once"
  removed. Charts: color roles, key-point labels, mobile tabs
  "Paywalls", "LTV", "Benchmarks", churn below the median with "Where
  to focus". Not added: "Explore the demo dashboard" (audit FAIL).
- Section 6: four-step journey, targeting chips removed, a UTM line.
- Section 7: repurposed as "The foundation".
- Accessibility: the hero line not shown is hidden from screen readers.

v1.6 changes (build phase 4, the final design pass, 2026-09-27). Each
marked [v1.6] below. Claim audit of every new line: 2026-09-27, see
docs/iteration-log.md.
- Hero loop: Design, Test, Roll out, about 8 seconds, no idle pause.
- Section 3: no slider. Each tab shows Before and With RevenueCat side
  by side.
- Section 4: two proof points replaced, SDK fine print, two links.
- Section 5: simulator v4 (no "Why B wins" table, labels on the chart
  lines, two-step inline rollout, no dialog). Charts module: headline,
  sub, three charts named as in RevenueCat Charts, the Charts API line
  with a link.
- Section 6: three web lines, two links, the two-lane journey, a fee
  note in the small print.
- Section 7: "Subscribe once, unlocked everywhere" diagram and a link.
  The section's Charts API line is removed: section 5 now carries it.
- Wording changed by the audit (each requested line is kept below):
  the Figma bullet, the platform bullet, the web lines, and the
  Benchmarks band (20th to 80th, as RevenueCat draws it).

v1.5 changes (build phase 3B, 2026-09-27). All new microcopy below is
approved by the user and recorded here; lines marked [v1.5].
- Shared paywall: shorter benefits, "Save 50%" under Annual, trial
  badge follows the featured plan, "Best value" removed, variant C.
- Section 3: before/after panels become mini product UI.
- Section 4: the paywall editor visual.
- Section 5: simulator fixes (LTV per paying customer, chart label and
  math line, "Why B wins" rows, inline toast) and the Charts module.
- Section 6: the funnel flow visual. Section 7: trimmed body and the
  foundation diagram. Section 8: Pro eyebrow "Self-serve".
- Not added: ElevenLabs (audit FAIL for a named speaker).

v1.5 microcopy by section [v1.5]:
- Section 3, Change: Before "Backlog", tag "Paywall", "File a ticket",
  "Wait for a sprint", "Ship an app update", "Wait for review". Now
  "Edit it in the dashboard", "Publish" (toggle on), "Published. No
  app release."
- Section 3, Learn: Before "Trial starts" dashboard, caption "Judge it
  on trial starts". Now "See predicted 12-month value", chip
  "Predicted 12-month LTV winner: B", button "Roll out the winner".
- Section 3, Fit: Before three users, one paywall, caption "One paywall
  for everyone". Now three users, three paywalls, caption "Different
  paywalls by audience", web card tagged "Web checkout" with "Offer it
  on the web, too."
- Section 4 editor (static, illustrative): "Tidelark paywall"; chip
  "Saved by Maya, 2 min ago" (no role: the audit found no page showing
  a role in version history); green chip "Published. No app release.";
  "Layers": Paywall, Image, Headline, Benefits, Plans (selected), Trial
  line, Button, Footer; "AI Editor" prompt: "Feature the annual plan
  and add a 7-day trial badge". The preview shows variant C.
- Section 5 Charts module (illustrative): sidebar "Charts" with
  "Paywall performance", "Cohort and prediction", "Benchmarks".
  - Paywall performance: filter chip "Apple Search Ads Keyword: morning
    routine"; columns Paywall, Encounter rate, Conversion, LTV
    (realized), Abandonment; rows Onboarding, Streak reminder,
    Settings; note "Paywall Encounter, Paywall Conversion, Paywall LTV
    and Paywall Abandonment charts, for RevenueCat Paywalls. Paywall
    LTV is realized."
  - Cohort and prediction: title "Prediction Explorer"; the same chip;
    cohorts January, March, May, July by Month 1, 3, 6, 12; legend
    "Realized LTV", "Predicted LTV"; note "Predicted LTV is a
    forward-looking estimate, not a guarantee."
  - Benchmarks (no chip): "Conversion to Paying (7 days)" 72nd
    percentile, "Monthly Churn Rate" 64th, "Realized LTV per Paying
    Customer (30 days)" 81st; legend "Your app", "Similar apps, 25th
    to 75th percentile"; note "Against similar apps in the same store
    and category."
  - Line below: "Pull chart data into your own dashboards with the
    Charts API." (The requested "Pull any chart into your own tools"
    failed the audit: the API covers a fixed list of charts.)
  - "Test up to four variants at once." is now a checkmark line beside
    the Pixelcut quote. The four-way bar, the separate Benchmarks card
    and the paywall performance card are gone.
- Section 6 flow (illustrative): "Ad click"; "Web funnel", "What's your
  goal?", answers "Start earlier" (chosen) and "Sleep better", tag
  "Localized to the visitor's country"; "The answer routes to an
  offer": "Annual offer", "Monthly offer"; label "RevenueCat Billing",
  "Checkout", "Apple Pay", "Google Pay", "Apple Pay or Google Pay,
  where supported"; "Get a Redemption Link"; "Download the app"; "Tap
  the link, subscription active". Targeting chips: Country, Platform,
  App version, Custom attributes.
- Section 7 diagram: "Tidelark app"; "One set of entitlements",
  "Covers the App Store, Google Play and the web"; "App Store", "Google
  Play", "Web"; "Refund Control", "Answers store refund requests with
  usage data and your preference. The store makes the final call."

v1.4 changes (build phase 3A, 2026-09-27), each marked [v1.4] below:
- Nav: "Log in" text link.
- One shared Tidelark paywall (new copy below), used by the hero and
  the simulator.
- Hero loop redesigned: Design, Test, Keep.
- Scale strip label, section 3 headline, section 4 body.
- Section 5: simulator v3 (weekly versus monthly, forecast chart,
  "Why B wins", traffic split), Benchmarks and four-way split visuals.
- Section 8: Pro label mirrors the pricing page.
- Not added: the ElevenLabs testimonial (audit FAIL, see section 4).

v1.3 changes (build phase 2, 2026-09-27), each marked [v1.3] below:
- The page now speaks to product managers by name: hero eyebrow,
  section 3 sub, section 4 body, section 7 opening, section 8 sub and
  card labels, and the meta description.
- Section 3 becomes one module: three tabs, each with a before/after
  slider and a "See how" link.
- Section 5: toast in its own slot; "Rolled out" button state and a
  "Reset demo" link; Pixelcut moves beside "Test up to four variants
  at once".
- Section 8: audited plan bullets, and a "Trusted by" logo row below
  both cards.
- Customer logos added, from RevenueCat's own product-page logo strips.
- Approved by the user 2026-09-27: the "Rolled out" state, the
  sparkline labels, and the funnel-step details.

Page meta [v1.3]:
- Title (from the live page): For Product Managers | RevenueCat
- Meta description: RevenueCat for product managers: design paywalls,
  test pricing and offers, and roll out winners judged on predicted
  12-month value, without waiting on an app release.

v1.2 changes (build phase 1.5, 2026-09-27), each marked [v1.2] below:
- Secondary CTAs are chevron text links everywhere. The closing band
  keeps the page's last filled primary.
- Section 4: no trailing period on the third proof point.
- Section 5: simulator v2 copy, and the Pixelcut proof block.
- Section 6: new flow labels, and Floga as a customer story block.
- Section 7: OpenAI proof block.
- Section 8: card CTAs as chevron text links.
- Proof wording is exact, from the claim audit logged 2026-09-27.

## Nav [v1.4]
Logo, "Log in" text link (https://app.revenuecat.com/login), then the
"Start for free" button. No menus.

## Shared Tidelark paywall [v1.4]
Tidelark is a fictional premium AI morning-routine coach. Prices are
illustrative. One component, used by the hero and the simulator.
- Brand: Tidelark
- Headline: Mornings that stick.
- Benefits [v1.5], one line each at phone width: Your AI morning coach
  / Routines that fit your sleep / Nudges, never guilt
- Plans: Weekly $6.99/week, Monthly $29.99/month, Annual $179.99/year
  with "Save 50%" as muted text under its price [v1.5]. No "Best
  value".
- The featured plan carries the white border and a trial badge [v1.5]:
  "3-day trial" (Weekly) or "7-day trial" (Monthly, Annual).
- Variant A features Weekly: "3-day free trial, then $6.99/week"
- Variant B features Monthly: "7-day free trial, then $29.99/month"
- Variant C (the section 4 editor) features Annual: "7-day free trial,
  then $179.99/year"
- Button: Start free trial
- Small print: Cancel anytime / Restore purchases

## 1. Hero

Eyebrow pill [v1.3]: For product teams

H1 (default, B1):
Build a subscription experience worth renewing.

H1 (hero test variant, B2):
Build the reason they renew.

Sub (both):
Design paywalls and test pricing and offers without waiting on an app
release. Keep what wins on predicted 12-month value, not just early
conversion.

Primary CTA: Start for free
Secondary CTA: Talk to sales, as a chevron text link [v1.2]
Tertiary link: Already on RevenueCat? Open Paywalls in your dashboard

Hero loop [v1.6], tagged Illustrative: Design, Test, Roll out. About 8
seconds (three beats of 2.6 seconds), starts on load, loops with no
idle pause. Replaces the v1.4 Design, Test, Keep loop.
- Design: "Featured plan" changes from "Weekly" to "Monthly"; the phone
  features the monthly plan.
- v1.8: the Test chip reads "B leads on predicted LTV" (green); while
  the test runs it reads "Test running" (outline). No card empties:
  Test and Roll out keep their last result until their own beat; Roll
  out then shows "B · 50%" with "No app release." beside an empty ring
  until the bar fills and the ring turns into a green check.
- Mobile caption chip [v1.8], changing at the same moment as the phone:
  "Design: weekly plan featured" (phone on A) / "Design: monthly plan
  featured" (phone on B) / "Test: A/B test running · 50/50" (phone
  alternates) / "Test: B leads on predicted 12-month LTV" (phone settles
  on B) / "Roll out: B published, no app release".
- Test [v1.7]: "Test", "Weekly vs monthly", a larger chart with two
  labeled lines, A (red) and B (green); the phone alternates A and B;
  then a "B leads" chip (green fill). "Judged on: predicted 12-month
  LTV" removed.
- Roll out [v1.7]: "Roll out". The cursor clicks a progress bar that
  fills green from "B · 50%" to "B · 100%", then "No app release." with
  a green check; the phone locks to B. (Was "Roll out B" and
  "Published. No app release.")
- All three cards are one size [v1.7].
Mobile caption chip cycles [v1.6]: "Design: monthly plan featured" /
"Test: B leads on predicted 12-month LTV" / "Roll out: B published, no
app release"
Static state under reduced motion: Roll out, done, "B · 100%".
Hero test variants [v1.7]: the line not shown carries the hidden
attribute, so screen readers only get the line on screen.

## 2. Scale strip
146K+ apps supported
$17B+ in revenue processed
Label above the logos [v1.4]: Trusted by teams at
Logos [v1.3], grayscale: Notion, OpenAI, VSCO, Runna, Ladder, PhotoRoom.
Files downloaded from RevenueCat's own product-page logo strips
(cdn.sanity.io), 2026-09-27. Each is shown on revenuecat.com: Notion,
OpenAI, VSCO, Runna and Ladder on /feature/infrastructure; PhotoRoom
on /feature/experiments, /feature/paywalls and /feature/charts.
(Not used: the Refund Control page's trust line. It says "annual
revenue", which the homepage labels don't. Audit 2026-09-27.)

## 3. The shift
Headline [v1.4]: Change faster. Learn what renews. Fit every user.
(Was: From ticket to test.)
Sub [v1.3]: What changes for a product manager, one job at a time.
v1.7 [supersedes the tab details below]:
- Tabs: full labels on desktop; on mobile three equal segments,
  "Change", "Learn", "Fit" (the full label stays as the accessible
  name).
- Change. Each stop shows its owner. Before, in grays: Ticket (You),
  Sprint (Engineering), App update (Engineering), Review (App Store),
  ending "Live after the next release". With RevenueCat: Design (You),
  "Template, Figma or prompt" under it; Publish (You); then a green,
  pulsing "Live. No app release." When the tab opens, a dot travels
  both tracks at once: slowly Before, quickly with RevenueCat, which
  lands first. Blue only on the "You" labels.
- Learn. Dots for paying customers. Before: "Judged on week one", rows
  A and B, "Week 1", verdict "A wins" (gray). With RevenueCat: "Judged
  on the year, predicted", "Month 1" to "Month 12", A's dots fade
  faster than B's, verdict "B predicted to win the year" (green fill).
  (Requested: "B wins the year". Final sweep FAIL: it states a
  forecast as fact.) Note under
  the pair: "Each dot is 50 paying customers, from the illustrative
  model in the simulator below. A features weekly, B monthly."
  Proportions come from the simulator's model (A 1,100 paying, B 740;
  still paying at month 12: A 3.5%, B 18%): 22 and 15 dots in week
  one, 1 and 3 at month 12.
- Fit. Before: "One paywall for everyone, in the app only." With
  RevenueCat: "The right offer for each audience, in the app and on
  the web."
- Reduced motion shows every end state.
Module [v1.6]: three tab pills, no slider. Each tab shows "Before" and
"With RevenueCat" side by side at equal height (stacked on mobile) and
ends with "See how >", linking to its section.
- Tab 1, Change it without a release. Two tracks.
  Before: Ticket > Sprint > App update > Review. Caption: "Live after
  the next release"
  With RevenueCat: "Start from a template, a Figma design or a prompt"
  > "Publish". Caption, with a green check: "Live. No app release."
  (Audit PASS. Figma import goes through RevenueCat's Figma plugin.)
- Tab 2, Learn what users value. Two segmented 12-month bars, "Week 1"
  to "Month 12".
  Before: only week one filled. Caption: "You judge on week one."
  With RevenueCat: all twelve months, the forecast ones dashed.
  Caption: "You see the year, predicted."
- Tab 3, Fit the offer to every user.
  Before: one paywall on one phone, three users pointing at it.
  Caption: "One paywall for everyone"
  With RevenueCat: iPhone, Android and Web, each with a different
  offer. Caption: "Different paywalls by audience. Offer it on the web,
  too."
  (Web is a channel here, never a forecasted experiment.)
Replaced: the v1.3 slider and the v1.5 mini product UI panels.

## 4. Change it without a release
Headline: Your paywall shouldn't wait for a release.
Body [v1.7]: Integrate once. Then your product team changes paywalls
and which plans they show from the dashboard, with no engineering
sprint and no App Review. One release, then none.
(Requested: "changes paywalls and plans". Final sweep FAIL: price,
duration and trial are set in App Store Connect and Play Console, and
new products go through the store's review.)
Editor [v1.7]: tagged "Illustrative" (final sweep: the only mock
without one).
(v1.4 body, replaced: Integrate once. From then on, your product team
changes paywalls and the plans you offer from the dashboard, without
waiting on an engineering sprint or App Review. One release, then
none.)
ElevenLabs testimonial: not added [v1.4]. RevenueCat's own pages credit
the Infrastructure-page quote to two different people (Jack McDermott
on the feature page, Marcin Jelenski in the case study). Audit FAIL
until the speaker is confirmed.
Customer story [v1.8], moved from section 5, same centered block:
- Quote: "Being able to find a variant that produces a 16% increase in
  subscribers definitely makes RevenueCat worth it." Key number in red:
  16% increase.
- Dominique Yahyavi, Co-Founder, Pixelcut. Read case study >
  (https://www.revenuecat.com/customers/pixelcut)
- Why it moved: Pixelcut's case study says its weekly offer beat
  monthly (16% more paying customers). Beside section 5's simulator,
  which argues weekly's early lead is the wrong winner, a reader who
  clicks through finds the opposite lesson. In section 4 it proves the
  paywall-changing point without that clash.
Proof points [v1.7], three:
- Start from a template, a Figma import, or an AI Editor draft from a
  prompt or a screenshot
- One paywall for iOS, Android, React Native, Flutter and the web
- Collaborator roles decide who can change paywalls and offerings
Fine print and links unchanged from v1.6.
Proof points [v1.6], replaced:
- Visual editor and pre-built templates
- Start from a template, import a Figma design, or let the AI Editor
  draft it from a prompt or a screenshot
  (Requested: "Start from a template, a Figma design or a prompt, and
  let the AI Editor draft it". Audit FAIL as worded: the AI Editor does
  not draft from Figma; Figma goes through the Figma plugin. No beta or
  GA label: RevenueCat's docs and changelog disagree.)
- One paywall for your iOS, Android, React Native and Flutter apps, and
  the web
  (Requested: "One paywall across iOS, Android, React Native, Flutter
  and web". Audit PASS with conditions, hence the fine print.)
- Collaborator roles decide who can change paywalls and offerings [v1.2]
Fine print [v1.6]: On supported SDK versions. On the web through a Web
Purchase Link or the Web SDK.
Links [v1.6]:
- Learn more about Paywalls > (https://www.revenuecat.com/feature/paywalls)
- Watch the product demo > (https://www.youtube.com/watch?v=mPzCTxIlMXE).
  Linked, never embedded. RevenueCat's Paywalls page embeds this same
  video ID beside "Watch a product demo of RevenueCat Paywalls"
  (checked 2026-09-27). The video predates Figma import and the AI
  Editor, so it is never placed as proof of either.

## 5. Learn what users value
Headline: Win the year, not just the week.
Body: Early conversion can crown the wrong winner. RevenueCat
Experiments forecast each variant's 12-month value while the test
runs. Roll out the one predicted to earn more.
v1.8: the chips are plain tags (tint fill, no outline), so they don't
read as filters. Line under them: "In your apps, prices come from the
products you set up in App Store Connect and Google Play Console."
(Requested: "Prices come from the products in your App Store and
Google Play accounts." Audit PASS conditional: true for the apps, but
Experiments also run on web paywalls, where RevenueCat Billing prices
are set in the RevenueCat dashboard; and the tools are App Store
Connect and Google Play Console.)
"How the forecast works >": not added [v1.8]. No public page explains
how the Experiments forecast is made; the Prediction Explorer docs
describe a different tool.
The Pixelcut block moved to section 4 [v1.8].
Chip row above the simulator [v1.7]: "What you can test:" Price /
Trial length / Paywall design / Up to 4 variants. (Audit PASS: preset
experiment types "Price point", "Free trial offer", "Paywall design";
"test up to four variants simultaneously".) "Test up to four variants
at once." is removed.
Caption [v1.7]: Illustrative data and model. In experiments with
revenue as the primary metric, RevenueCat predicts each variant's
12-month LTV once there's enough data. It's a forward-looking signal,
not a guarantee.
(Audit: no public page states a variant-count condition for the
forecast, so the caption names none and the simulator stays at two
variants.)
Simulator [v3, v1.4]:
- Label: Illustrative experiment
- The PM's panel, left:
  - Header: Experiment: Tidelark paywall test
  - State: Running (the dot pulses). After rollout: Rolled out.
  - Toggle: Judge by: Conversion to paying | Predicted 12-month LTV
    ("Conversion to paying" is RevenueCat Experiments' own metric
    name.)
  - Variant A: Weekly featured, 3-day trial. 11.0% conversion to
    paying, $59.52 predicted 12-month LTV [v1.5].
  - Variant B: Monthly featured, 7-day trial. 7.4% conversion to
    paying, $130.46 predicted 12-month LTV [v1.5].
  - Under the cards [v1.5]: "LTV per paying customer, illustrative
    model."
  - Both metrics on every card, always, as rows [v1.6]. The judged row
    is bold and larger. Cards stay side by side at every width.
  - Winner pill: Leads.
  - Chart, tagged Illustrative: "Cumulative revenue per 10,000
    customers in the test" [v1.5]. Under it: "10,000 customers per
    variant. A: 1,100 paying, $65.5K. B: 740 paying, $96.5K." A's line
    red, B's line green [v1.5]. Axis
    $0 / $50K / $100K; months 0, 3, 6, 9, 12 and "Months". Month 0 to
    1 solid, marked "Observed"; months 1 to 12 dashed, marked
    "Predicted". Crossover label: "B overtakes at month 4". End
    labels: A $65.5K, B $96.5K. The conversion view shows only the
    observed month.
  - Line labels on the chart (LTV view) [v1.6], replacing the "Why B
    wins" table: "Weekly: 3.5% still paying at month 12" (A) and
    "Monthly: 18% still paying at month 12" (B). On narrow screens they
    sit as a key under the chart.
  - Line under the chart, RevenueCat's verified wording kept:
    "Illustrative model of a hard-paywall app. RevenueCat uses each
    variant's observed conversion and retention data to model future
    revenue."
  - Status, conversion view: A leads on conversion to paying
  - Status, LTV view: B leads on predicted 12-month LTV, even though A
    converts more.
  - Button [v1.6], two steps inline, no dialog: "Roll out winner", then
    "Confirm: roll out B to 100%" (or A, if A leads). Escape or leaving
    the button cancels step two.
  - Toast [v1.5]: Rolled out. No app release. Inline, beside the
    button on desktop and below it on mobile; no reserved slot.
  - After rollout: a disabled "Rolled out" button and a "Reset demo"
    link.
- What users see [v1.6]: the shared Tidelark paywall. Desktop: the
  phone stays pinned while the panel scrolls. Mobile: a compact strip,
  a small paywall thumbnail beside the label "What users see" and the
  chip.
  - During the test the chip alternates "Variant A · 50%" and
    "Variant B · 50%", and the paywall with it.
  - On rollout a pulse travels from the panel to the phone, which then
    shows "Now live: Variant B · 100%" (or A, if A was the winner) and
    that variant's featured plan.
- Demo cursor label: You. The one-time demo runs the whole sequence
  [v1.6]: flip to predicted 12-month LTV, click "Roll out winner",
  confirm, and the phone goes live. "Reset demo" hands it over.
- Caption [v1.5], replaced in v1.7: Illustrative data and model. The 12-month forecast appears once an experiment with
  revenue as its primary metric has enough data. It's a signal, not a
  guarantee.
- Model, illustrative, fitted to RevenueCat's published ranges
  (claim audit 2026-09-27): 10,000 enrolled per variant; A 1,100
  paying at $30.29 a month (weekly $6.99), still paying months 1 to 12:
  100, 25, 15, 11, 9, 7.5, 6.5, 5.5, 5, 4.5, 4, 3.5 percent; B 740
  paying at $29.99, still paying: 100, 60, 46, 38, 33, 29, 26, 24, 22,
  20, 19, 18 percent.

Charts module, v1.7 changes:
- Sub: "Watch each RevenueCat paywall's performance, your cohorts'
  realized LTV, and how you compare with similar apps." (Was "every
  paywall's": final sweep FAIL, paywall charts track RevenueCat
  Paywalls only, as settled on 2026-09-26.)
- Desktop readout: the hovered month's values sit in a line above the
  plot instead of a floating tooltip, so nothing covers the lines.
- Mobile tabs: "Paywalls", "LTV", "Benchmarks", three equal segments.
- Paywall Conversion: "Onboarding paywall" in green (the leader),
  "Streak reminder paywall" in ink. A red ring marks July, labeled
  "Best month".
- Realized LTV per Customer: a red ring marks May, labeled "Best
  cohort".
- Benchmarks: Monthly Churn Rate below the median, tagged "Where to
  focus": 38th percentile in v1.7, 14th in v1.8, below the 20th, where
  RevenueCat's scorecard points focus. Markers green above the median, red below.
  A median tick on each bar. Legend: "Your app, above the median",
  "Below the median", "Similar apps, 20th to 80th percentile".
- Not added: "Explore the demo dashboard >". The current /for-product
  page links "Try the demo" to demo.revenuecat.com/overview, which
  redirects (307) to RevenueCat's login page. Audit FAIL.
Charts module [v1.6], below "Test up to four variants at once.":
- Headline: The test ends. The learning doesn't.
- Sub: Watch every paywall's performance, your cohorts' realized LTV,
  and how you compare with similar apps.
- Sidebar "Charts", names as RevenueCat Charts uses them (audit PASS):
  "Paywall Conversion", "Realized LTV per Customer", "Benchmarks".
- Paywall Conversion, tagged Illustrative, chip "Apple Search Ads
  Keyword: morning routine": a line chart, one line per paywall,
  "Onboarding paywall" and "Streak reminder paywall", Jan to Aug. Axis:
  "Month of first paywall impression". A hover marker shows each
  month's values.
- Realized LTV per Customer, the same tag and chip: one line, "Realized
  LTV per customer", by cohort month, Jan to Aug. Jul and Aug dashed on
  a hatched band labeled "Incomplete". Axis: "Cohort month. Recent
  cohorts are incomplete: they are still earning." (RevenueCat marks
  recent periods incomplete.)
- Benchmarks, tagged Illustrative, no chip: the three percentile bars
  kept from v1.5; legend "Your app" and "Similar apps, 20th to 80th
  percentile" (was 25th to 75th; RevenueCat's docs draw the middle band
  at 20th to 80th). The median tick is gone. Note: "Against similar
  apps in the same store and category. A higher percentile is better,
  including for churn." (RevenueCat: "For all metrics, being at a
  higher percentile is better.")
- Below: "Need the numbers elsewhere? Pull chart data into your own
  dashboards with the Charts API." and "Learn more about Charts >"
  (https://www.revenuecat.com/feature/charts).
- Replaced: the v1.5 tables, "Paywall performance", "Cohort and
  prediction" and "Prediction Explorer".

Superseded by v1.5 and v1.6, kept for the record. Below the simulator,
two rows [v1.4]:
- Row 1: the paywall performance chart card (unchanged, sparkline
  labels Conversion, LTV, Abandonment), and a Benchmarks card, tagged
  Illustrative: "Compare your conversion, churn and LTV with similar
  apps in Benchmarks." Percentile bars labelled Conversion, Churn,
  LTV; legend "Your app" and "Similar apps, 25th to 75th percentile".
- Row 2: "Test up to four variants at once." with a four-way
  traffic-split bar (A 25%, B 25%, C 25%, D 25%; no forecast on it),
  beside the Pixelcut proof block.
Proof block [v1.2, moved v1.3]:
- Quote: "Being able to find a variant that produces a 16% increase in
  subscribers definitely makes RevenueCat worth it." Key number in red:
  16% increase.
- Name and role: Dominique Yahyavi, Co-Founder, Pixelcut
- Link: Read case study >
  (https://www.revenuecat.com/customers/pixelcut)
- Source: https://www.revenuecat.com/feature/experiments. The metric is
  subscribers. Never restate it as revenue, LTV or conversion rate.
- MOJO was the first choice and failed the audit: its "$1M MRR" line
  has no speaker, no timeframe and no support in its case study.

## 6. Fit the offer to every user
Headline: Different users. Different offers. App or web.
Body: Target paywalls by country, platform, app version or your own
attributes. Build web funnels that route visitors by their answers
and take payment. One link unlocks their subscription in the app.
v1.7: a fourth web line, "See which campaigns drive paying customers
on the web". (Requested: "See which campaign drove each web
subscription". Audit FAIL on "each": RevenueCat breaks funnel
conversions and revenue down by campaign, and its Web page says "see
which campaigns drive paying customers".)
v1.8: step 4 is "Download the app, tap the link, unlocked" (was
"Unlocked in the app", "With one link"). Source: RevenueCat's Funnels
beta post, "They get a Redemption Link, download your app, tap the
link, and their subscription is already active." Small print adds
"Your app needs to handle Redemption Links." (the audit condition).
Journey [v1.7], four steps, tagged Illustrative: "Ad" (a tiny
"Tidelark, Sponsored" ad with "Get", desktop only) > "Quiz", "What's
your goal?", "Start earlier" (chosen), "Sleep better" > "Checkout",
"Apple Pay", "Google Pay", "Where supported" > "Unlocked in the app",
"With one link". The targeting chips and the two lanes are removed;
the body already names targeting.
Web lines [v1.6], checkmarks beside the body:
- Lower platform fees on web purchases
- Flexible pricing and promos on the web
- Pre-sell subscriptions on the web before launch
(Requested: lower platform fees on web purchases, full control of price
points and promos, earning before launch. Audit: "Lower platform fees"
and "Flexible pricing & promos" are RevenueCat's Funnels headings; the
third follows RevenueCat's blog title "How to pre-sell app
subscriptions on the web before launch". No fee percentages, never
"eliminate" or "bypass". "On the web" stays on the pricing line: store
prices still live in App Store Connect and Play Console.)
Links [v1.6]: Learn more about Funnels >
(https://www.revenuecat.com/feature/funnels); Learn more about web
billing > (https://www.revenuecat.com/feature/web, which covers every
billing engine).
Journey [v1.6], tagged Illustrative, in two lanes:
- "On the web": Ad click (a tiny "Tidelark, Sponsored" ad with "Get",
  desktop only) > Web funnel > The answer routes to an offer >
  Checkout
- "In the app": Get a Redemption Link > Download the app > Tap the
  link, subscription active
- "Targeting": Country, Platform, App version, Custom attributes
Flow labels before v1.6 [v1.2]: Ad click > Web funnel >
Checkout > Get a Redemption Link > Download the app > Tap the link,
subscription active
Step details, kept from v1.1 for the visual (approved 2026-09-27): the funnel step asks
"What's your goal?" and is tagged "Localized to the visitor's
country"; checkout shows "Apple Pay or Google Pay, where supported".
Layout [v1.6]: text and web lines side by side, the journey full width
below; on mobile, a tight timeline.
Customer story block [v1.2]:
- Label: Customer story
- Text: Floga made $120K+ in one day selling lifetime memberships
  through RevenueCat Web Billing, while its app was still in
  development. Key number in red: $120K+.
- Link: Read case study > (https://www.revenuecat.com/customers/floga)
(Production note: the case study covers Web Billing only. The block
sits apart from the funnel flow so it doesn't suggest Floga used
Funnels.)
Small print [v1.8]: Targeting is included on Pro and Enterprise. Fee
rules differ by store and region. Your app needs to handle Redemption
Links.

## 7. The foundation [v1.7]
Eyebrow: The foundation
Headline: Subscribe once. Unlocked everywhere.
Body: Underneath every paywall is infrastructure trusted by over
146,000 apps: one set of entitlements across the App Store, Google
Play and the web, with Apple and Google API changes handled for you.
(Requested: "the infrastructure 146K+ apps run on" and "store and API
changes handled for you". Audit: "run on" FAIL, RevenueCat says
"trusted by over 146,000 apps"; the live /for-product page says "we
handle changes to Apple and Google's APIs", so the line names them.)
Bullets:
- Customer Center lets subscribers manage or cancel on their own in
  your app, and can show an offer to stay right before they cancel
  (Requested: "with a win-back offer before they go". Audit FAIL on
  "win-back": RevenueCat uses it for users who already churned.
  Customer Center: Pro and Enterprise, in the app via RevenueCatUI.)
- Refund Control responds to App Store and Google Play refund requests
  with the required data and your refund preference; the store makes
  the final call [v1.8]
  (v1.7 said "with usage data". Audit FAIL: RevenueCat's docs say it
  doesn't collect or send usage events; it sends the required data and
  your preference, and "the store makes the final refund decision".)
- Paywall version history and audit logs, plus SSO on Enterprise
  (Requested: "Version history, audit logs, and SSO on Enterprise".
  Audit FAIL as worded: only SSO is documented as Enterprise.)
Link: Learn more about infrastructure > (unchanged)
Diagram, trimmed so it doesn't repeat the bullets: the title is gone
(the headline carries it); "Refund Control" is a name-only node; note
"Same account, every device."
OpenAI block unchanged.
Small print [v1.8]: Customer Center is available on Pro and Enterprise
plans.
Superseded in v1.7 (kept for the record):

## 7. Teams and foundation (before v1.7)
Headline: Decide who can change a live paywall.
Layout [v1.3]: text left, visual (badges, then diagram) right.
Body [v1.5], trimmed to two sentences: Give product managers, growth
leads and engineers the right collaborator role, including a Growth
role that can edit paywalls and offerings. Version history and audit
logs show who changed what.
(The foundation detail moved into the diagram labels, see v1.5
microcopy. The rest of the earlier body below is superseded.) Paywall version history shows
who saved each version, and when. Audit logs show who changed what in
the project. On Enterprise, sign in with SSO over SAML or OIDC.
Underneath, one set of entitlements covers the App Store, Google Play
and the web. Refund Control answers store refund requests with usage
data and your preference. The store makes the final call.
Governance badges, leading the visual:
- Collaborator roles, including a Growth role for paywalls and
  offerings
- Paywall version history
- Audit logs
- SSO with SAML or OIDC, on Enterprise
Link [v1.6], under the checklist: Learn more about infrastructure >
(https://www.revenuecat.com/feature/infrastructure)
Diagram [v1.6], tagged Illustrative, replacing the v1.5 foundation
diagram: title "Subscribe once, unlocked everywhere". "Store side":
"App Store" (bought: "Tidelark Pro, bought once"), "Google Play", "Web";
a small "Refund Control" node, "Answers store refund requests with
usage data and your preference. The store makes the final call."
Middle: "Entitlement: pro", "The shared key". Below: iPhone, Android
and Web, each showing "Pro" unlocked (green fill). Note: "Pro unlocked
on every device signed in to the same Tidelark account." (Entitlements
follow the customer's app user ID, so the same account is required.)
Removed [v1.6]: "Pull your dashboard's chart data into your own tools
with the Charts API." Section 5 now carries the Charts API line.
Proof block, for the enterprise reader [v1.2]:
- Quote: "With RevenueCat, we never had to slow down."
- Name and role: Sara Conlon, Head of Financial Engineering, OpenAI
- Link: Read case study >
  (https://www.revenuecat.com/customers/revenuecat-openai)
- Source: the OpenAI case study. The Infrastructure page's OpenAI quote
  contains an em dash, which this page bans; published quotes are never
  re-punctuated, so the complete case-study sentence is used instead.
(Production note: no undo, revert or approval claims anywhere in this
section. None is documented.)

## 8. Two ways to start
Headline: Two ways to start.
Sub [v1.3]: From a product team of one to a whole product org.
Card 1, "Pro", eyebrow "Self-serve" [v1.5] (was the price line in
v1.4; RevenueCat's own blog calls Pro its self-serve plan):
Free up to $2,500 in monthly tracked revenue, then 1% of all tracked
revenue, with Experiments and Targeting included.
Bullets [v1.3, claim audit 2026-09-27]:
- Paywall editor with pre-built templates
- Dashboard for 40+ key metrics
- Web-to-app Funnels included
Footnote: Monthly tracked revenue is measured before store commission
and taxes.
CTA, card 1: Start for free, as a chevron text link [v1.2]
Card 2, "Enterprise", label "For product orgs at scale" [v1.3]: Custom
pricing and SSO.
Bullets [v1.3, claim audit 2026-09-27]:
- Dedicated support
- Custom SLAs for high-volume apps
- Volume discounts
CTA, card 2: Talk to sales, as a chevron text link [v1.2]
Link, card 2 [v1.8]: Security and compliance >
(https://www.revenuecat.com/security-and-compliance, the page the live
/for-product footer links), beside "Talk to sales".
Each card has an icon tile [v1.3].
"Trusted by" row [v1.3], full width below both cards, never inside
one: no public page ties any customer to a plan. Logos, grayscale:
Buffer, Zero, GoodNotes, StockTwits (Buffer, Zero and GoodNotes on
/for-product; StockTwits on /feature/experiments, /feature/paywalls,
/feature/charts and /feature/refund-control). No overlap with the
scale strip.
Final band headline: Build the reason they renew.
Final band headline with ?v=b2: Build a subscription experience worth
renewing.
(Each variant closes with the other's line: the hero and the final
band swap together.)
Primary CTA: Start for free, the page's last filled primary. Secondary:
Talk to sales, as a chevron text link [v1.2].
Link: Already on RevenueCat? Open Paywalls in your dashboard

## Fictional app
Tidelark. Stridewell was rejected: StrideWell is a real App Store app.
No exact match for Tidelark on the web or in the stores. A web search
is not a trademark check, so search both stores and a trademark
database before shipping.
