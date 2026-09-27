# Competitive scan: RevenueCat for Product Managers

Sourced from competitor pages, September 2026, and corrected against
competitor docs and RevenueCat's changelog on 2026-09-26. Ground
truth for the competitor-watch agent.

## The set

Five direct vendors plus two non-vendor alternatives that a PM
actually weighs.

| | Core positioning to PMs | Hero feature | Supporting | Signature claim | Scale |
|---|---|---|---|---|---|
| **Superwall** | Own the monetization roadmap end to end without a release or an engineering queue. Has a dedicated PM page, which lists web checkout among the things a PM runs alone. Homepage positions it for mobile and web apps | Paywall editor plus campaign experiments | Web checkout, audience targeting, agents that surface the next test, SQL query API | Infrastructure free at any scale; billed only on revenue through a Superwall paywall | $1.6B+ annual subscription revenue, 10,000+ apps (homepage, 2026-09-26) |
| **Adapty** | Make financial decisions on accurate revenue analytics. No PM page; roles are developers, marketers, app owners | LTV and revenue prediction | Flow and paywall builder, AI generator, Autopilot, refund saver, payout acceleration, Apple Ads manager | ML model predicting LTV and revenue 12 months out | 30,000+ apps, $5B revenue tracked (self-reported, homepage, 2026-09-26) |
| **Purchasely** | Your conversion problem is not one screen. Owns the whole first session, not just the paywall | Onboarding journeys plus personalized paywalls | Web2app funnels, win-back, Figma import, Pulse Design AI, native rendering | TomTom +85% MRR, Headspace +103% adoption | Enterprise and media: Headspace, Busuu, Le Monde, The Times, Wattpad |
| **Qonversion** | Transform your product management. Generic PM page | No-code A/B testing | Remote configs, analytics, CRM, Apple Search Ads | $1B+ served revenue, 99.99% uptime | Smallest of the direct set |
| **Apphud** | The number one RevenueCat alternative. Explicitly positioned against them | Revenue data accuracy | Visual editor, Flows, rules and push, win-back refunds | 99.9% data accuracy vs App Store Connect | Small |
| **Build in-house** | Zero vendor fee, full control | Engineering's own roadmap | None | "We already have engineers" | The default |
| **Apple / Google native** | Free, built in | Custom product pages, store experiments | StoreKit 2 | It's already there | Universal |

Adjacent, not table rows but real objections: Statsig, Amplitude and
Mixpanel. A PM at a scaled app often believes their existing
experimentation and analytics stack already covers this. It does not,
because none of them see store-level revenue truth, but the belief is
a live objection.

## How they attack RevenueCat

| Attack | Still true? |
|---|---|
| **Superwall:** RevenueCat charges on all tracked revenue, so experiments carry a fee on revenue they didn't earn. Also claims migration off RevenueCat has been the dominant direction | **Fair.** The sharpest live attack, and it is about pricing model rather than capability. Nothing on the page can answer it |
| **Adapty:** front-loads testimonials from teams who migrated off RevenueCat | Real, unquantified |
| **Apphud:** comparison table marks RevenueCat as lacking LTV predictions, web2app, remote product management on paywalls, and advanced pricing A/B testing | **Wrong on LTV predictions.** Predicted 12-month LTV winners shipped in Experiments on 2026-02-12 (https://www.revenuecat.com/changelog/release/see-predicted-12-month-ltv-winners-in-experiments-2026-02-12). **Unverified on the other three:** no RevenueCat source checked yet |

## The finding that matters

The market's picture of RevenueCat is out of date. Competitors are
still beating a 2022 version of the product, and the current
/for-product page describes that same 2022 version.

This refresh is not a copy refresh. It is correcting a market
perception that competitors are actively exploiting.

## The category has converged

Every vendor now makes the same promise to PMs: change the paywall
without engineering, test it, read the analytics. Superwall says it
best, Qonversion says it blandly, Adapty adds more analytics on top.
That promise is table stakes and differentiates nobody.

## What RevenueCat can claim alone

This replaces the earlier "open spaces", which were written from
marketing pages. Competitor docs showed two of them were wrong:
Adapty and Apphud already pick revenue winners inside experiments,
and Benchmarks has shipped (2026-04-13) with Adapty Autopilot
competing. Details in docs/iteration-log.md, 2026-09-26.

1. **No new vendor and no migration for existing customers.** A PM
   whose app already runs RevenueCat gets the predicted LTV winner,
   one-action rollout and Benchmarks on the backend engineering has
   already integrated. Every competitor's pitch means adding a vendor
   or migrating. Superwall now calls itself "a complete, standalone
   subscription platform" (https://superwall.com/).
   Limits: never "no new SDK". Paywalls needs the paywall UI package
   and a minimum SDK version; Funnels need Redemption Link handling.
   "No app release" only holds if the app already reads offerings
   from RevenueCat.
2. **One system from billing to experiments.** Purchases, customer
   data, experiments, the 12-month LTV forecast, rollout and
   Benchmarks run on the same data.
   - Purchases, customer data and revenue: https://www.revenuecat.com/
   - Predicted 12-month LTV winners in Experiments, 2026-02-12:
     https://www.revenuecat.com/changelog/release/see-predicted-12-month-ltv-winners-in-experiments-2026-02-12
   - Roll out an experiment winner in one action, 2026-02-06:
     https://www.revenuecat.com/changelog/release/roll-out-an-experiment-winner-in-one-action-2026-02-06
   - Benchmarks, 2026-04-13:
     https://www.revenuecat.com/changelog/release/compare-subscription-metrics-against-industry-benchmarks-2026-04-13
   Limits: the LTV forecast is a signal, not a promise. It only
   applies to experiments with a revenue primary metric, once
   guardrails are met. Experiments is on Pro and Enterprise; Pro is
   free up to $2,500 MTR (https://www.revenuecat.com/pricing/).
3. **Scale.** 146K+ apps supported and $17B+ revenue processed
   (https://www.revenuecat.com/, September 2026).
   Limits: do not tie scale to prediction accuracy, since nothing
   public supports it. Never write "benchmarked against 146K apps",
   since the Benchmarks peer-set size is not disclosed.

Not confirmed, so verify before claiming: store and web as one
revenue picture inside Experiments.

## Sources

Inspected September 2026.

- Superwall PM page: https://superwall.com/solutions/product-managers
- Adapty: https://adapty.io/
- Adapty performance analytics: https://adapty.io/performance-analytics/
- Purchasely: https://www.purchasely.com/conversion
- Qonversion PM page: https://qonversion.io/for-product-managers
- Apphud vs RevenueCat: https://apphud.com/revenuecat
- RevenueCat homepage: https://www.revenuecat.com/
- Current page under refresh: https://www.revenuecat.com/for-product/

Added 2026-09-26 from the competitor-watch check:
- RevenueCat changelog, predicted 12-month LTV winners: https://www.revenuecat.com/changelog/release/see-predicted-12-month-ltv-winners-in-experiments-2026-02-12
- RevenueCat changelog, one-action rollout: https://www.revenuecat.com/changelog/release/roll-out-an-experiment-winner-in-one-action-2026-02-06
- RevenueCat changelog, Benchmarks: https://www.revenuecat.com/changelog/release/compare-subscription-metrics-against-industry-benchmarks-2026-04-13
- RevenueCat Benchmarks docs: https://www.revenuecat.com/docs/dashboard-and-metrics/benchmarks
- RevenueCat pricing: https://www.revenuecat.com/pricing/
- Superwall homepage: https://superwall.com/
- Competitor docs behind the corrections: listed in docs/iteration-log.md
