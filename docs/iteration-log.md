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

## 2026-09-26: Headline and direction check (competitor-watch)

Ran the competitor-watch agent on four hero headline options and on
the working direction ("decide on revenue inside the experiment, ship
without an app release"). The agent checked the live competitor pages
listed in docs/competitive-scan.md plus competitor docs, and checked
RevenueCat's own changelog because docs/brief.md is empty. Output
below as returned. All URLs were loaded on 2026-09-26.

Headlines tested:
1. Ship the paywall that pays, not the one that converts
2. Your best-converting paywall might be your worst one
3. Test anything. Know what it's worth.
4. Own your paywall without waiting on engineering.

### Source check
- Two of the three open spaces in docs/competitive-scan.md are wrong:
  - Open space 1, "deciding on money inside the experiment": Adapty claims it on its homepage, and both Adapty and Apphud have shipped it. See Part B.
  - Open space 2, benchmarking: this has shipped, so it is not roadmap. RevenueCat launched Benchmarks on 2026-04-13 (https://www.revenuecat.com/changelog/release/compare-subscription-metrics-against-industry-benchmarks-2026-04-13). Adapty Autopilot also benchmarks by category.
- docs/brief.md is still empty, so RevenueCat's capabilities were checked against RevenueCat's own sources:
  - **Predicted 12-month LTV winner inside Experiments: CONFIRMED.** Shipped 2026-02-12 (https://www.revenuecat.com/release/see-predicted-12-month-ltv-winners-in-experiments-2026-02-12). It only applies to experiments with a revenue primary metric, and only appears once "guardrails are met".
  - **Roll out the winner in one action: CONFIRMED.** Shipped 2026-02-06 (https://www.revenuecat.com/release/roll-out-an-experiment-winner-in-one-action-2026-02-06). It stops the test and either updates the default offering or creates a targeting rule.
  - The June 2026 launch post confirms both again, plus credible intervals, Chance to Win and Rico analysis of results (https://www.revenuecat.com/blog/engineering/launch-party-june-26-the-new-features-you-should-know).
  - Caveat: the Experiments docs found are the v1 pages (https://www.revenuecat.com/docs/tools/experiments-v1/experiments-overview-v1). They mention neither feature and list mobile SDKs only. Could not confirm that Experiments cover web.
  - Experiments is on Pro and Enterprise only. Pro is free up to $2,500 MTR (https://www.revenuecat.com/pricing/), so solo PMs are covered.

### Part A, headline 1: "Ship the paywall that pays, not the one that converts"
- **This is Adapty's claim.** The Adapty homepage (https://adapty.io/) has a section headed "A/B test for revenue, not just conversions". Superwall makes the same argument on https://superwall.com/solutions/increase-revenue-arpu-ltv.
- It contradicts RevenueCat's own homepage, which has a section titled "Build, target & test paywalls that convert" (https://www.revenuecat.com/).
- "Pays" reads as a promise. The pLTV winner is a forecast, so the verb breaks the non-negotiable that predicted LTV is not a guarantee.
- Angle left: none on the idea. Only the proof can be owned: 146K+ apps and $17B+ revenue processed. No competitor can borrow that scale.
- Copy risk: the revenue-versus-conversions contrast repeats Adapty's heading in meaning. Purchasely's rollout heading on /conversion uses the same "this, not that" shape.
- **Verdict: kill.**

### Part A, headline 2: "Your best-converting paywall might be your worst one"
- **The idea is Superwall's and is common across the category.** https://superwall.com/solutions/increase-revenue-arpu-ltv: "a higher-converting paywall can still earn less than a higher-priced one".
- The wording is original. Nobody else uses the best/worst framing, and it is the sharpest hook of the four.
- It contains nothing only RevenueCat can say. Every vendor in Part B could put its product under this line.
- "Worst" is hyperbole a PM can wave away: worst on what, and over what period?
- Angle left: follow the hook with something competitors lack. Benchmarks show where the app sits against apps in the same store and category. Adapty can partly match that through Autopilot, but not at the same scale.
- Copy risk: a drawn A vs B example (A converts more, B earns more) is Superwall's explainer on that same page. Adapty's homepage also has a mock card with a predicted-winner badge and percentages. Use a real RevenueCat Experiments results screenshot, not a generic two-variant card.
- **Verdict: rework. Keep the line but move it to the problem section. It cannot be the hero.**

### Part A, headline 3: "Test anything. Know what it's worth."
- **The first half is Superwall's PM page word for word.** https://superwall.com/solutions/product-managers: "test anything, fast, without shipping a build".
- The second half echoes Qonversion's experiments hero, https://qonversion.io/experiments: "Stop guessing. Start knowing." It also echoes Adapty's homepage promise to pick winners on predicted revenue.
- "Anything" is false for RevenueCat. Experiments test offerings (products, prices, durations, trials) and paywalls, not full onboarding flows. Adapty and Purchasely do test full flows.
- Angle left: "what it's worth" only holds up if it means the 12-month LTV forecast per variant, stated as a forecast. That matches Adapty and Apphud. It does not beat them.
- **Verdict: kill.**

### Part A, headline 4: "Own your paywall without waiting on engineering."
- **This is Superwall's PM page positioning.** The Superwall PM subhead starts with the same verb, own, and ends on not waiting for a release or an engineering queue. Its experimentation page says the same (https://superwall.com/solutions/paywall-a-b-testing-experimentation): "no app release and no engineering queue required".
- Qonversion says it more blandly on https://qonversion.io/for-product-managers: "Test paywalls, pricing, and features without engineering help".
- It breaks the brief's rule in spirit. "Without waiting on engineering" reads as "no engineering", but engineers have to integrate the SDK and serve offerings once. The allowed phrasings are "no app release" and "no engineering sprint".
- Copy risk: the highest of the four. Same verb, same object and same enemy as Superwall's PM hero, on the same type of page.
- Angle left: incumbency. If a PM's app already runs RevenueCat, experiments run on what engineering has already shipped, with no second SDK and no migration. Superwall cannot say that to those PMs.
- **Verdict: kill.**

### Part B: the direction
**This direction is Adapty's positioning. It is not a new merge of Superwall and Adapty.** Adapty's homepage already claims both halves, Apphud ships the same mechanics, and Superwall owns judging on revenue without a release.

#### Adapty: predicted revenue inside the test, and the winner is chosen when you stop it
- The homepage (https://adapty.io/), in the same section as the heading above, tells PMs to pick the winner on actual and predicted revenue. It shows a mock predicted-winner card ranked on revenue per 1K users.
- A/B testing page (https://adapty.io/paywall-ab-testing/): "AI-powered predictive models to predict a test winner".
- Predictions (https://adapty.io/docs/predictions-in-ab-tests): a predicted probability to be best, projected as if the test ran for a full year. It appears once certainty criteria are met, with a two-week minimum.
- Results (https://adapty.io/docs/results-and-metrics): the variant with the best revenue per 1K users is "highlighted in green and automatically selected as the default choice".
- Rollout (https://adapty.io/docs/run_stop_ab_tests): stopping a test asks you to pick the winner on revenue, P2BB and revenue per 1K users. That variant is then served to the placement and audience, so it is in effect one action.
- The scan's line "Adapty predicts in a dashboard" is wrong. Cohort predictions live in analytics (https://adapty.io/performance-analytics/), and a separate prediction runs inside A/B tests.

#### Apphud: predicted revenue in experiments, plus a Roll out button
- https://docs.apphud.com/docs/experiment-metrics describes the pARPU metric: "Uses machine learning to predict the ARPU that might be achieved". Horizons run from 1 month to 1 year (https://docs.apphud.com/docs/analyzing-experiments).
- https://docs.apphud.com/docs/experiments: you complete the test, then a Roll out button replaces the targeting's paywalls and remote config. That is two steps, not one.
- Apphud's comparison page (https://apphud.com/revenuecat) still marks RevenueCat as lacking LTV predictions. RevenueCat's changelog disproves that.

#### Superwall: judges on net proceeds and ships without a release, but its agents do not ship winners
- Results docs (https://superwall.com/docs/campaigns-understanding-experiment-results): the graph "defaults to Proceeds Per User". Its projected metrics apply trial conversion to pending trials. No 12-month LTV prediction found.
- Rollout (https://superwall.com/solutions/price-testing-optimization): "Set the losing variant to 0% to keep the winner live". Manual, but no release needed.
- Agents (https://superwall.com/solutions/run-complicated-ltv-retention-and-experiment-reports-with-superwall): "Analyze experiment results and find winning segments without a SQL query". No automatic winner selection or rollout is claimed.
- The Superwall homepage (https://superwall.com/) now calls itself "a complete, standalone subscription platform for consumer mobile and web apps". Superwall is going after RevenueCat's infrastructure position, not just its paywalls.

#### Purchasely: revenue in results and same-day rollout, but no prediction
- https://www.purchasely.com/conversion scores tests on conversion, trial-to-paid and revenue, and says "When a variant wins, it goes to your whole base the same day."
- Docs (https://docs.purchasely.com/docs/ab-test-results): results show revenue, ARPU and ARPPU. No predicted LTV.
- Note: Purchasely's /product/ab-test URL now serves the same page as /conversion.

#### Qonversion: significance tested on revenue, but no prediction
- https://qonversion.io/experiments lists revenue-based statistical significance and automatic winner detection.
- Docs (https://documentation.qonversion.io/docs/analyse-experiment): sales, proceeds and conversion metrics. No predicted LTV and no one-step rollout documented.

#### "Revenue over conversion" is already common category language
- Adapty's blog (https://adapty.io/blog/paywall-ab-testing-mistakes/): "A cheaper plan might convert better but generate less revenue overall."
- Superwall's blog (https://superwall.com/blog/how-to-ab-test-a-paywall): "If the trial-start winner loses on D30 ARPU, that variant is over-promising".
- The same idea appears in Adapty's homepage heading, Superwall's revenue and price-testing pages, and Qonversion's experiments page.
- RevenueCat's own blog makes the same argument in search results. Those posts were not opened.

#### What only RevenueCat can claim
- **Against Superwall only:** a 12-month LTV forecast per variant, where Superwall shows proceeds to date plus a trial projection. The gap is narrow and technical, and Adapty and Apphud already match it.
- **Scale: page-claimable now.** 146K+ apps, $17B+ revenue processed and 5B+ API requests daily (https://www.revenuecat.com/). Adapty says it has seen more than 20,000 subscription apps.
  - Do not connect scale to prediction accuracy. RevenueCat describes its LTV predictions as based on the app's own prior retention, with fallbacks. Adapty says its A/B model is trained across apps. Nothing public supports "better predictions from more data".
- **Incumbency: page-claimable.** If the PM's app already runs RevenueCat, the pLTV winner, rollout and Benchmarks all run on the backend engineering already integrated, with no second SDK and no migration.
  - Caveat: "no app release" only holds if the app already reads offerings from RevenueCat.
- **Benchmarks: page-claimable, but Adapty competes here.** RevenueCat compares seven metrics, including conversion, churn, refund rate and realized LTV, against apps in the same store and category (https://www.revenuecat.com/docs/dashboard-and-metrics/benchmarks).
  - Adapty's version (https://adapty.io/autopilot/): "Benchmarked against 20,000 apps in Adapty filtered by your category."
  - RevenueCat does not disclose its peer-set size, so never write "benchmarked against 146K apps".
- **Benchmarking the experiment result itself: roadmap.** That would show where the winning variant's LTV ranks in its category. Nobody claims it, and RevenueCat's Benchmarks docs show no link to Experiments.
- **Store and web as one revenue picture inside Experiments: not confirmed.** Verify before claiming it.

### Part C: angles competitors use with PMs that this direction misses
- **Getting the decision accepted.** Superwall's PM page argues that finance, growth and the experiment readout all read different numbers, so shipping a winner turns into a debate. The direction covers deciding, not getting finance to accept the decision.
- **What to test next.** Superwall Agents suggest the next test, and Adapty Autopilot gives a ranked list with reasons. The direction starts at the result, not the idea. RevenueCat's Rico analyzes results, but could not confirm that it recommends tests.
- **Test velocity.** Superwall's PM page sells running many more experiments per quarter, not one big lift.
- **Segments and markets, not one global winner.** Purchasely /conversion pitches every market, plan and user type, and Superwall Agents find winning segments. RevenueCat's rollout can create a targeting rule, so RevenueCat can claim this.
- **Tests beyond the paywall.** Purchasely owns the first session and Adapty tests entire flows. RevenueCat's scope is narrower, so do not overreach.
- **Trustworthy statistics.** Superwall's blog covers peeking and false positives, and Qonversion's docs cover the peeking problem. RevenueCat shipped credible intervals and Chance to Win, so it can say this.
- **Whether the revenue number is right.** https://apphud.com/revenuecat: "99,9% revenue data accuracy compared to App Store Connect and Google Play". The direction assumes the revenue number is trusted, and Apphud attacks exactly that.
- **Pricing model.** Superwall only bills on revenue through its own paywalls. PMs at larger apps will raise it. The page cannot answer it, so sales follow-up has to.

### Recommendation
- Carry none of the four forward as the hero. Headline 2 is the only one worth keeping, as the problem framing above the pLTV winner section.
- Kill headlines 1, 3 and 4. Headline 1 is Adapty's heading, headline 3 opens with Superwall's PM line, and headline 4 is Superwall's PM hero.
- Stop treating "decide on revenue inside the experiment" as the differentiator. RevenueCat has only matched Adapty and Apphud here. Keep it on the page as proof that RevenueCat has caught up, which also answers the out-of-date picture Apphud's table exploits.
- Sharpen the direction to what only RevenueCat can say today. RevenueCat already runs the revenue for your app and 146K+ others. On that same data, you test which offering earns more, get a 12-month forecast, roll the winner out in one action, and check your numbers against apps in your category. State the LTV forecast as a signal, not a promise.
- Keep "benchmark the winning variant against your category" off the page until it ships. It is the one open space that is actually still open.
- Update competitive-scan.md: open space 1 is false, and open space 2 has shipped but Adapty competes there. Also fill brief.md, because capability claims currently cite an empty file.

### What this changed
- The scan's open space 1 was the working direction's whole premise, and it was written from competitor homepages, not their docs. The docs show Adapty and Apphud already do it. Third time a static or surface-level source was wrong against the live product. Direction is not locked.
- Findings not yet independently re-fetched. Every RevenueCat capability cited here goes through claim-auditor before it reaches the page.
- Direction pivot. The working direction ("decide on money inside the
  experiment") was already Adapty's positioning. competitor-watch
  found it by reading competitor docs rather than homepages. The
  scan's open spaces were written from marketing pages and were
  wrong. New direction: grow revenue on the system that already runs
  it, because every competitor's pitch requires a switch and
  RevenueCat's doesn't. Same lesson as the brand palette: surface
  material was wrong, the real product was right.
- competitor-watch found capability parity in competitor docs. It was
  initially over-weighted as positional ownership, which drove a
  retreat to a narrow "already installed" direction. Rejected: a
  category leader should not position like a challenger. Added a
  source-tier weighting rule (owned / claimed / parity) to
  competitor-watch.

## 2026-09-26: Positioning v0.1 review (competitor-watch, pm-critic, claim-auditor)

Ran three agents in parallel on docs/positioning.md (DRAFT v0.1).
competitor-watch applied its OWNED / CLAIMED / PARITY weighting and
reused the URLs it verified earlier today, fetching only what was new.
claim-auditor checked against RevenueCat's public docs, changelog and
site, since docs/brief.md is still empty. Outputs below as returned.

### competitor-watch

#### 1. What competitors own, claim or match
The one idea, Pillar 1 and the "same data" clause are Superwall's positioning. Superwall owns all three on its PM page and its solutions pages. The forecast half of the idea is Adapty's homepage claim.

Rule applied: a persona page, a solutions page or a homepage headline counts as OWNED for that page's main message. A supporting line on any page counts as CLAIMED.

| Element | Competitor | Class | URL | Quote |
|---|---|---|---|---|
| One idea: "own your decisions, make them yourself" | Superwall | OWNED (PM persona page hero) | https://superwall.com/solutions/product-managers | "Own the monetization roadmap end to end" |
| One idea: "make the right ones" | Adapty | CLAIMED (homepage section) | https://adapty.io/ | "A/B test for revenue, not just conversions" |
| Statement: change it yourself, no release, no sprint | Superwall | OWNED (solutions page) | https://superwall.com/solutions/paywall-a-b-testing-experimentation | "no app release and no engineering queue required" |
| Statement: same | Qonversion | OWNED (PM persona page, bland) | https://qonversion.io/for-product-managers | "Test paywalls, pricing, and features without engineering help" |
| Statement: forecasts which variant earns more | Adapty | CLAIMED (feature page) | https://adapty.io/paywall-ab-testing/ | "AI-powered predictive models to predict a test winner" |
| Statement: same | Apphud | PARITY (docs) | https://docs.apphud.com/docs/experiment-metrics | "Uses machine learning to predict the ARPU" |
| Statement: "unlike tools you layer on top" | Superwall | OWNED (solutions page; layering on top is Superwall's pitch) | https://superwall.com/solutions/existing-apps | "you can keep RevenueCat as your entitlements and receipts layer" |
| Statement and RTB: same data | Superwall | OWNED (PM page has a section on one source of truth for every stakeholder, plus this dedicated page) | https://superwall.com/solutions/your-app-store-stripe-single-source-of-truth | "One Source of Truth for iOS, Android, and Stripe" |
| Pillar 1: control | Purchasely | CLAIMED (homepage body) | https://www.purchasely.com/ | "the only tool that gives you full control over your in-app experience" |
| Pillar 1: in-app and web | Superwall | OWNED (homepage H1) | https://superwall.com/ | "a complete, standalone subscription platform for consumer mobile and web apps" |
| Pillar 2 and the shift: revenue over conversion | Superwall | OWNED (solutions page) | https://superwall.com/solutions/increase-revenue-arpu-ltv | "a higher-converting paywall can still earn less than a higher-priced one" |
| Pillar 2: forecast inside the test | Adapty | PARITY (docs, projects the result as if the test ran a full year) | https://adapty.io/docs/predictions-in-ab-tests | none |
| Pillar 2: ship the winner in one action | Adapty | PARITY (docs, stop the test and pick the winner, then it is served) | https://adapty.io/docs/run_stop_ab_tests | none |
| Pillar 2: same | Purchasely | CLAIMED (supporting line) | https://www.purchasely.com/conversion | "When a variant wins, it goes to your whole base the same day." |
| RTB: one system | Qonversion | OWNED (homepage hero) | https://qonversion.io/ | "The complete stack for mobile subscription apps" |
| RTB: one system | Apphud | CLAIMED (homepage body) | https://apphud.com/ | "covers every aspect when it comes to in-app subscriptions from integration to analytics" |
| RTB: one system | Adapty | CLAIMED (homepage section, pitches one platform for the whole team) | https://adapty.io/ | quoted above |
| RTB: scale | nobody matches it | n/a | see Q3 | n/a |
| Category | Superwall: calls itself a subscription platform in its H1. Adapty: its H1 says revenueOS. Qonversion: its page title says subscription growth platform | OWNED (homepage headlines and title) | URLs above | quoted above |

- **One idea:** OWNED by Superwall. "Own your monetization decisions" uses the same verb and the same noun as Superwall's PM hero, on the same type of page.
- **Positioning statement:**
  - Clause 1 (change it yourself, no release, no sprint): OWNED by Superwall.
  - Clause 2 (12-month forecast): CLAIMED by Adapty. RevenueCat can match it but cannot prove it more completely.
  - Clause 3 (same data): OWNED by Superwall.
  - Only "146,000 apps" is unowned.
- **Pillar 1:** OWNED by Superwall, web included. See Q2.
- **Pillar 2:** CLAIMED by Adapty, PARITY at Apphud. Superwall owns the argument that revenue beats conversion but has no 12-month forecast.
- **The shift we're naming:** both halves are taken. "Before" is on Superwall's revenue solutions page and its PM page. "Now" is on Adapty's homepage.
- **Category:** no competitor uses "monetization platform" as its headline or page title. It is the leader's category, so keep it. It does not differentiate.
- **Copy flags:**
  - "Own your monetization decisions" against Superwall's PM hero: high risk.
  - "No app release and no engineering sprint" as one paired line: this is Superwall's line with one word swapped ("queue" becomes "sprint"). High risk.
  - "Come from the same data" against Superwall's one-source-of-truth page: medium-high.
  - "Human decides, machine recommends" against Adapty's "Autopilot recommends. You approve." (https://adapty.io/autopilot/): high risk if it reaches the page.
- **Angles we are missing:**
  - What to test next. Three challengers now sell AI that proposes tests:
    - Superwall Agents: https://superwall.com/solutions/run-complicated-ltv-retention-and-experiment-reports-with-superwall
    - Adapty Autopilot: https://adapty.io/autopilot/ (CLAIMED)
    - Purchasely Pulse AI, which recommends tests and builds the campaign: https://www.purchasely.com/ (CLAIMED)
  - Getting finance to accept the winner (Superwall PM page).
  - Test velocity.
  - Segment winners. RevenueCat can claim this through targeting-rule rollout.
- **Sources:** fetched new this run: Superwall PM page (re-fetched for the web question), Superwall homepage (re-fetched for scale), Superwall single-source, web-paywalls and existing-apps pages, Adapty homepage and Autopilot (re-fetched for scale and automation), homepages of Apphud, Qonversion and Purchasely, Qonversion /experiments and stop-experiment docs, Purchasely A/B docs. Everything else is reused from the earlier run today.

#### 2. Is our "control" broader than Superwall's?
It is the same claim, and on surfaces ours may be the narrower one. Superwall covers web on its PM page itself.
- **Superwall PM page** (OWNED, https://superwall.com/solutions/product-managers): web checkout is on the list of things a PM runs alone. It tests purchase paths on the web and links those memberships back to the app.
- **Superwall homepage H1** (OWNED, https://superwall.com/): positions it for mobile and web apps.
- **Web paywalls page** (CLAIMED, https://superwall.com/features/web-paywalls): web runs in the same editor, the same campaigns and the same experiments as in-app. Web and app purchases land in one view.
- **Single-source page** (OWNED, URL above): App Store, Google Play and Stripe report into one set of charts.
- **Our side:** Web Billing and Funnels exist. It is not confirmed that Experiments run on web or report store and web revenue in one result (competitive-scan.md). The v1 Experiments docs list mobile SDKs only. "Every surface" is parity at best, and may not be provable.
- **"Judged on 12-month revenue":**
  - Superwall's PM page lists LTV and retention among experiment metrics.
  - Its results docs default to proceeds per user, and its projections only apply trial conversion to pending trials (PARITY, https://superwall.com/docs/campaigns-understanding-experiment-results). No per-variant 12-month forecast was found.
  - That gap is the only real breadth, and it is about time horizon, not surfaces. Adapty and Apphud also have it.
- **What is actually broader than Superwall:**
  - Forecast horizon: 12 months against proceeds to date.
  - Benchmarks against apps in the same store and category. None found on Superwall's homepage or the pages checked.
  - Scale: 146K+ apps against 10,000+.
  - For apps already on RevenueCat: one vendor, where Superwall's existing-apps offer means two.
- None of that is "control". The broadening has to come from decision quality, not reach.

#### 3. Stress test of the reason to believe
Of the three proofs, "one system on the same data" is already claimed by four challengers. Only scale is hard to copy. Superwall has already copied half of "already integrated".
- **Scale is hard to copy.**
  - RevenueCat: 146K+ apps, $17B+ processed (https://www.revenuecat.com/).
  - Adapty: 30,000+ apps, $5B revenue tracked (CLAIMED, https://adapty.io/).
  - Apphud: 14,000+ apps, $1B+ tracked (CLAIMED, https://apphud.com/).
  - Qonversion: says both 5,000+ and 10K+ apps on the same page, $1B+ tracked (CLAIMED, https://qonversion.io/).
  - Superwall: $1.6B+ annual across 10,000+ apps (OWNED, homepage). The scan's $1.5B+ is out of date.
  - Nobody closes a 5x gap in app count tomorrow.
- **Parts of scale that only sound hard:**
  - API volume: RevenueCat's 5B+ requests a day is about 150B a month. Adapty states 80B API calls a month. That is under a 2x gap, so do not lean on it.
  - The revenue figures are not like-for-like: processed against tracked, cumulative against annual. Never put competitor numbers side by side on the page.
  - Scale proves trust and staying power, not better decisions. Do not link it to forecast accuracy.
- **"One system on the same data" only sounds hard.** Any challenger can say it tomorrow, and four already do:
  - Adapty's homepage pitches one platform (CLAIMED).
  - Qonversion's hero says complete stack (OWNED).
  - Apphud's homepage says it covers everything from integration to analytics (CLAIMED).
  - Superwall owns one source of truth (OWNED).
  - Adapty, Apphud and Qonversion were always full-stack. Superwall now is too.
- **The specific chain is harder to copy:** billing record, then a 12-month forecast per variant, then one-action rollout, then category Benchmarks.
  - Superwall has no forecast.
  - Qonversion has no forecast and no one-step rollout.
  - Apphud has no benchmarks on the pages checked, and its rollout takes two steps.
  - Adapty can claim the whole chain tomorrow: prediction in tests, pick the winner when stopping, Autopilot benchmarks by category. The chain beats three challengers, not Adapty.
- **"Already integrated" is hard to copy but narrower than written.**
  - "No migration" is already copied. Superwall's existing-apps page offers to layer onto a live RevenueCat app with no cutover (OWNED, https://superwall.com/solutions/existing-apps).
  - What Superwall cannot say is "no second vendor". Its own page requires adding its SDK and wiring the trigger points. Receipts stay in RevenueCat and tests move to Superwall: two vendors behind one decision. Its PM page argues that split numbers stall decisions, which cuts against its own layering offer.
  - Limits: never "no new SDK", because Paywalls needs the UI package and a minimum SDK version. "No app release" holds only if the app already reads offerings from RevenueCat.
  - It only reaches existing customers, and their share of visitors is unknown. For a new prospect, the reason to believe shrinks to scale plus a parity claim.
- **What it does not answer:** Superwall's layering offer plus its revenue-only billing makes "keep RevenueCat, add Superwall" cheap for experiments. The reason to believe has no answer to that.

#### 4. Automatic winner selection, rollout and traffic allocation
Nobody automates rollout or traffic allocation. The automation that exists is detection, pre-selection and drafting tests, and every case still needs a human click.
- **Superwall** (PARITY):
  - Automatic: nothing in allocation or rollout. Agents analyze results and find winning segments (https://superwall.com/solutions/run-complicated-ltv-retention-and-experiment-reports-with-superwall).
  - Human click: you set the split percentages and roll out by hand. https://superwall.com/solutions/price-testing-optimization: "Set the losing variant to 0% to keep the winner live".
  - No automation on the homepage either.
- **Adapty:**
  - Automatic, part 1: results highlight and pre-select the variant with the best revenue per 1K users. https://adapty.io/docs/results-and-metrics: "automatically selected as the default choice" (PARITY).
  - Automatic, part 2: Autopilot drafts products, paywalls and experiments on its own (CLAIMED, https://adapty.io/autopilot/).
  - Human click: approve and launch each Autopilot test, then stop the test and confirm the winner. Autopilot says it only recommends and the user approves.
- **Qonversion:**
  - Automatic: winner detection using Bayesian probability, plus an alert. https://qonversion.io/experiments: "Automatic winner detection" (CLAIMED).
  - Human click: press End. Ending only stops serving variants, and rolling out the winner is a separate config change. https://documentation.qonversion.io/docs/finish-experiment: "stops returning variant-related payload to your app" (PARITY). Variant weights are set by hand.
- **Apphud** (PARITY, https://docs.apphud.com/docs/experiments):
  - Automatic: the pARPU prediction is calculated for you.
  - Human click: complete the test, then press Roll out. That is two clicks.
- **Purchasely:**
  - Automatic: nothing in allocation or rollout. Splits are fixed percentages you set (PARITY, https://docs.purchasely.com/docs/ab-tests).
  - The /conversion page promises same-day rollout (CLAIMED) but does not say it is automatic.
  - Pulse AI recommends tests and builds the campaign (CLAIMED, homepage). No auto-launch or auto-rollout is stated.
- **Multi-armed bandit or adaptive allocation:** not found for any of the five. That covers the pages above, a site search of superwall.com and an open search. It is an absence on the pages checked, not a full audit.
- **What this means:**
  - Automatic rollout is unclaimed, but RevenueCat cannot take it, since its rollout appears to be human-triggered (pending claim-auditor).
  - "Human decides, machine recommends" is the category default, not a stance. Adapty says it in three words.

#### Recommendation
- Kill "Own your monetization decisions" as the one idea. Keep control as a promise in the body. Use "no app release" and "no engineering sprint" in separate places, never as one paired line.
- Drop "every surface, in-app and web" as the thing that makes us broader. Superwall's homepage headline says mobile and web. Rest the broadening on horizon and context: a 12-month forecast per variant plus Benchmarks against apps in the same store and category, stated as a signal.
- Rewrite the reason to believe:
  - Lead with scale.
  - Replace "one system on the same data" with the specific chain of billing, forecast, one-action rollout and Benchmarks.
  - Change "no migration" to "no second vendor". Superwall's layering pitch splits receipts and tests across two companies, and it cannot answer that.
- Keep "monetization platform" as the category. It is the leader's claim and not a differentiator. Add a "what to test next" answer only if claim-auditor confirms a RevenueCat feature recommends tests. Keep autopilot and auto-rollout language off the page.
- Update competitive-scan.md:
  - Adapty: 30,000+ apps and $5B tracked.
  - Superwall: $1.6B+ revenue, web coverage on its PM page, and its existing-apps layering offer.
  - Qonversion: states two different app counts on its homepage.

### pm-critic

#### Solo PM (4 people, $30K MRR)

**Control or impact?** Control, easily. But you've described the wrong problem. "No dependency on another team": there is no other team. My problem is our one engineer's release train, and I get a slot every few weeks. Impact is a luxury at my volume. The forecast only shows up "once guardrails are met", and nothing says what the guardrails are or how many weeks an app my size waits for them. "Make the right ones" is a promise to an app that doesn't have the traffic to be told anything is right.

**Automatic or decide?** Decide, but in ten seconds. I don't trust an auto-ship built on three weeks of my traffic, and one bad price change costs me a month of margin. What I want is a ping when a likely winner appears and a button to ship it. "RevenueCat surfaces the likely winner": surfaces it where? A dashboard I don't open isn't surfacing anything. Gap: does it notify me, or do I have to go and check?

**Does the reason to believe land if I'm not on RevenueCat?** No. Two of the three reasons are about people who already use it. "Unlike tools you layer on top or migrate to" is funny if I'm on raw StoreKit 2 or Superwall, because RevenueCat is the tool I'd be migrating to. 146K apps tells me the SDK won't fall over. It says nothing about the experiment tooling. And "no app release" is false on day one: I have to ship the SDK, the paywall UI package and the minimum SDK version first. What I'd need to hear: how long integration takes for an app like mine, what I pay at $30K MRR, and how soon I can read my first test. Be honest about it: one release, then none.

**Objection that stops me:** Price. Pro is free up to $2,500 MTR and I'm far past that. The positioning says pricing "cannot be answered" on the page. Superwall tells me infrastructure is free and it only bills on revenue through its paywalls. If I can't compare the two in a minute, I pick the one that told me a number. Second: if we're on an old SDK, "no engineering sprint" turns into an engineering sprint.

#### Growth PM (60 people, runs experiments)

**Control or impact?** Impact. Control is noise to me. We already change paywalls without a release through remote config and flags, so Pillar 1 describes what we have today. What I lack is a revenue outcome I trust for tests that pay out over a year: annual vs monthly, trial length, intro price. Pillar 2 could win me, but it's written as a slogan:
- "Judge changes on forecast 12-month revenue" overclaims. The forecast only exists for experiments with a revenue primary metric, after guardrails. Most changes never get one.
- Forecast how? The only public hint is that it uses my app's prior retention, with fallbacks. If I'm testing a price or plan I've never sold, prior retention is exactly what doesn't apply. Tell me what the model assumes for a new variant, how wide the interval is, and whether you've backtested it against realized 12-month revenue.
- "Make the right ones" treats a forecast as a guarantee, which breaks your own rule that predicted LTV is a signal.

**Automatic or decide?** Decide, always. I check refund and churn guardrails, segment splits, interactions with other live tests, and novelty effects. One action is fine if it's reversible and keeps a holdout, because comparing forecast with actuals six months later is the only way I'll ever trust the forecast. Gap: per the changelog, rollout stops the test and updates the default offering or creates a targeting rule. Does anything keep a holdout, or does the control group disappear?

**Does the reason to believe land if I'm not on RevenueCat?** No.
- "Same data" is only a benefit after a migration.
- "146K+ apps supported" in the reason to believe becomes "146,000 apps already run their subscription revenue on" in the statement. That's a stretch, and it counts SDK installs, not teams using Experiments or pLTV. The proof is for a different product than the pitch.
- Your answer to "our stack already does this", that it "doesn't see store-level revenue", is wrong for us. We send App Store Server Notifications and Play RTDN into the warehouse.

What I'd need to hear: does revenue reconcile to App Store Connect and Play Console within a stated tolerance (Apphud publishes a figure, you publish none)? Can I import historical transactions so the forecast has history on day one? Can I export assignments and results to my warehouse? How does it run alongside Statsig or Amplitude without assigning users twice?

**Objection that stops me:** Letting a forecast I can't inspect decide my pricing. Second, the fee on all tracked revenue, including lift the platform didn't create. The scan calls Superwall's version of this attack fair. And "Superwall is built for PMs: To test" isn't an answer.

#### Enterprise PM (media company)

**Control or impact?** Control, but not the control you're selling. "Make them yourself" is where you lose me. Here, a PM who changes paywalls, packaging and targeting with no release and no sign-off causes an incident. Control for me means who can change what, who approves it, what gets logged and how we roll back. Legal reviews price display, brand reviews paywall copy, finance signs off on packaging. None of them appear. Pillar 1 reads as a way around the process I'm accountable to.

**Automatic or decide?** Decide, and not alone. "You ship it in one action" reads as: anyone with dashboard access can change the default offering for millions of subscribers in one click. I need permissions on rollout, an approval step, an audit trail, staged or scheduled rollout, and a one-click revert. Gap: the positioning doesn't say who can trigger rollout. Even "human-triggered" is marked unverified in your own Deliberate choices. If you don't know, I can't know.

**Does the reason to believe land if I'm not on RevenueCat?** No. For me, "no new vendor, no migration" is backwards: RevenueCat is a new vendor, a security review, a DPA, a procurement cycle and a migration of live subscribers. 146K apps tells me you're big with indie apps. It doesn't tell me you can handle web subscriptions on our own billing stack, bundles, and entitlements shared across web and app. "Same data" breaks as soon as our web revenue lives outside RevenueCat. And "every surface: in-app and web" is unconfirmed for Experiments. What I'd need to hear:
- how RevenueCat sits alongside an existing web billing and identity stack
- whether that web revenue feeds the same forecast
- SSO, security certifications and warehouse export
- which revenue figure finance treats as the number of record

**Objection that stops me:** The revenue number of record. If RevenueCat's figure doesn't reconcile to finance's, every experiment readout turns into a meeting about whose number is right, and the forecast loses before anyone reads it. The positioning never mentions finance. Second: pricing on all tracked revenue at our volume. You say the page can't answer that. Procurement will.

#### Where the three disagree

- **Control means three different things.** Solo: I don't wait for a dev. Growth: I already have it. Enterprise: who is allowed to do it, with approval and audit. "Make the decision yourself" lands for Solo, bores Growth and alarms Enterprise. Pillar 1 does not hold for all three.
- **"One action" needs different things around it.** Solo wants a nudge and a button. Growth wants it reversible with a holdout. Enterprise wants it gated by role and approval. The forecast also fails differently for each: Solo can't reach the guardrails, Growth can't inspect the method, Enterprise can't get finance to accept it. "Judge on forecast 12-month revenue" answers none of the three.
- **Each needs a different answer as a non-customer, but the failure is shared.** Solo needs price and integration time, Growth needs reconciliation and history import, Enterprise needs procurement and web-stack fit. For all three, the reason to believe is written for existing customers, and "unlike tools you migrate to" is backwards. The open question of how many visitors are existing customers isn't a footnote. It decides whether two of the three reasons are relevant at all.

#### The single change

The worst-served archetype is the Enterprise PM. Every line assumes a PM acting alone: "make them yourself", "you ship it in one action", "no dependency on another team".

The change: redefine Pillar 1, and drop "yourself" from the one idea, so that control means changes go live without a release, under the roles, approvals, audit trail and rollback your team sets.

This costs Solo nothing: a solo PM is the admin and approver, and "no release, no sprint" still reads. It also gives Growth the reversibility it wants.

Verify first that RevenueCat has permissions on rollout, an audit log and a revert. If it doesn't, cut "yourself" anyway and send enterprise visitors to sales with an explicit governance answer. A pillar that alarms the enterprise buyer does more damage than one that says nothing.

### claim-auditor

#### Claim audit: docs/positioning.md (DRAFT v0.1), checked 2026-09-26

docs/brief.md has only a heading, so it is not a source for anything. There are no customer names, quotes, logos, store-fee claims or mock data in the draft, so those rules have nothing to catch.

| # | Claim | Source URL | Verdict | Suggested fix |
|---|---|---|---|---|
| 1 | "change paywalls, packaging and targeting yourself, with no app release and no engineering sprint" (statement and Pillar 1) | https://www.revenuecat.com/feature/paywalls ("without tying every iteration to an app release"); https://www.revenuecat.com/docs/tools/paywalls ("without any code changes or app update"); https://www.revenuecat.com/docs/offerings/overview | PASS, conditional | The wording follows the rules. It only holds if the app already shows RevenueCat Offerings or Paywalls: "Experiments requires you to use Offerings and have a dynamic paywall" (https://www.revenuecat.com/docs/tools/experiments-v1/experiments-overview-v1). Paywalls need iOS 5.27.1+ or Android 8.19.2+ and the RevenueCatUI import. Add "once your app shows RevenueCat paywalls" near first use. "Packaging" means products and packages that already exist in the stores. Prices are not included: stores are "where you configure price, duration, and free trials" (https://www.revenuecat.com/docs/offerings/products-overview) |
| 2 | "forecasts which variant will earn more over 12 months rather than which converted today" | https://www.revenuecat.com/changelog/release/see-predicted-12-month-ltv-winners-in-experiments-2026-02-12 | FAIL | Presents predicted LTV as a certainty. The source says "predicted to generate more revenue over time" and calls it "a forward-looking signal while the experiment is still running". The prediction shows "alongside your standard experiment results", not instead of them. Fix: "and on revenue-metric tests, shows each variant's predicted 12-month LTV alongside conversion, a forward-looking signal while the test runs" |
| 3 | "Unlike tools you layer on top or migrate to" | NONE (describes competitors; only docs/competitive-scan.md) | FAIL | For a prospect not on RevenueCat, adopting RevenueCat is also a new vendor and a migration. Limit it to existing customers: "If your app already runs RevenueCat: no new vendor, no migration" |
| 4 | "the platform more than 146,000 apps already run their subscription revenue on" | https://www.revenuecat.com/ ("146K+ Apps supported"); https://www.revenuecat.com/feature/experiments ("trusted by over 146,000 apps") | FAIL | "Supported" is not the same as "run their subscription revenue on". Use "trusted by more than 146,000 apps" or "146K+ apps supported" |
| 5 | "the paywall, the experiment and the revenue number come from the same data" | NONE for the combined claim. Closest: https://www.revenuecat.com/feature/charts ("Your source of truth for revenue data across subscriptions, one-time purchases") | FAIL | No page says all three share one dataset, and paywall charts exclude custom paywalls: "This chart only tracks impressions and conversions from RevenueCat Paywalls" (https://www.revenuecat.com/docs/dashboard-and-metrics/charts/paywall-conversion-chart). Fix: "Paywalls, Experiments and Charts in one platform, with Charts as your source of truth for revenue" |
| 6 | "Speed is the consequence: no queue, no dependency on another team" | NONE | FAIL | Setup needs engineering: a dynamic paywall, SDK minimums, placements code and Redemption Links. Fix: "no release queue for each paywall change" |
| 7 | "Across every surface: in-app and web" | https://www.revenuecat.com/docs/tools/paywalls; https://www.revenuecat.com/blog/company/paywalls-on-the-web; https://www.revenuecat.com/docs/tools/targeting; https://www.revenuecat.com/docs/tools/experiments-v1/configuring-experiments-v1 | FAIL | "Every surface" is absolute. Paywalls do not support watchOS, tvOS, visionOS or Cordova. The Experiments docs list mobile SDKs only. Web experiments rest on one blog post (Dec 31, 2025): "Experiments work the same way they do on mobile". Funnel tests are separate: "created and managed directly in the funnel editor". The Targeting docs mention Web Billing only as "Not sent" in the App Version table, and the Web SDK docs do not mention Targeting or Experiments. Fix: "In-app and on the web: paywalls on iOS, Android and web, plus web checkout and Funnels" |
| 8 | Proof: Paywalls, Targeting, Web Billing | https://www.revenuecat.com/docs/tools/paywalls; https://www.revenuecat.com/docs/tools/targeting ("available on Pro and Enterprise plans"); https://www.revenuecat.com/docs/web/overview | PASS | All three products exist. The docs now call the web product "RevenueCat Web", with "RevenueCat Billing" as one of its billing engines. Keep "Web Billing" only if it matches current site navigation |
| 9 | Proof: Funnels, as evidence for "no app release and no engineering sprint" | https://www.revenuecat.com/changelog/release/build-complete-web-to-app-funnels-with-revenuecat-2026-07-13 (GA); https://www.revenuecat.com/docs/tools/funnels/deploying-funnels; https://www.revenuecat.com/docs/web/redemption-links | FAIL (in this context) | Funnels exist, but "Funnels with a checkout step require Redemption Links to be enabled". Redemption Links need a URL scheme, deep-link handling, iOS 5.14.1+ or Android 8.10.6+, and an app update. Move Funnels to web proof and add "one-time Redemption Link setup in the app" |
| 10 | "Judge changes on forecast 12-month revenue, not short-term conversion" | https://www.revenuecat.com/changelog/release/see-predicted-12-month-ltv-winners-in-experiments-2026-02-12 | FAIL | Frames the prediction as absolute and replacing conversion. It only applies to experiments "with a revenue primary metric" and "shows automatically once the guardrails are met". Fix: "Judge revenue tests on predicted 12-month LTV as well as conversion" |
| 11 | "RevenueCat surfaces the likely winner; you ship it in one action" | Same pLTV release; https://www.revenuecat.com/changelog/release/roll-out-an-experiment-winner-in-one-action-2026-02-06 ("roll out the winning variant with a single action") | PASS, conditional | Say "On revenue-metric tests, RevenueCat shows the predicted long-term winner; you roll it out in one action." Rollout stops the test and "the experiment can't be restarted" |
| 12 | Proof: "Experiments with predicted 12-month LTV winners, one-action winner rollout" | Both releases above (2026-02-12, 2026-02-06) | PASS | Carry the conditions from rows 10 and 11. "Experiments is available to Pro & Enterprise customers" (https://www.revenuecat.com/docs/tools/experiments-v1). Pro costs nothing up to $2,500 of monthly tracked revenue (https://www.revenuecat.com/pricing/) |
| 13 | Proof: "paywall performance charts" | https://www.revenuecat.com/changelog/release/track-paywall-performance-with-new-real-time-charts-2025-11-24 ("four new Paywall charts"); https://www.revenuecat.com/docs/dashboard-and-metrics/charts/paywall-conversion-chart | PASS, conditional | They launched as beta. They track RevenueCat Paywalls only and appear in Charts v3 only. Write "paywall charts for RevenueCat Paywalls" |
| 14 | Proof: "LTV prediction" | https://www.revenuecat.com/docs/dashboard-and-metrics/charts/prediction-explorer | PASS, conditional | Keep it framed as a signal: "All future lifetime value predictions contain some degree of risk and uncertainty". If the accuracy stat is ever used, it must keep its condition: "at least 2,000 paid subscriptions" |
| 15 | "Now: see the likely 12-month value of each variant, ship the winner in one action, no release" | Rows 1, 11 and 12 sources; https://www.revenuecat.com/docs/tools/experiments-v1/configuring-experiments-v1 | PASS, conditional | Existing-customer experiments need iOS 5.66.0+ or Android 9.26.1+: "Customers on older SDK versions won't be enrolled". Say "predicted 12-month value" rather than "likely" |
| 16 | "146K+ apps supported, $17B+ revenue processed (revenuecat.com, September 2026)" | https://www.revenuecat.com/ ("146K+ Apps supported", "$17B+ Revenue processed") | PASS | Checked live today. Never cite https://www.revenuecat.com/why-revenuecat: it contradicts the homepage with "50K+ apps / $8B+ yearly rev" and "$17B+ in annual revenue". Never write "annual" |
| 17 | "One system: billing, experiments and analytics on the same data" | NONE for "same data". https://www.revenuecat.com/ ("power purchases, manage customer data, and grow revenue") | FAIL | App store purchases are billed by Apple and Google. RevenueCat Billing is a web engine, and growth tools can run on "your own IAP Infrastructure" (pricing page). Fix: "One platform for purchases, customer data, experiments and analytics" |
| 18 | "the growth tools run on the platform engineering already integrated. No new vendor, no migration" | https://www.revenuecat.com/docs/tools/paywalls; configuring-experiments-v1; https://www.revenuecat.com/docs/web/redemption-links | PASS, conditional | "No new vendor, no migration" is the correct wording. "Already integrated" needs a qualifier: Paywalls need RevenueCatUI and minimum SDK versions, existing-customer tests need minimum SDK versions, and Funnels need Redemption Links. Add "sometimes with an SDK update" |
| 19 | Category: "Monetization platform" | Search snippet only, not fetched: RevenueCat Web described as "complete monetization platform" (https://www.revenuecat.com/billing) | UNVERIFIED | This is a positioning choice, not a factual claim. Do not quote it as RevenueCat's own wording until the page is checked |
| 20 | "RevenueCat's rollout appears to be human-triggered" | configuring-experiments-v1; experiments-overview-v1 ("stop it when you feel confident choosing an outcome"); rollout release ("click Roll out winner") | PASS | Change "appears to be" to "is". https://www.revenuecat.com/feature/experiments says indicators "declare winners when statistical significance is reached", so never write "RevenueCat never picks a winner". Use "RevenueCat flags and predicts; you decide and roll out" |
| 21 | "being the platform most of the market already runs on" | NONE | FAIL | No RevenueCat page claims market share. The 2026 State of Subscription Apps blog gives dataset size only ("over 115,000 apps"). Share figures found only on third-party sites (SaaStr, Subscription Insider), which cannot be sources. Fix: "the platform trusted by more than 146,000 apps" |
| 22 | Open risk: "demonstrably broader: every surface, judged on 12-month revenue" | Rows 7 and 10 sources | FAIL | Predicted LTV is documented only for Experiments with a revenue primary metric. It is not documented for Funnel tests or web. Fix: "in-app and web, with predicted 12-month LTV on revenue-metric experiments" |
| 23 | Objection: other experimentation stacks don't see "store-level revenue" | NONE (docs/competitive-scan.md states it without a source) | FAIL | Make it a positive, sourced claim: Experiments show "how your tests impact your full subscription funnel" (https://www.revenuecat.com/feature/experiments) |
| 24 | Objection: "Maintenance tax and yearly platform changes" | NONE | FAIL | Keep as an internal talking point. If it goes on the page, use a homepage customer stat word for word. The Pixery Labs figure came back with different wording on two fetches, so re-check it first |
| 25 | Competitor claims: Adapty "Autopilot", "also full-stack", Superwall owns "Control", Superwall pricing attack | docs/competitive-scan.md (competitor URLs), not RevenueCat pages | Out of scope | Not re-verified here. None of these should appear as page copy |

#### Answers

1. **Automatic winner or allocation:** Correct the draft: rollout is human-triggered, not just "appears to be". Traffic is a fixed even split with a minimum 10% enrollment. Tests do not auto-stop: there is a manual Stop and they "can't be restarted". The only automatic parts are labels: the pLTV prediction "shows automatically", and indicators "declare winners when statistical significance is reached". The July 1 and August 14, 2026 changelog entries do not add adaptive allocation. Sources: https://www.revenuecat.com/docs/tools/experiments-v1/configuring-experiments-v1, https://www.revenuecat.com/changelog/release/roll-out-an-experiment-winner-in-one-action-2026-02-06, https://www.revenuecat.com/feature/experiments
2. **146K+ and $17B+:** Yes, both are live today. The exact labels are "146K+ Apps supported" and "$17B+ Revenue processed"; feature pages say "trusted by over 146,000 apps". Source: https://www.revenuecat.com/
3. **pLTV winners and one-action rollout:** Both confirmed, 2026-02-12 and 2026-02-06. Conditions the draft must respect:
   - a revenue primary metric
   - "enough conversion data"
   - "once the guardrails are met"
   - framed as "a forward-looking signal"
   - Experiments on Pro and Enterprise
   - a dynamic paywall showing the current Offering
   - minimum SDK versions for existing-customer tests

   Sources: https://www.revenuecat.com/changelog/release/see-predicted-12-month-ltv-winners-in-experiments-2026-02-12, https://www.revenuecat.com/changelog/release/roll-out-an-experiment-winner-in-one-action-2026-02-06
4. **Benchmarks:** Confirmed, 2026-04-13.
   - Compares against percentile benchmarks of "similar apps in the same store and category".
   - Covers 7 metrics and 11 categories over the trailing 12 months, App Store and Play Store only.
   - Available to "all RevenueCat users with eligible apps".
   - Peer-set size is not disclosed. The docs say only that benchmarks appear when there are "enough apps in a benchmark group".

   Sources: https://www.revenuecat.com/changelog/release/compare-subscription-metrics-against-industry-benchmarks-2026-04-13, https://www.revenuecat.com/docs/dashboard-and-metrics/benchmarks

#### Pages that did not load

- https://www.revenuecat.com/docs/web/web-billing/redemption-links returned 404. Used https://www.revenuecat.com/docs/web/redemption-links instead.
- https://www.revenuecat.com/docs/web/web-billing/overview returned 404. Used https://www.revenuecat.com/docs/web/overview instead.
- https://www.revenuecat.com/changelog/ loads its entries client-side and showed none, so I couldn't list every entry. Question 1 relies on the individual release pages and a targeted search.
- The /release/... and /changelog/release/... URL forms both load. Cite the /changelog/release/ form.
- The paywall charts URL is dated 2025-11-24, but the page showed November 21, 2025. The date is minor; the claim stands.

## 2026-09-26: Positioning v0.2

- Positioning v0.1 rejected after the three-agent review: the one idea
  used Superwall's owned PM-page language, "every surface" matched
  Superwall's homepage headline, the reason to believe only worked for
  existing customers, and the forecast was stated as a guarantee.
- Considered "decision confidence, calls a PM can defend". Rejected:
  it promoted one synthetic persona's concern (enterprise approvals)
  over the seven PM pain points we're designing against, and the
  framing is defensive.
- Considered revenue as the lead ("make more money", then "long-term
  revenue"). Rejected for this page: it's the brand promise and
  belongs on the homepage. A persona page translates the promise into
  the persona's job. PMs own experience and strategy, not necessarily
  the revenue number.
- Chosen: monetization is a product decision the PM can make like
  one. Three jobs mapped to the seven pain points plus a foundation.
  Revenue as the outcome.
- Process correction: positioning now derives from the persona's
  job-to-be-done and pain points first. Competitors and agents act as
  filters, not as the source.

### claim-auditor (targeted audit behind v0.2)

Seven items audited before v0.2's [PENDING] lines were filled. Only
passing claims were used; failures are listed under "Cut after audit"
in docs/positioning.md. Output below as returned.

#### Targeted claim audit: positioning v0.2, checked 2026-09-26

docs/brief.md is not a source. Rows reuse the earlier claim-auditor results where they apply. Quotes come from a fetch tool that summarises pages, so check the wording against the live page before publishing.

| # | Claim | Source URL | Verdict | Safe wording |
|---|---|---|---|---|
| 1a | Role-based permissions (collaborator roles) | https://www.revenuecat.com/docs/projects/collaborators. Six roles: Administrator, Operations, View Only, Growth, Developer, Support. Growth can edit paywalls and offerings but not app settings. "All roles and permission levels are now available on every plan" | PASS. Tier: every plan | Collaborator roles on every plan, including a Growth role for paywalls and offerings |
| 1b | Approvals before a paywall, offering or experiment change goes live | NONE. Not on the collaborators page, the audit log docs or the paywall version changelog | FAIL. Not in public docs | none |
| 1c | Audit log | https://www.revenuecat.com/docs/dashboard-and-metrics/audit-logs (Audit Logs tab under Project Settings; "sign-ins, data exports, and project modifications"); https://www.revenuecat.com/changelog/release/audit-logs-2024-07-03 ("Track who changed what in your project") | PASS, conditional. No tier stated on either page. Offering, paywall and experiment edits are not named as logged events | Audit logs track who changed what, with CSV export |
| 1d | Revert or undo for Offerings and Experiments | NONE. Closest: https://www.revenuecat.com/changelog/release/see-who-edited-each-paywall-version-and-discard-unsaved-drafts-2026-02-16. Discard lets you "revert to the last saved version", for unsaved paywall drafts only. A stopped experiment "can't be restarted" (https://www.revenuecat.com/changelog/release/roll-out-an-experiment-winner-in-one-action-2026-02-06) | FAIL. No documented revert for Offerings, Experiments or a winner rollout | none |
| 1e | Paywall version history | Same 2026-02-16 changelog, which shows "the author of each saved version" and the time | PASS. No tier stated | Paywall version history shows who saved each version, and when |
| 2a | Public docs explain how RevenueCat revenue relates to store reports | https://www.revenuecat.com/docs/dashboard-and-metrics/reconciling-with-financial-reports (App Store only, five causes); https://www.revenuecat.com/docs/revenuecat-support/general-troubleshooting (both stores: "won't align 1:1 with those stores") | PASS. The App Store has its own guide. Google Play gets only a troubleshooting note | Documented reconciliation between RevenueCat revenue and App Store financial reports |
| 2b | "One source of monetization data" | https://www.revenuecat.com/feature/charts ("Your source of truth for revenue data"); https://www.revenuecat.com/feature/web ("One source of truth for entitlements, purchase history, and analytics."). Limit: "For accounting purposes we recommend using the actual store payout reports." (general troubleshooting) | PASS, conditional: analytics scope only. FAIL if read as payouts, finance or accounting | One source of truth for entitlements, purchase history and analytics |
| 2c | RevenueCat uses "source of truth" wording, and for what scope | Charts: revenue data "across subscriptions, one-time purchases, and even your in-app advertising". Web: entitlements, purchase history, analytics. https://www.revenuecat.com/docs/offerings/virtual-currency/faq/balance-source-of-truth covers virtual currency balances (search result only, not fetched) | PASS | Your source of truth for revenue data (Charts page wording) |
| 3a | Experiments work on web paywalls | https://www.revenuecat.com/feature/web ("Same visual editor, same A/B tests, same targeting rules as mobile"); https://www.revenuecat.com/blog/company/paywalls-on-the-web, Dec 31, 2025 ("Experiments work the same way they do on mobile") | PASS, conditional. Marketing pages only, see 3b | A/B test web paywalls with the same tools as mobile |
| 3b | Web experiments are documented (docs or changelog) | NONE. https://www.revenuecat.com/docs/tools/experiments returns 404, so there is no non-v1 doc and the v1 docs are the live ones. https://www.revenuecat.com/docs/tools/experiments-v1/configuring-experiments-v1 lists mobile SDKs only. https://www.revenuecat.com/docs/web/paywalls does not mention Experiments or Targeting: with no offering passed, it shows the "current" offering. https://www.revenuecat.com/docs/web/overview mentions only "A/B testing and experimentation with different purchase flows" as a use case. No changelog entry found | FAIL for anything beyond 3a: predicted LTV, existing-customer tests, results or SDK minimums on web | none |
| 4a | Targeting conditions | https://www.revenuecat.com/docs/tools/targeting. Exact names: Custom attributes, Country, App, App Version, RevenueCat SDK Version, Platform. "Targeting is available on Pro and Enterprise plans." | PASS. Tier: Pro and Enterprise. There is no Store condition: Platform covers it ("e.g. iOS, watchOS, Android"). Placements are not a condition: "conditions are for defining who the customer is". Country means storefront, or geolocation otherwise. Web Billing: App Version is "Not sent" | Target paywalls by country, platform, app, app version, SDK version or custom attributes |
| 4b | "Paywall Rules" as audience targeting | https://www.revenuecat.com/changelog/release/edit-paywall-rules-more-clearly-2026-07-30 ("change the visibility of certain components") | FAIL if used as a synonym for Targeting. Rules change components within one paywall | none |
| 5a | "Refund Handler" | NONE. The name is not used on any page checked. The feature is called Refund Control: https://www.revenuecat.com/feature/refund-control, https://www.revenuecat.com/docs/customers/refund-control | FAIL on the name | Refund Control |
| 5b | Refund Control answers store refund requests using usage data and your preference | Feature page: "handle refund requests across the App Store and Google Play", "to prevent auto-approved refunds". Docs: Apple consumption requests, and Google via `orders.reviewrefund`. Policies: Prefer full refund, Prefer no refund, Send consumption data only, Do not respond to refund requests. It started as an Apple-only release: https://www.revenuecat.com/changelog/release/handling-refund-requests-consumption-requests-2024-11-13 | PASS. Stores: App Store and Google Play. No tier stated, no beta label. Consent caveat: "Enabling consumption data sharing confirms that you obtained consent from your Customers." The store makes the final decision | Refund Control sends Apple and Google usage data and your refund preference |
| 6 | Floga made six figures before its app was live | https://www.revenuecat.com/customers/floga: "Generated $120K+ in one day of pre-launch lifetime memberships via RevenueCat Web Billing". Headline: "made six figures in one day". "With the app still in development" (search snippet of the same page, not fetched) | PASS. Scope: one day of pre-sold lifetime memberships on Web Billing, not subscription revenue. Do not reuse "commission-free" or the "30%" quote: store-fee claims are not universal | Floga made $120K+ in one day of pre-launch lifetime memberships |
| 7a | Paywalls has a visual editor | https://www.revenuecat.com/feature/web ("Same visual editor"); https://www.revenuecat.com/pricing/ ("Native and remotely configurable paywall editor, pre-built templates") | PASS. No tier stated for the editor. Still needs RevenueCatUI and minimum SDK versions (iOS 5.27.1+, Android 8.19.2+) | Design paywalls in a visual editor, starting from pre-built templates |
| 7b | AI paywall generation is public | https://www.revenuecat.com/changelog/release/build-and-edit-paywalls-with-ai-2026-07-15 ("The Paywalls AI Editor is now generally available"; "the default starting point when creating a paywall"); https://www.revenuecat.com/feature/paywalls ("Show it or describe it. Then let AI build it.") | PASS. Generally available since 2026-07-15. No beta label, no tier stated | Start from a prompt or screenshot, and the AI Editor builds the paywall |

#### Note: item 1, rollout controls

Two of the four controls are public: collaborator roles, on every plan, and audit logs, with no tier stated. Approvals and revert or undo for Offerings and Experiments do not appear in public docs. The closest thing to revert is in the paywall editor: it shows who saved each version and lets you discard an unsaved draft. Experiments are stopped or rolled out by hand. A stopped test "can't be restarted", and no docs describe undoing a winner rollout. The audit log docs name sign-ins, exports and "project modifications", but they do not say by name that offering, paywall or experiment edits are logged. So the page can give enterprise a partial governance answer: role-based control over who can change paywalls and offerings, an audit log of who changed what, and rollouts that a person triggers. It cannot claim approvals or rollback. The earlier Pillar 1 proposal ("under the roles, approvals, audit trail and rollback your team sets") fails on two of its four terms. Use "under the roles your team sets, with an audit log of who changed what" instead, and send approval and rollback questions to sales. Before using audit logs as proof, ask RevenueCat whether they record Offering and Experiment edits, and on which tier.

#### Note: item 2, revenue reconciliation

RevenueCat publishes reconciliation guidance, but it steers finance teams away from RevenueCat. The App Store guide lists five causes of difference: transaction date vs settlement date, calendar months vs fiscal months, purchase-date vs bank exchange rates, estimated tax and commission, and refund dating. It tells readers to "Rely on Apple's financial reports for accurate payout data" and for "all accounting use cases". The general troubleshooting page covers both stores. It says RevenueCat "doesn't pull data from App Store or Google Play reports directly", and that Google Play counts free trials as active subscribers while RevenueCat does not. There is no dedicated Google Play reconciliation guide. RevenueCat's own "source of truth" wording covers revenue analytics on the Charts page, and entitlements, purchase history and analytics on the Web page. So the page can call RevenueCat the source of truth for monetization analytics across stores, with documented reconciliation to App Store reports. It must not call RevenueCat the financial record, or say it replaces store payout reports. A finance section should say what RevenueCat is for ("trend analysis, real-time insights, and estimating future earnings") and point to store reports for payouts.

#### Pages that did not load

- https://www.revenuecat.com/docs/tools/experiments returned 404. There is no non-v1 Experiments doc at that path.
- https://www.revenuecat.com/docs/platform-resources/apple-platform-resources/handling-refund-requests returned 404, though search still lists it. Used https://www.revenuecat.com/docs/customers/refund-control instead.
- https://www.revenuecat.com/docs/web/revenuecat-billing/web-paywall-links returned 404. Used https://www.revenuecat.com/docs/web/paywalls and https://www.revenuecat.com/docs/web/overview instead.

### pm-critic on v0.2

Note: pm-critic ran in parallel with the log update above and read
the log before the claim-auditor section was appended. Its point that
the "Cut after audit" source trail is broken no longer applies.

#### Solo PM (4 people, $30K MRR)

**Would I say it?** No. At four people everything is a product decision, and most of them are cash decisions too. Nobody on my team argues otherwise, so the line wins an argument I'm not having. "Make it like one" doesn't tell me what you sell. The one idea is my first screen and I'd leave there. What I actually type in Slack: "Can we try annual-first on the paywall without waiting for the next build?" The only v0.2 line that sounds like me is buried in Who it's for: "they feel it most when they can't move."

The tension loses me too. It says pricing is the hardest thing to change. Then the statement promises paywalls, packaging and targeting, and pricing quietly disappears. I change prices in App Store Connect with no release. What needed a release was which products the app shows. Say that, or I'll assume you don't know how my setup works.

**What matters, what I'd skip.** Job 1, by a distance. The visual editor, the templates and the AI Editor are the only proof here I can picture using this week. But "without an app release" is stated flat. The auditor's v0.1 fix, "once your app shows RevenueCat paywalls", didn't make it into v0.2. My first change means an SDK update, the paywall UI package and a release. Say "one release, then none" and I'll believe the rest. Say "no release" and I find out on day one that it's false.

Skip Job 2 for now. I do care about churn, but nothing says I'll ever see the forecast. "Once guardrails are met": which guardrails, and how many weeks at my traffic? Your audit notes tie the LTV prediction accuracy figure to apps with at least 2,000 paid subscriptions. v0.2 doesn't say whether the Experiments forecast has a floor like that. And short-term conversion pays payroll. I'll take a 12-month signal if it shows up in weeks.

Skip most of Job 3. I have one app, so targeting by app and SDK version is noise. Web is tempting for the fees, but Funnels with a checkout step need Redemption Links and an app update. "In the app or on the web" reads like a toggle, and it's actually a sprint. The Foundation is what I probably already use RevenueCat for, so it's no reason to do more.

**What stops me.** The price in dollars at $30K MRR, with Experiments and Targeting on. Open risks says "the page can't answer it." Your pricing page is public, so not linking it is a choice. If I'm already a customer, the question is whether this comes with what I pay today or is an upsell, and v0.2 can't tell me. It never says which plan Experiments is on. And "(Pro and Enterprise)" in Job 3 could apply to all targeting or only to custom attributes. Superwall explains its pricing model in one sentence. You tell me 146,000 apps trust you.

#### Growth PM (60 people, runs experiments)

**Would I say it?** No, and I'd actively avoid it. Post "monetization is a product decision" in #growth and finance replies "and a finance one", and they'd be right. It's a turf claim, not an insight. What I'd write: "We're not calling this on trial starts. Wait for the 12-month number." If "make it like one" means a hypothesis, a control and a readout, I'd sign that part, but the line doesn't say it.

The tension describes a team less mature than mine. We stopped judging on short-term conversion years ago, and we pull D30 and D90 by variant from the warehouse. What I'd pay for is time, not the lesson: a 12-month signal while the test is still running. v0.2 never presents the forecast as speed. I'd read past the first screen only to find Job 2.

**What matters, what I'd skip.** Job 2, and within it only the predicted 12-month LTV line. The rest of its proof doesn't match its pains:
- "Attribution blind spots" is backed by Funnels UTM tracking. That covers web funnels only. My blind spots are SKAN and the MMP.
- "Late detection of monetization issues" is backed by paywall charts. A chart doesn't detect anything. Is there an alert? Not stated.
- "LTV prediction" and "predicted 12-month LTV" are listed as two proofs. Is that one model or two? If two, which do I trust?

The claim I don't buy is "Long-term value is how user value shows up in the numbers." LTV is what users pay over time, not what they value. A variant that hides the monthly plan can win on LTV and still be a worse product. It gets worse: a 12-month horizon ends about when an annual subscriber first renews. On annual versus monthly, the test I run most, the forecast sees monthly churn in full and annual renewal barely or not at all. Your tension opens with exactly that question, whether users stay, and v0.2 doesn't say how the model handles it.

Two more problems. "Web paywalls A/B tested using the same tools as mobile" sits next to a Cut list saying predicted LTV isn't claimed for web. So on web I get the tools minus the only one I want. And "a 12-month forecast per variant, where Superwall shows proceeds to date" beats exactly one vendor. Your own competitor-watch says Adapty and Apphud already forecast inside the test. If I've evaluated Adapty, that bullet makes you look uninformed.

Skip Job 1, because we already change paywalls through remote config. I only care about the Foundation if its numbers reconcile. Job 3 matters to me for a reason v0.2 misses. Per the 2026-02-06 changelog, rollout can create a targeting rule, so a winner ships to the segment where it won. v0.2 files one-action rollout under Job 1 as a speed feature. For me it's the link from Job 2 to Job 3.

**What stops me.** I can't check the forecast:
- Nothing compares predicted against realized 12-month revenue.
- Nothing says what it assumes for a price or plan with no history.
- There's no holdout. Rollout stops the test, the Cut list says a stopped experiment can't be restarted, and nothing documents undoing a rollout. The control group is gone at the moment I'd need it to check the forecast.

Still open from v0.1: which revenue the forecast uses (gross, net of store fees or net of refunds), warehouse export of assignments and results, and running next to Statsig or Amplitude without assigning users twice.

#### Enterprise PM (media company)

**Would I say it?** No. Here monetization is a commercial decision. Consumer revenue and finance set the offer: price points, bundles, the promo calendar. My job is to make the app carry that offer well. If I said "monetization is a product decision" in the subscriptions steering meeting, the head of consumer revenue would correct me and legal would ask who signed off. What I'd actually write: "Can the app run the Black Friday offer the same day as web, without a release, once legal has approved the copy?" That sentence has a date, a channel and an approval in it. v0.2 has none of the three.

**What matters, what I'd skip.** The Foundation, if it holds for us. "Entitlements across platforms" is the job: someone who subscribed on the web has to be unlocked in the app. But our web subscriptions already run on a billing and identity stack we won't replace, and v0.2 only names RevenueCat's own Web Billing. Does it grant entitlements for subscriptions billed elsewhere? Not stated. Second is Job 3. Targeting by country (our editions) and custom attributes (print subscribers, registered readers) is real for us, if our CDP can push those attributes in. Not stated.

Skip the AI Editor. To brand and legal, "builds a paywall from a prompt or screenshot" means an unreviewed paywall with price and renewal terms on it. Job 2 is interesting, but the Foundation now limits RevenueCat's numbers to "analytics scope, not payouts or accounting". A forecast in a revenue figure finance doesn't recognize loses the meeting before anyone reads it. And much of our paywall is a metered article wall, not a subscription screen. Does "paywall" here cover a meter? Not stated. I assume not, which shrinks Job 1 to one screen in my app.

**Do I feel addressed?** No. This is a startup page with one enterprise clause, and I'd stop reading at Job 1.
- "from solo founder-PMs to enterprise product teams" is the only line written to me, and it sits in the audience definition, not the pitch.
- "Enterprise" appears once in the proof, as a plan tier gating custom attributes.
- "they feel it most when they can't move": I can move. Our release train ships weekly. My bottleneck is sign-off, and moving without it causes an incident.
- The page pairs "Change it without a release" and "one-action winner rollout" with a Cut list admitting that approvals and revert aren't documented and a stopped experiment can't be restarted. v0.1's review asked for a governance answer. v0.2 deleted "yourself" and left nothing in its place. On a vendor page, I read silence as no.
- The only customer proof is Floga: $120K+ in one day of pre-launch lifetime memberships. A launch spike on lifetime deals is the opposite of a recurring subscription business.
- "For existing customers: no second vendor". I'm not one. For me, you are the second vendor: a security review, a DPA, procurement.
- "All three jobs plus the foundation on one platform". Pitches for putting everything on one platform make our architects nervous. They want to know what you replace and what you plug into.

What does work: "the store makes the final call" and "analytics scope, not payouts or accounting". Honest limits are what get past legal, so keep both on the page. But Refund Control sends usage data to Apple and Google on our behalf, and privacy will ask what data, under what consent. Not stated.

Your own source trail is also broken. "Cut after audit" cites a claim-auditor table under "Positioning v0.2" in docs/iteration-log.md, and the log has no such section. If a claim can't be traced to its source, legal won't sign off the page.

**What stops me.** Who can change a paywall that millions of subscribers see, and how we undo it. That means roles and permissions, SSO, an audit log, a draft-and-review step, scheduled changes and rollback. v0.2 answers none of these, and the Cut list confirms two aren't in public docs. If the page won't say, I assume the answer is no and never take it to security.

#### Where the three disagree

- **All three reject the one idea, for opposite reasons.** For Solo it's a truism that doesn't say what you sell. For Growth it's a turf claim that starts a fight with finance. For Enterprise it's simply wrong where monetization is a commercial decision. The one line that lands, "they feel it most when they can't move", lands only for Solo. Enterprise reads the same line as a description of an incident.
- **The page order is Solo's priority list.** Solo wants Job 1. Growth wants Job 2 plus rollout to a segment. Enterprise wants the Foundation plus governance. Opening on "change it without a release" wins Solo, bores Growth and alarms Enterprise. That's the same split v0.1 had, minus "yourself".
- **"In the app or on the web" means three different things.** For Solo it's a Redemption Links sprint to save on fees. For Growth it's margin, but without the forecast, which isn't claimed for web. For Enterprise it's an existing web billing stack v0.2 never mentions. The honest caveats split them too: Growth and Enterprise trust the carefully limited lines most, and Solo skips them.

#### The single change

The worst served is the Enterprise PM, for the second version running. v0.1's single change was only half done: "yourself" is gone, nothing replaced it, and the Cut list now records that approvals and revert aren't documented.

The change: give Job 1 a governance proof line that says who can change what, and audit it like every other line. The candidates are dashboard roles and permissions, SSO, security certifications and a change history. Claim only the ones RevenueCat publishes. For what isn't documented (approvals, scheduled changes, rollback), put an explicit route on the page instead of silence, worded so it doesn't imply the features exist. For example: "How changes are approved and rolled back at your scale: talk to our team."

It costs Solo nothing, because the solo PM is the admin. Growth gets its reversibility question on the record. If the audit finds no roles or change history at all, that is the finding: stop pitching one-action rollout to enterprise visitors until sales has an answer.

### competitor-watch on v0.2 (competitive-scan.md only, no fetching)

Half of this is Superwall's positioning. The supporting frame, where the PM owns pricing, packaging, the paywall and access control, says the same thing Superwall's PM page already OWNS. The headline, "Monetization is a product decision", is not owned or claimed by any competitor in the scan.

#### Where the closest equivalents sit

| Competitor | Closest equivalent, per the scan | Class | Where |
|---|---|---|---|
| Superwall | "Own the monetization roadmap end to end without a release or an engineering queue" | OWNED | PM page (/solutions/product-managers). Scan does not say headline or body |
| Qonversion | "Transform your product management." | OWNED (weak match) | PM page (/for-product-managers), which the scan calls generic. Headline status not stated |
| Purchasely | "Your conversion problem is not one screen." | CLAIMED, caveat | /conversion. Scan does not give the page type. Not aimed at PMs |
| Adapty | "Make financial decisions on accurate revenue analytics." | CLAIMED, caveat | Homepage or /performance-analytics. Scan does not say which. No PM page |
| Apphud | "remote product management on paywalls" | CLAIMED, caveat | Comparison table at /revenuecat. Scan does not define the term |
| Adapty, Apphud | Pick revenue winners inside experiments | PARITY | Competitor docs, per the scan's corrections |
| Build in-house | "Engineering's own roadmap" | None | Objection, no page |
| Apple / Google native | "Free, built in" | None | Objection, no page |

- The scan's positioning column has no quotation marks, so none of these lines can be confirmed as verbatim page copy.
- Superwall is the only direct hit: a PM page, aimed at PMs, about owning monetization. Any line built on "PMs own monetization" is a positioning conflict.
- Qonversion holds a PM page, but according to the scan it says nothing about monetization being a product decision. It does not block the headline.
- Purchasely treats conversion as a journey problem (how much of the app it covers), not a question of who decides. Adjacent, not equivalent.
- Adapty uses "decisions" but calls them financial, and it talks to developers, marketers and app owners. That is the opposite framing and a useful contrast: RevenueCat says product, Adapty says finance.
- Apphud's line is a row in a comparison table used to attack RevenueCat, not a position. If it means remote control of which products a paywall shows, it overlaps "packaging" in the supporting frame, not the headline. The scan marks RevenueCat's supposed gap here as unverified.
- PARITY on revenue winners means "decide on revenue, not clicks" is not proof only RevenueCat has. It does not block the claim.

#### Same claim as Superwall, or different?

- Headline: a different claim. Superwall's claim is about independence: who acts (the PM, alone) and what gets removed (the release, the engineering queue). "Monetization is a product decision" says what monetization is and implies a standard for deciding it. It removes nobody.
- Supporting frame: the same claim in different words. "Part of the product experience a PM owns and is responsible for" restates "Own the monetization roadmap end to end". "Own" is the key verb in both.
- Second sentence: undecided. "Make it like one" means nothing until the page proves it. If the proof is "change the paywall without engineering and test it", it becomes the promise every vendor makes, which the scan says Superwall "says best". If the proof is the decision standard (what counts as a win, how it rolls out, what it is compared against), it is a different claim.

#### Copy risk

- "Own", "monetization roadmap" and "end to end" in one line reads as Superwall's PM page. Drop "owns" from the supporting frame.
- "No app release" is fine alone. Put it next to an engineering-removal phrase inside an ownership line and it mirrors Superwall's "without a release or an engineering queue".
- "Not just the paywall" or "not one screen" is Purchasely. Listing pricing, packaging, paywall and access control is safe. Framing that list as "more than a paywall" is not.
- "Transform" plus "product management" is Qonversion's PM page.
- "Make decisions on accurate revenue data" is Adapty's sentence structure. "Make it like one" is safe. Do not extend it with "on accurate revenue data".
- The headline sentence matches nothing in the scan. The scan covers only the pages it lists, so it cannot rule out the phrase appearing elsewhere.

#### The angle Superwall cannot claim

- Define "like one" as a decision standard on one system: judge a change on predicted 12-month LTV, roll out the winner in one action, and compare the result against Benchmarks. All of it runs on the billing data engineering has already integrated (scan, "What RevenueCat can claim alone", points 1 and 2).
- Superwall cannot say "no new vendor, no migration", because it calls itself "a complete, standalone subscription platform". For apps already on RevenueCat, RevenueCat can say it.
- Predicted LTV alone is not unique. Adapty's signature claim is a 12-month LTV and revenue prediction. The scan does not say where that appears, so the best classification is CLAIMED. The claim is the combination on one system, not the forecast.
- Limits from the scan:
  - The forecast is a signal, not a promise.
  - It only applies with a revenue primary metric, once guardrails are met.
  - Experiments is on Pro and Enterprise.
  - Never say "no new SDK".
  - "No app release" only holds if the app already reads offerings from RevenueCat.

#### Angles we are missing

- Purchasely covers the whole first session, not only the paywall. The supporting frame stops at the paywall. The scan cannot establish whether RevenueCat can claim onboarding.
- Superwall has "agents that surface the next test". Choosing what to test next is part of making a product decision. The scan shows no RevenueCat equivalent. Benchmarks is the closest thing the scan supports.
- Risk: "pricing" leads the supporting frame, and Apphud's table says RevenueCat lacks advanced pricing A/B testing. The scan marks this unverified. Do not lead with pricing until it is checked.
- Risk: a page that pushes PMs to experiment more makes Superwall's pricing attack stronger (RevenueCat charges a fee on revenue the experiments did not earn). The scan rates that attack fair and says nothing on the page answers it.

#### Verdict

- Keep the headline. Nobody in the scan owns "monetization is a product decision". Superwall owns "PMs own monetization", which is close but not the same claim.
- Rewrite the supporting frame. "A PM owns and is responsible for" is Superwall's PM-page claim in different words. Replace the ownership language with the decision standard.
- Prove "make it like one" with one system: predicted LTV winner, one-action rollout, Benchmarks, and no new vendor for existing customers. If the proof is "without engineering" instead, it is the promise every vendor makes, and Superwall makes it best.

Source: docs/competitive-scan.md (only file read, no web access used).

## 2026-09-26: Positioning v0.3 (locked)

- v0.2 reviewed. Structure held: each archetype described one of the
  three jobs unprompted. The umbrella phrase failed as customer copy.
  Unowned is not the same as resonant. Kept as an internal principle;
  hero line deferred to copy.
- Governance added as a proof line for enterprise, not as the lead.
  Consistent with rejecting "defend": proof for one audience is not
  the promise for all.
- Product name corrected to Refund Control, its public name.
- Archetype sentences saved as copy inputs, labeled synthetic.

### Conditional edits, resolved by the audit below
- Realized-LTV check in Job 2: not added. Item 1 failed on checking a
  forecast; seeing realized and predicted side by side is not a check.
  Stays under product gaps.
- SSO: added to the governance proof line, Enterprise only.
- Proactive alerts: partly passed. Revenue anomaly email alerts exist
  in beta, so the product gap was narrowed to alerts beyond revenue.
  Not added as a Job 2 proof.
- Pricing: one-line statement added to notes for architecture.

### Also changed in v0.3
- "owns" removed from The tension as well as Who it's for. It was the
  word competitor-watch flagged as Superwall's.
- Who it's for: "They're responsible for" became "They lead", to avoid
  repeating "responsible for" in one sentence.
- Job 3: "(Pro and Enterprise)" moved next to Targeting, since it
  applies to all of Targeting, not only custom attributes.
- Open risks: the pricing line now reflects the pricing statement
  instead of saying the page can't answer pricing at all.

### claim-auditor (targeted audit behind v0.3)

#### Targeted claim audit: positioning v0.3, checked 2026-09-26

docs/brief.md is not a source. Rows reuse earlier claim-auditor results where they apply: the Experiments and Targeting tiers, and the Prediction Explorer accuracy condition. The fetch tool summarises pages, so check quoted wording against the live page before publishing.

| # | Claim | Source URL | Verdict | Safe wording |
|---|---|---|---|---|
| 1a | A PM can see predicted and realized LTV for the same cohort | https://www.revenuecat.com/docs/dashboard-and-metrics/charts/prediction-explorer. It lists Realized LTV, Predicted LTV, Realized Revenue and Predicted Revenue. Predicted LTV is realized revenue "plus the additional revenue that we predict will be generated". Predicted cells sit "on the right side of the diagonal divider in the table" | PASS, conditional. This is realized revenue to date plus a forecast of the rest, in one table. It does not check an earlier forecast | See realized and predicted LTV for each cohort in one chart |
| 1b | A PM can check a past LTV prediction against what the cohort later realized | Same Prediction Explorer page. Accuracy comes only from RevenueCat's own testing: "In testing our prediction model, we've observed that" ">75% of Products with at least 2,000 paid subscriptions". https://www.revenuecat.com/docs/dashboard-and-metrics/charts/cohort-explorer has realized metrics only (Realized LTV, Realized LTV / Customer, Proceeds and others) and never mentions predictions. Neither page links to the other | FAIL. No page describes storing a past prediction or comparing it to the realized outcome | none |
| 1c | A PM can compare an experiment's predicted 12-month LTV with what happened after the test or after rollout | https://www.revenuecat.com/changelog/release/see-predicted-12-month-ltv-winners-in-experiments-2026-02-12 calls it "a forward-looking signal while the experiment is still running". It does not say whether the prediction stays visible after the test stops. https://www.revenuecat.com/docs/tools/experiments-v1/experiments-results-v1 describes no holdout, no post-rollout measurement and no check of a prediction | FAIL | none |
| 1d | Experiment results keep maturing after the test stops | Experiments results docs (above): "results continue to update for the next 400 days so Realized LTV can mature". The metrics are Realized LTV per customer and per paying customer | PASS, conditional. Only customers enrolled during the test are covered. The docs say "stop". That this also applies after "Roll out winner" is inferred from the 2026-02-06 changelog, where rollout stops the test | Realized LTV per variant keeps updating for 400 days after a test stops |
| 2a | Pro is free up to $2,500 MTR, then 1% | https://www.revenuecat.com/pricing/: "Pay nothing for up to $2,500 in monthly tracked revenue." "Then pay 1% of what you track". https://www.revenuecat.com/docs/welcome/set-up-revenuecat/account-management: "1% of your MTR tracked (before store commission and taxes)". Worked example: $2,600 MTR, "a charge of $26" | PASS. Above $2,500, the 1% applies to all MTR, not just the amount over $2,500 | Free up to $2,500 in monthly tracked revenue, then 1% of all tracked revenue |
| 2b | Experiments and Targeting are on the Pro plan | Pricing page lists "A/B testing with remote configuration" and "Segmentation tools to target paywalls" under "All of RevenueCat's features". Docs (earlier audit): Experiments "available to Pro & Enterprise customers", and Targeting "available on Pro and Enterprise plans". The pricing page shows only two plans | PASS. The pricing page uses generic names, not "Experiments" or "Targeting" | Experiments and Targeting are included on the Pro plan |
| 2c | Enterprise pricing | Pricing page: "Custom Pricing & Usage", CTA "Talk to us" | PASS | Enterprise: custom pricing |
| 3a | RevenueCat alerts on revenue anomalies | https://www.revenuecat.com/docs/dashboard-and-metrics/anomaly-detection-notifications: "Anomaly Detection Notifications are currently in beta". It offers Custom Threshold Alerts and Auto Detection Alerts. Alerts are "delivered to your registered email address", and "Anomaly checks are performed twice daily". https://www.revenuecat.com/feature/alerts-app-health: "Receive email alerts about potential revenue anomalies for your projects." | PASS, conditional. Beta, revenue only, email only, checked twice a day. No tier stated. The feature page has no beta label but the docs do, so follow the docs | Email alerts on revenue anomalies, by custom threshold or auto-detection (beta) |
| 3b | Alerts on other metrics (conversion, churn, trials, paywall conversion), or anomaly alerts sent to Slack | Same two pages. Only revenue is named, and anomaly alerts go by email only | FAIL | none |
| 3c | Slack, Discord and webhook "alerts" on renewals, cancellations and billing issues | Feature page: "Get alerts when renewals fail, subscribers cancel, billing issues arise". "Connect RevenueCat to Slack, Discord, or any custom endpoint via webhooks." Pricing page: "Real-time event notifications via webhooks" | FAIL as monitoring of monetization issues. These forward single events, with no threshold or trend detection. PASS as an event feed | Send subscription events, like failed renewals, to Slack or webhooks |
| 4 | Dashboard SSO | https://www.revenuecat.com/docs/projects/sso: "SSO is currently available for customers on an Enterprise plan." Protocols: "SAML or OpenID Connect (OIDC)". Configured through WorkOS and enabled by your account manager. "Users with your organization's email domain will be required to sign in through SSO." Identity provider groups map to RevenueCat roles | PASS. Enterprise only. SSO is not on the pricing page. No beta label | SAML or OIDC single sign-on on the Enterprise plan |

#### Pricing sentence for near a CTA

"Free up to $2,500 in monthly tracked revenue, then 1% of all tracked revenue, with Experiments and Targeting included."

- Keep "all". Once past $2,500, the 1% applies to the whole amount, not only the excess. For example, $2,600 is billed $26.
- If there is room for a footnote, add: "Monthly tracked revenue is measured before store commission and taxes."
- Do not turn a persona's MRR into a dollar fee on the page. MTR counts purchases and renewals in the month, including non-subscription products. That is not MRR.
- I did not check legacy plans for existing customers. https://www.revenuecat.com/blog/company/navigating-revenuecats-new-pricing-for-existing-users exists but was not fetched. So the page cannot yet say whether an existing customer's current plan includes these tools.

#### Note: item 1, forecast against realized

- **First half, cohorts:**
  - Prediction Explorer shows a cohort's realized revenue to date next to the predicted remainder, in one table.
  - That is a comparison for the same cohort at one point in time. It is not a way to check a past forecast. No page says old predictions are kept so they can be compared with the realized outcome.
  - The only accuracy evidence is RevenueCat's own test result, which comes with conditions.
  - Cohort Explorer shows realized metrics only, and no page connects it to Prediction Explorer.
- **Second half, experiments:** nothing documents a check of the forecast.
  - The predicted 12-month LTV is described only while a test runs.
  - Realized LTV per variant keeps updating for 400 days after the test stops. That is longer than 12 months, so a PM could write down the forecast at rollout and compare it by hand a year later. No page describes this, and it is a workaround, not a feature.
  - There is no holdout after rollout. Only customers enrolled during the test keep maturing.
  - Do not claim forecast verification anywhere on the page. This answers the Growth PM's "Nothing compares predicted against realized 12-month revenue", and the answer is that the gap is real.

#### Note: item 3, alerts

- The Growth PM asked whether there is an alert. Yes, but only for revenue.
- Anomaly detection emails on revenue changes, by a custom threshold or by auto-detection. It is in beta and checks twice a day.
- Nothing is documented for paywall conversion, trial conversion or churn alerts.
- Slack, Discord and webhooks forward single subscription events, such as a failed renewal. They are an event feed, not detection of monetization issues.
- If the page pairs "late detection of monetization issues" with alerts, keep it to revenue anomaly emails and include "(beta)".

#### Note: item 4, SSO

- SSO supports SAML or OIDC, on the Enterprise plan only, enabled through the account manager.
- It adds to the governance proof from the v0.2 audit: collaborator roles on every plan, plus audit logs.
- Minor difference: the SSO page lists five roles for group mapping and leaves out Operations, which the collaborators page includes. Both lists came from fetch summaries, so check before listing role names.

#### Pages that did not load

- None. The pricing page FAQ answers ("What is MTR?", "what happens when I reach $2.5k MTR?") did not render in the fetch. https://www.revenuecat.com/docs/welcome/set-up-revenuecat/account-management was used instead.
