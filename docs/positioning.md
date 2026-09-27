# Positioning: RevenueCat for Product Managers

Status: v0.3. LOCKED for architecture and copy.

## The one idea
Monetization is a product decision. RevenueCat lets product managers
make it like one.

Internal organizing principle, not page copy. All three pm-critic
archetypes rejected the phrase as customer-facing language (a truism,
a turf claim, wrong for enterprise), while each described one of the
three jobs in their own words. The structure holds. The hero line is
written at the copy stage from customer language.

## Who it's for
Product managers at subscription apps, from solo founder-PMs to
enterprise product teams. They lead product experience and strategy,
and pricing, packaging, the paywall and access control are part of the
product experience they're responsible for. They don't write billing
code, and they feel it most when they can't move.

## The tension
Pricing, packaging and the paywall sit inside the experience a PM is
responsible for, but they have been the hardest part of it to change:
tied to app releases and engineering time, and judged on short-term
conversion rather than on whether users stay.

## Positioning statement
For product managers at subscription apps, RevenueCat is the
monetization platform that lets you change paywalls, packaging and
targeting without an app release, learn which changes users value over
time rather than which converted first, and fit your offer to every
user, in the app or on the web. Trusted by more than 146,000 apps.

## Job 1: Change it without a release
- Pain: engineering bottlenecks on paywall changes
- Proof: Paywalls with remote configuration, a visual editor with
  pre-built templates, and an AI Editor that drafts a paywall from a
  prompt or screenshot (generally available since July 15, 2026),
  one-action winner rollout
- Language: "no app release", "no engineering sprint". Never "no
  engineering". Describe setup as "one release, then none": the first
  RevenueCat paywall needs the SDK, the paywall UI package and an app
  release; after that, paywall and offering changes ship without one.
- Framing: the AI Editor is a drafting tool. Enterprise teams review
  price and renewal terms before anything ships.

## Job 2: Learn what users value
- Pain: experimentation uncertainty, attribution blind spots, seeing
  monetization issues late
- Proof: Experiments with predicted 12-month LTV, a signal shown on
  revenue-metric experiments once guardrails are met. Paywall
  performance charts. LTV prediction. Funnels UTM tracking for web
  funnels.
- Framing: a variant that converts but churns didn't create value.
  Long-term value is how user value shows up in the numbers.

## Job 3: Fit the offer to every user, wherever they buy
- Pain: one-size-fits-all monetization, app store commission pressure
- Proof: Targeting (Pro and Enterprise) by country, platform, app, app
  version, SDK version or custom attributes, Funnels with branching
  logic, Web Billing, with web paywalls A/B tested using the same
  tools as mobile (RevenueCat Web feature page; not yet in the
  Experiments docs)
- Framing: the economics (fewer store fees, pre-launch revenue) are
  the outcome, not the job.

## Foundation
- Pain: platform policy volatility and refund abuse
- Proof: entitlements across platforms, Refund Control (answers App
  Store and Google Play refund requests with usage data and your
  refund preference; the store makes the final call), one source of
  truth for entitlements, purchase history and analytics (analytics
  scope, not payouts or accounting)
- Governance proof: collaborator roles on every plan, including a
  Growth role that can edit paywalls and offerings; audit logs of who
  changed what in the project; paywall version history showing who
  saved each version and when; SAML or OIDC single sign-on on the
  Enterprise plan. Do not claim approvals or revert.

## Revenue
The outcome, not the job title. This page translates the homepage
promise into the PM's job rather than restating it.
- Proof: Floga made $120K+ in one day of pre-launch lifetime
  memberships through RevenueCat Web Billing
  (https://www.revenuecat.com/customers/floga). Lifetime memberships,
  not subscription revenue. Do not reuse the page's commission-free or
  30% lines: store-fee claims are not universal.

## Why RevenueCat
- Scale: trusted by 146K+ apps (revenuecat.com)
- All three jobs plus the foundation on one platform
- A 12-month forecast per variant, where Superwall shows proceeds to
  date
- For existing customers: no second vendor
- Supporting only: Benchmarks, shipped April 13, 2026
  (https://www.revenuecat.com/changelog/release/compare-subscription-metrics-against-industry-benchmarks-2026-04-13)

## Category
Monetization platform.
- Support: RevenueCat's own Experiments page carries the section
  heading "A Complete Mobile App Monetization Platform"
  (https://www.revenuecat.com/feature/experiments, mid-page, not the
  hero or title). Claim audit 2026-09-27. Generic platform wording:
  support for the category choice, not page copy.

## Deliberate choices
- Revenue is not the lead. This is a persona page. The homepage
  carries the revenue promise; the PM page translates it into the PM's
  job.
- Never "own your monetization": Superwall's owned PM-page language.
- No "defend": negative, and not grounded in the PM's actual job.
- No autopilot: rollout is human-triggered, and human-in-the-loop is
  the category default, not a differentiator.
- "Already installed" is proof for existing customers, not the lead.
- Benchmarks support, they don't lead: uniqueness unproven, and the
  in-product feature doesn't state a dataset size.

## Open risks
- Superwall's PM page overlaps the product-ownership frame. We share
  the category idea, use different language, and win on proof.
- Pricing will come up. The one-line pricing statement covers the
  basics; Superwall's attack on charging for all tracked revenue can't
  be answered on the page.
- Unknown share of visitors are existing customers.

## Language inputs for copy (synthetic personas)
SYNTHETIC. Written by the pm-critic agent playing three archetypes in
the v0.2 review. Never present these as customer quotes, testimonials
or research findings. Use them only as input for the copy stage.

- Solo PM (Job 1): "Can we try annual-first on the paywall without
  waiting for the next build?"
- Growth PM (Job 2): "We're not calling this on trial starts. Wait for
  the 12-month number."
- Enterprise PM (Job 3): "Can the app run the Black Friday offer the
  same day as web, without a release, once legal has approved the
  copy?"

## Product gaps surfaced in PM testing
From synthetic personas (pm-critic, v0.1 and v0.2 reviews), checked
against public docs. These are questions for Product, not verified
demand.

- Approval workflow before changes go live. Not in public docs.
- Revert for offerings and experiments. Not in public docs, and a
  stopped experiment can't be restarted.
- Holdout after rollout. Not documented; only customers enrolled
  during the test keep maturing.
- Comparing forecasts to realized results. Not documented. Prediction
  Explorer shows realized and predicted LTV for a cohort in one table,
  and experiment Realized LTV keeps updating for 400 days after a test
  stops, but no page describes checking a past forecast.
- Proactive alerts beyond revenue. Revenue anomaly email alerts exist
  (beta, checked twice daily). Nothing is documented for conversion,
  trial or churn anomalies, or for anomaly alerts outside email.
- A confidence range, sample size or validation shown with the
  12-month forecast. Raised by the Growth PM in the copy v1 review.
  Checked 2026-09-27: Experiments show Chance to Win and 95% credible
  intervals for conversion metrics only (initial conversion, trial
  conversion, conversion to paying). Nothing is documented for the
  predicted 12-month LTV, so the gap stands.
- How long "enough data" takes at low traffic. Raised by the Solo PM
  in the copy v1 review. Not yet checked against public docs.

## Notes for architecture
- One-line pricing statement near the primary CTA: "Free up to $2,500
  in monthly tracked revenue, then 1% of all tracked revenue, with
  Experiments and Targeting included." Keep "all": above $2,500 the 1%
  applies to the whole amount. Optional footnote: "Monthly tracked
  revenue is measured before store commission and taxes." Enterprise:
  custom pricing. Source: https://www.revenuecat.com/pricing/. Not
  checked: legacy plans for existing customers.
- A governance proof block for enterprise readers, built only from the
  Foundation's governance proof line. No approvals or revert.

## Cut after audit
Sources for every filled line: the claim-auditor tables in
docs/iteration-log.md, 2026-09-26, under "Positioning v0.2" and
"Positioning v0.3".

- "Refund Handler": not a RevenueCat name on any page checked. The
  feature is Refund Control, and the Foundation line uses that name.
- "One source of monetization data" as a finance claim: RevenueCat's
  own reconciliation guide tells teams to rely on store reports for
  payouts and accounting. Kept at analytics scope only, in
  RevenueCat's own wording.
- Web Experiments beyond the feature page: no docs or changelog cover
  web experiment results, predicted 12-month LTV on web, or web SDK
  requirements. The Experiments docs (v1) list mobile SDKs only. Job
  2's predicted LTV proof is not claimed for web.
- Approvals and revert for Offerings and Experiments: not in public
  docs. A stopped experiment can't be restarted, and no docs describe
  undoing a winner rollout.
- Realized-LTV check of a forecast (v0.3 audit, item 1): no page
  describes comparing a past prediction, or an experiment's forecast,
  with what the cohort later realized. Not added to Job 2.
- Alerts on metrics other than revenue, or anomaly alerts via Slack
  (v0.3 audit, item 3): not documented. Slack, Discord and webhook
  notifications forward single subscription events; they are an event
  feed, not detection of monetization issues.
