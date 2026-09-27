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
