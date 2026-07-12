import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { packages } from "@/lib/site";

export const metadata = {
  title: "Home Staging Packages and Services in Boulder",
  description:
    "Vacant home staging, occupied staging, and styling consultations in Boulder, CO. Three simple packages quoted by listing size. Request a free consultation.",
};

const packageNotes: Record<string, string> = {
  "full-staging":
    "This is the vacant home staging package Boulder realtors call about most. Empty rooms in, model home out.",
  "partial-staging":
    "Occupied home staging that works around your real life. You keep living there, the listing just looks better than ever.",
  "styling-consultation":
    "One appointment, one honest plan. The lightest way to get our eyes on your listing before it goes live.",
};

const packageAlts: Record<string, string> = {
  "full-staging":
    "Vacant home staging in Boulder CO: formal living room fully staged with cream sofas, layered rugs, and a coffered ceiling",
  "partial-staging":
    "Occupied home staging with a tan leather sofa, curated gallery art, and a deep teal accent wall",
  "styling-consultation":
    "Open plan living space after a staging consultation, with a sage green accent wall and warm tan leather sofa",
};

const addOns = [
  {
    name: "Extra rooms",
    body: "Basements, bonus rooms, the home office buyers keep asking about.",
  },
  {
    name: "Outdoor living spaces",
    body: "Patios and decks styled for those long Front Range evenings.",
  },
  {
    name: "Occupied-home refresh",
    body: "A light restyle of your own furniture before the home hits the market.",
  },
  {
    name: "Pre-photo styling day",
    body: "We arrive ahead of the photographer and perfect every angle.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free consultation",
    body: "Reach out, tell us about the listing, and we'll walk the space together. No charge, no obligation.",
  },
  {
    step: "02",
    title: "Custom proposal",
    body: "One clear quote based on the listing's size and what we'll bring in. You'll know exactly what to expect.",
  },
  {
    step: "03",
    title: "Install",
    body: "We stage the home in about three days to a week, timed to your photography and listing dates.",
  },
  {
    step: "04",
    title: "De-stage",
    body: "When it sells, we handle the packing and the pickup. You handle the celebrating.",
  },
];

const faqs = [
  {
    q: "What is home staging?",
    a: "Home staging is preparing a listing so buyers can picture themselves living there, with furniture, art, and styling chosen for the space and its likely buyer. Staged homes photograph better, show better, and tend to sell faster and for more. Think of it as marketing you can walk through.",
  },
  {
    q: "How much does home staging cost in Boulder?",
    a: "It depends on the size of the listing and what it needs, which is why we quote every project after a quick, free consultation. Our pricing is approachable and mid-range for the Boulder market, and your initial fee covers the first two months of staging. One walkthrough, one clear proposal, no mystery line items.",
  },
  {
    q: "What is the difference between vacant and occupied staging?",
    a: "Vacant home staging furnishes an empty listing from scratch: furniture, art, rugs, and decor in every key room. Occupied home staging, our Partial Staging package, layers curated pieces into the furniture you already own. Both end the same way, with a home buyers fall for.",
  },
  {
    q: "How long does staging take?",
    a: "Once you approve the proposal, we typically install in about three days to a week. Most clients are working toward a photography date, so we plan the install around your listing timeline. The walkthrough and proposal usually come together within a few days of your first call.",
  },
  {
    q: "Does staging really help homes sell?",
    a: "Yes. Staged homes consistently photograph better, draw more showings, and sell faster and often for more than comparable unstaged listings. Buyers decide in seconds, mostly from photos, and staging is how you win those seconds.",
  },
  {
    q: "What happens if my home doesn't sell in two months?",
    a: "Nothing dramatic. Your initial fee covers the first two months, and after that the staging simply stays in place at a simple monthly rate until the home sells. No repacking, no renegotiating, no pressure.",
  },
  {
    q: "Do you work with realtors?",
    a: "All the time, and we love it. Many Boulder and Front Range agents bring us in listing after listing because staging makes their marketing stronger and their sellers happier. If you're an agent, reach out and we'll make you look very good.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in Boulder and stage homes across Boulder County and the Front Range: Louisville, Lafayette, Superior, Longmont, Broomfield, Erie, and the Denver metro. If you're nearby but not on that list, just ask. We're flexible for the right listing.",
  },
  {
    q: "Do I need to stage every room?",
    a: "No. We focus on the rooms that sell homes: the living room, kitchen and dining areas, and the primary suite. During your consultation we'll tell you honestly which rooms matter for your listing and which can stay simple.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

function CheckIcon() {
  return (
    <svg
      className="mt-1 h-4 w-4 shrink-0 text-sage"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8.5 6.5 12 13 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="Services and Packages"
        title="Simple packages. Stunning results."
        intro="A handful of straightforward packages you can build on or take away, priced by your listing's size. Vacant, occupied, or somewhere in between, there's a way in for every home."
      />

      {/* Packages */}
      {packages.map((pkg, i) => {
        const imageFirst = i % 2 === 0;
        return (
          <section
            key={pkg.slug}
            id={pkg.slug}
            className={i % 2 === 0 ? "bg-cream" : "bg-linen"}
          >
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <Reveal
                  className={imageFirst ? "lg:order-1" : "lg:order-2"}
                  y={20}
                >
                  <div className="relative aspect-[4/5] overflow-hidden lg:aspect-[5/6]">
                    <Parallax
                      amount={45}
                      className="absolute inset-x-0 top-[-7.5%] h-[115%]"
                    >
                      <div className="relative h-full w-full">
                        <Image
                          src={pkg.image}
                          alt={packageAlts[pkg.slug]}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1023px) 100vw, 50vw"
                        />
                      </div>
                    </Parallax>
                  </div>
                </Reveal>

                <Reveal
                  className={imageFirst ? "lg:order-2" : "lg:order-1"}
                  delay={0.1}
                >
                  <p className="eyebrow">Package {`0${i + 1}`}</p>
                  <h2 className="display mt-4 text-4xl text-ink sm:text-5xl">
                    {pkg.name}
                  </h2>
                  <p className="mt-4 font-serif text-xl italic text-sage-dark">
                    Who it&apos;s for: {pkg.forWho.toLowerCase()}
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                    {pkg.summary}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft">
                    {packageNotes[pkg.slug]}
                  </p>

                  <p className="mt-8 text-xs font-medium uppercase tracking-[0.22em] text-ink">
                    What&apos;s included
                  </p>
                  <ul className="mt-4 space-y-3">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-[0.9375rem] leading-relaxed text-ink">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <Link href="/contact" className="btn btn-consultation">
                      Request a Consultation
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* Add-ons */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Add-ons"
            title="Build on it or pare it back"
            intro="Every package flexes. Start with what the listing needs, then adjust from there."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {addOns.map((addOn, i) => (
              <Reveal key={addOn.name} delay={i * 0.1}>
                <div className="h-full border border-sand bg-cream p-8">
                  <h3 className="font-serif text-2xl text-ink">{addOn.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {addOn.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing philosophy */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Image
              src="/brand/circle-logo.png"
              alt=""
              width={128}
              height={128}
              className="mx-auto h-28 w-28 brightness-0 invert opacity-80 sm:h-32 sm:w-32"
            />
            <p className="eyebrow eyebrow-light mt-8">Pricing</p>
            <h2 className="display mt-4 text-4xl text-cream sm:text-5xl">
              Fair, simple pricing by the square foot
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream/75 sm:text-lg">
              Every quote starts with your listing&apos;s size and what the
              space actually needs, and we put a real number on it after a
              quick, free consultation. Our rates sit comfortably in the
              mid-range for Boulder County, and because we own our inventory,
              you&apos;re never paying rental markups. No surprises either:
              your initial fee covers the first two months of staging, then a
              simple monthly rate carries it until the home sells.
            </p>
            <div className="mt-9">
              <Link href="/contact" className="btn btn-light">
                Get Your Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The process */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="How it works"
            title="From first call to sold sign"
            intro="The whole thing is simpler than you'd think. Four steps, and we handle the heavy lifting. Literally."
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <p className="font-serif text-5xl text-taupe-light">
                  {step.step}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Questions"
                title="Asked and answered"
                intro="The things realtors and sellers ask us most about home staging in Boulder, answered straight."
              />
            </div>
            <Reveal delay={0.1}>
              <div className="border-t border-sand">
                {faqs.map((faq) => (
                  <details key={faq.q} className="group border-b border-sand">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                      <h3 className="font-serif text-xl text-ink sm:text-2xl">
                        {faq.q}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sand transition-transform duration-300 group-open:rotate-45"
                      >
                        <svg
                          className="h-3.5 w-3.5 text-sage-dark"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M7 1v12M1 7h12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p className="pb-7 pr-4 text-[0.9375rem] leading-relaxed text-ink-soft sm:pr-14">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        title="Let's get your listing sold"
        body="Tell us about the property and we'll set up a free consultation. A walkthrough, a clear proposal, and a plan you'll feel good about."
      />
    </>
  );
}
