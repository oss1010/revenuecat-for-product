# Positioning: RevenueCat for Product Managers

Status: DRAFT v0.2. Under review.

## The one idea
Monetization is a product decision. RevenueCat lets product managers
make it like one.

## Who it's for
Product managers at subscription apps, from solo founder-PMs to
enterprise product teams. They're responsible for the product
experience and strategy, and pricing, packaging, the paywall and
access control are part of that experience. They don't write billing
code, and they feel it most when they can't move.

## The tension
Pricing, packaging and the paywall sit inside the experience a PM
owns, but they have been the hardest part of it to change: tied to app
releases and engineering time, and judged on short-term conversion
rather than on whether users stay.

## Positioning statement
For product managers at subscription apps, RevenueCat is the
monetization platform that lets you change paywalls, packaging and
targeting without an app release, learn which changes users value over
time rather than which converted first, and fit your offer to every
user, in the app or on the web. Trusted by more than 146,000 apps.

## Job 1: Change it without a release
- Pain: engineering bottlenecks on paywall changes
- Proof: Paywalls with remote configuration, a visual editor with
  pre-built templates, and an AI Editor that builds a paywall from a
  prompt or screenshot (generally available since July 15, 2026),
  one-action winner rollout
- Language: "no app release", "no engineering sprint". Never "no
  engineering".

## Job 2: Learn what users value
- Pain: experimentation uncertainty, attribution blind spots, late
  detection of monetization issues
- Proof: Experiments with predicted 12-month LTV, a signal shown on
  revenue-metric experiments once guardrails are met. Paywall
  performance charts. LTV prediction. Funnels UTM tracking.
- Framing: a variant that converts but churns didn't create value.
  Long-term value is how user value shows up in the numbers.

## Job 3: Fit the offer to every user, wherever they buy
- Pain: one-size-fits-all monetization, app store commission pressure
- Proof: Targeting by country, platform, app, app version, SDK version
  or custom attributes (Pro and Enterprise), Funnels with branching
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
- Pricing will come up. The page can't answer it.
- Unknown share of visitors are existing customers.

## Cut after audit
Sources for every filled line: the claim-auditor table in
docs/iteration-log.md, 2026-09-26, "Positioning v0.2".

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
  undoing a winner rollout. Audited for enterprise governance; v0.2
  had no line for these.
