import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import HeroContent from "@/components/home/HeroContent";
import { packages, site } from "@/lib/site";

export const metadata = {
  title: "Home Staging in Boulder, CO | A List Home Styling",
  description:
    "Warm, elevated home staging in Boulder, CO. A List Home Styling helps Front Range listings sell faster and for more. Request a free staging consultation.",
};

const textLink =
  "mt-6 inline-flex items-center gap-2 text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-sage-dark transition-colors hover:text-ink";

const packageAlts: Record<string, string> = {
  "full-staging":
    "Fully staged formal living room with cream sofas and a coffered ceiling, vacant home staging by A List Home Styling",
  "partial-staging":
    "Occupied home staging vignette with a tan leather sofa, teal accent wall, and curated gallery art",
  "styling-consultation":
    "Open-plan living room with a sage green accent wall and tan leather sofa, styled after a staging consultation",
};

const audiences = [
  {
    title: "For Realtors",
    image: "/images/living-3.jpg",
    alt: "Bright white staged kitchen with black pendant lights, styled to photograph beautifully for a Boulder listing",
    body: "Your listing gets one first impression, and it usually happens on a phone screen. We stage homes that stop the scroll: photos that pop online, showings that feel like home, offers that come in sooner. Fast turnarounds, one point of contact, and a process your sellers will thank you for.",
    linkLabel: "See staging packages",
  },
  {
    title: "For Homeowners",
    image: "/images/bedroom-1.jpg",
    alt: "Warm taupe staged bedroom with a tufted headboard and upholstered benches, ready for market",
    body: "Selling on your own, or just want help getting market ready? No judgment here. We walk your home with fresh eyes, tell you the truth kindly, and leave you with a clear plan. Start with a staging consultation or let us handle the whole thing.",
    linkLabel: "Find your starting point",
  },
];

const steps = [
  {
    label: "Step 01",
    title: "Reach out",
    body: "It starts with a free consultation and a walkthrough of the space. We look at every room the way a buyer will.",
  },
  {
    label: "Step 02",
    title: "Get your proposal",
    body: "A custom proposal based on the size of your listing and what we procure for it. Clear, simple, no surprises.",
  },
  {
    label: "Step 03",
    title: "We stage",
    body: "Furniture, art, and styling from our own inventory, installed in about three days to a week.",
  },
  {
    label: "Step 04",
    title: "It sells",
    body: "Your initial fee covers the first two months, then one simple monthly rate until the home sells.",
  },
];

const portfolio = [
  {
    src: "/images/living-2.jpg",
    alt: "Staged living room in soft sage and gray with a natural wood coffee table, home staging in Boulder CO",
    sizes: "(max-width: 1024px) 100vw, 40vw",
  },
  {
    src: "/images/dining-1.jpg",
    alt: "Elegant staged dining room with green velvet chairs and cream walls in a Boulder County listing",
    sizes: "(max-width: 1024px) 100vw, 56vw",
  },
  {
    src: "/images/kitchen-1.jpg",
    alt: "Staged white kitchen with a marble island and copper hardware, styled for listing photos",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw",
  },
  {
    src: "/images/detail-1.jpg",
    alt: "Open-plan living space with a sage green accent wall and tan leather sofa, staged to sell",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw",
  },
  {
    src: "/images/bedroom-2.jpg",
    alt: "Cream neutral staged living room with a sectional and curated gallery wall, Front Range home staging",
    sizes: "(max-width: 1024px) 100vw, 56vw",
  },
  {
    src: "/images/office-1.jpg",
    alt: "Cozy staged lounge with sage walls and rattan pendant lights in a Boulder home",
    sizes: "(max-width: 1024px) 100vw, 40vw",
  },
];

function PortfolioTile({
  src,
  alt,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative flex min-h-svh items-end overflow-hidden">
        <div className="absolute inset-0">
          <Parallax
            amount={70}
            className="absolute -top-[7.5%] left-0 h-[115%] w-full"
          >
            <Image
              src="/images/hero-living.jpg"
              alt="Warm modern living room staged by A List Home Styling in Boulder, with a tan leather sofa, gallery wall, and plants by big bright windows"
              fill
              preload
              sizes="100vw"
              className="object-cover"
            />
          </Parallax>
        </div>
        {/* Legibility overlays: dark at the base for copy, soft cream at the top for the fixed header logo */}
        <div
          className="absolute inset-0 bg-linear-to-t from-ink/75 via-ink/25 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 top-0 h-44 bg-linear-to-b from-cream/70 via-cream/25 to-transparent"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-44 pb-20 lg:px-10 lg:pb-28">
          <HeroContent />
        </div>
      </section>

      {/* 2. Intro strip */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
            <Reveal className="flex justify-center lg:justify-start">
              <Image
                src="/brand/circle-logo.png"
                alt="A List Home Styling round seal, curated staging and elevated design"
                width={160}
                height={160}
                className="h-32 w-32 -rotate-6 sm:h-40 sm:w-40"
              />
            </Reveal>
            <Reveal delay={0.1} className="max-w-2xl">
              <h2 className="display text-3xl text-ink sm:text-4xl">
                Two friends, one shared eye, and homes all over Boulder styled
                to sell.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
                A List Home Styling is Amanda and Adria: curated staging,
                elevated design, and pricing that will not scare off your
                sellers. From a vacant listing near Pearl Street to a family
                home with Flatiron views, we stage rooms buyers fall for the
                moment they open the photos. And we do it with furniture and
                art we own and love.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Who we help */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Who We Help"
            title="Styled for the way you sell"
            intro="Realtors bring us listings. Homeowners bring us their actual houses, keys, kids, dogs and all. Either way, the goal is the same: a home buyers remember."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.1} className="h-full">
                <article className="group flex h-full flex-col border border-sand bg-cream">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8 lg:p-10">
                    <h3 className="display text-3xl text-ink">{a.title}</h3>
                    <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                      {a.body}
                    </p>
                    <Link href="/services" className={textLink}>
                      {a.linkLabel} <span aria-hidden>&rarr;</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Packages preview */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Our Services"
            title="Three simple packages"
            intro="Vacant home staging, occupied home staging, or a consultation and a plan. Every package is quoted after your free walkthrough and priced by the size of the listing."
          />
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {packages.map((pkg, i) => (
              <Reveal
                key={pkg.slug}
                delay={i * 0.1}
                className="group flex h-full flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={packageAlts[pkg.slug]}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow mt-7">{pkg.forWho}</p>
                <h3 className="display mt-3 text-3xl text-ink">{pkg.name}</h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {pkg.summary}
                </p>
                <Link href="/services" className={textLink}>
                  See what&rsquo;s included <span aria-hidden>&rarr;</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How it works */}
      <section className="bg-sage-deep py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            light
            eyebrow="How It Works"
            title="From first walkthrough to sold"
            intro="No mystery, no runaround. Four steps, and most homes are staged within a week of yes."
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal key={step.label} delay={i * 0.1}>
                <div className="border-t border-cream/20 pt-6">
                  <p className="eyebrow eyebrow-light">{step.label}</p>
                  <h3 className="display mt-3 text-2xl text-cream sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3} className="mt-14">
            <Link href="/contact" className="btn btn-light">
              Start with a Free Consultation
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 6. Portfolio strip */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Recent Work"
            title="Rooms buyers remember"
            intro="A few favorites from staged listings across Boulder County and the Front Range."
          />
          <div className="mt-14 grid gap-4 md:gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <PortfolioTile
                {...portfolio[0]}
                className="aspect-[3/4] lg:h-full lg:aspect-auto"
              />
            </Reveal>
            <div className="grid gap-4 md:gap-6 lg:col-span-7">
              <Reveal delay={0.1}>
                <PortfolioTile {...portfolio[1]} className="aspect-[16/9]" />
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
                <Reveal delay={0.15}>
                  <PortfolioTile {...portfolio[2]} className="aspect-[4/3]" />
                </Reveal>
                <Reveal delay={0.2}>
                  <PortfolioTile {...portfolio[3]} className="aspect-[4/3]" />
                </Reveal>
              </div>
            </div>
            <Reveal delay={0.1} className="lg:col-span-7">
              <PortfolioTile
                {...portfolio[4]}
                className="aspect-[16/10] lg:h-full lg:aspect-auto"
              />
            </Reveal>
            <Reveal delay={0.2} className="lg:col-span-5">
              <PortfolioTile {...portfolio[5]} className="aspect-[3/4]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Testimonial */}
      {/* PLACEHOLDER testimonial: swap in a real client quote and attribution before launch */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Image
              src="/brand/monogram.png"
              alt=""
              width={56}
              height={56}
              className="mx-auto h-12 w-12 opacity-80"
            />
            <blockquote className="display mt-8 text-3xl leading-snug text-ink sm:text-4xl">
              &ldquo;Every A List listing photographs like a magazine spread
              and shows even better in person. My last one went under contract
              the first weekend, over asking.&rdquo;
            </blockquote>
            <p className="eyebrow mt-8">Boulder Listing Agent</p>
          </Reveal>
        </div>
      </section>

      {/* 8. Service area */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            align="center"
            eyebrow="Service Area"
            title="Serving Boulder and the Front Range"
            intro="Based in Boulder, staging homes across Boulder County and the Denver metro."
          />
          <Reveal delay={0.1}>
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-4">
              {site.serviceAreas.map((area, i) => (
                <li key={area} className="flex items-center gap-3">
                  {i > 0 && (
                    <span
                      className="h-1 w-1 rounded-full bg-taupe-light"
                      aria-hidden
                    />
                  )}
                  <span className="eyebrow">{area}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 9. CTA */}
      <CTABand
        title="Let’s get your listing market-ready"
        body="Tell us about the property and we’ll set up a free consultation and walkthrough. No pressure, just a clear plan and a home buyers fall for."
      />
    </>
  );
}
