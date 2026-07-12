import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Request a Home Staging Consultation in Boulder",
  description:
    "Request a free home staging consultation in Boulder, CO. Tell us about your listing and A List Home Styling will reply within one business day.",
};

const nextSteps = [
  {
    step: "01",
    title: "We reply within a business day",
    body: "A real note from Amanda or Adria, not an autoresponder.",
  },
  {
    step: "02",
    title: "Free walkthrough",
    body: "We come see the space and talk through what buyers need to feel.",
  },
  {
    step: "03",
    title: "Custom proposal",
    body: "A clear plan and quote based on the listing size. No surprises.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your listing"
        intro="Reach out for a free staging consultation. We'll come take a look at the space and put together a plan, usually within one business day."
      />

      {/* Form and sidebar */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-3 lg:gap-16">
            <Reveal className="lg:col-span-2">
              <h2 className="display text-3xl text-ink sm:text-4xl">
                Request your consultation
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
                A few details help us show up prepared. Vacant home staging,
                occupied home staging, or just a staging consultation: tell us
                where you are and we&apos;ll meet you there.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </Reveal>

            {/* Sidebar */}
            <div className="space-y-8">
              <Reveal delay={0.1}>
                <div className="border border-sand bg-linen p-8">
                  <p className="eyebrow">Reach us directly</p>
                  <ul className="mt-5 space-y-4">
                    {site.team.map((person) => (
                      <li key={person.email}>
                        <p className="field-label !mb-1">{person.name}</p>
                        <a
                          href={`mailto:${person.email}`}
                          className="text-base text-ink underline decoration-sand underline-offset-4 transition-colors hover:text-taupe"
                        >
                          {person.email}
                        </a>
                      </li>
                    ))}
                    <li>
                      <p className="field-label !mb-1">Phone</p>
                      {/* Placeholder phone from lib/site.ts, confirm before launch */}
                      <a
                        href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                        className="text-base text-ink underline decoration-sand underline-offset-4 transition-colors hover:text-taupe"
                      >
                        {site.phone}
                      </a>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="border border-sand p-8">
                  <p className="eyebrow">What happens next</p>
                  <ol className="mt-6 space-y-6">
                    {nextSteps.map((item) => (
                      <li key={item.step} className="flex gap-4">
                        <span className="font-serif text-2xl leading-none text-taupe-light">
                          {item.step}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-ink">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                            {item.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="relative overflow-hidden border border-sand bg-linen p-8">
                  <Image
                    src="/brand/circle-logo.png"
                    alt=""
                    aria-hidden="true"
                    width={150}
                    height={150}
                    className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 opacity-15"
                  />
                  <p className="eyebrow">Where we stage</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    Home staging across Boulder County and the Front Range.
                  </p>
                  <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
                    {site.serviceAreas.map((area) => (
                      <li key={area} className="text-sm text-ink">
                        {area}, CO
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="border-t border-sand bg-linen py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="eyebrow">For realtors</p>
              <p className="mt-4 font-serif text-2xl leading-snug text-ink sm:text-3xl">
                Fast turnarounds, easy to work with, and staging that makes
                your listing photos sing. We make you look good.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">For homeowners</p>
              <p className="mt-4 font-serif text-2xl leading-snug text-ink sm:text-3xl">
                No pressure, ever. You&apos;ll get honest advice about what
                your home needs, even if that&apos;s just a consultation.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mt-14 border-t border-sand pt-10 text-center">
            <p className="eyebrow">Prefer email?</p>
            <p className="mt-4 text-base text-ink-soft">
              Skip the form and write to us directly. We read everything.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {site.team.map((person) => (
                <a
                  key={person.email}
                  href={`mailto:${person.email}`}
                  className="btn btn-outline"
                >
                  Email {person.name}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
