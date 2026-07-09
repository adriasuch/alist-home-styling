import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import PortraitPlaceholder from "@/components/about/PortraitPlaceholder";

export const metadata = {
  title: "About Amanda and Adria",
  description:
    "Meet Amanda and Adria, the two friends behind A List Home Styling. Warm, elevated home staging in Boulder, CO that helps listings sell faster and for more.",
};

const values = [
  {
    eyebrow: "Value 01",
    title: "Earthy and warm",
    body: "Design that feels like home, not a showroom. Natural textures, warm neutrals, and rooms buyers want to stay in a little longer.",
  },
  {
    eyebrow: "Value 02",
    title: "Elevated, not extravagant",
    body: "A high-end feel at approachable pricing. Beautiful staging should not be reserved for the priciest listings on the block.",
  },
  {
    eyebrow: "Value 03",
    title: "Honest partners",
    body: "Straight answers and an easy process for realtors and homeowners. We tell you what a listing needs, and nothing it doesn't.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About A List"
        title="Two friends. One very good eye. Okay, two."
        intro="We're Amanda and Adria, Boulder locals and longtime friends who believe every listing deserves to feel like home. That belief became A List Home Styling."
      />

      {/* STORY */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow">Our Story</p>
              <h2 className="display mt-4 text-4xl text-ink sm:text-5xl">
                It started with one empty living room
              </h2>
              {/* PLACEHOLDER STORY: plausible origin copy for Amanda and Adria to personalize with the real details. */}
              <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
                A List began the way most good things in Boulder do: over
                coffee and a slightly too ambitious idea. A friend was listing
                her house, the rooms were echoing, and we offered to help. We
                hauled in furniture we loved, hung art, layered rugs and linen
                and warm wood. The house went under contract that weekend, and
                one question kept coming up: who staged this?
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                So we made it official. Today we bring warm, elevated home
                staging to Boulder County and the Front Range, from Pearl
                Street condos to homes with a full Flatirons view. We own
                every piece in our inventory, we style every project
                ourselves, and we still get giddy on install day.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Parallax className="absolute inset-x-0 -top-[7.5%] h-[115%]">
                  <Image
                    src="/images/dining-1.jpg"
                    alt="Elegant staged dining room with green velvet chairs and cream walls, styled by A List Home Styling in Boulder"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </Parallax>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AMANDA */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <PortraitPlaceholder caption="Portrait coming soon" />
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow">Meet Amanda</p>
              <h2 className="display mt-4 text-4xl text-ink sm:text-5xl">
                Amanda
              </h2>
              {/* PLACEHOLDER BIO: written in a plausible warm voice for Amanda to rewrite in her own words. */}
              <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
                Amanda walks a listing three steps ahead of everyone else,
                already deciding which wall gets the art and where the light
                lands at five o&apos;clock. She has been arranging rooms since
                she was old enough to push a couch, and she brings that same
                instinct to every staging we install.
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                Off the clock she is hunting for the next great vintage find,
                out on a Front Range trail, or rearranging her own living room
                for the hundredth time. Her family has stopped asking why.
              </p>
              <p className="mt-8 text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-taupe-dark">
                Favorite room to stage: the living room, always
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ADRIA */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="lg:order-last">
              <PortraitPlaceholder caption="Portrait coming soon" />
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow">Meet Adria</p>
              <h2 className="display mt-4 text-4xl text-ink sm:text-5xl">
                Adria
              </h2>
              {/* PLACEHOLDER BIO: written in a plausible warm voice for Adria to rewrite in her own words. */}
              <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
                Adria sees the story in a space. Give her an empty primary
                bedroom and she will tell you exactly who the buyer is and
                what belongs on the nightstand to win them over. She is the
                detail person: the stack of books, the throw folded just so,
                the reason our listings photograph the way they do.
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                When she is not on an install you will find her at the Boulder
                farmers market, refinishing a thrifted dresser, or gently
                talking a friend out of a beige sofa.
              </p>
              <p className="mt-8 text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-taupe-dark">
                Favorite room to stage: the primary suite
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TOGETHER */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mx-auto max-w-4xl">
            <PortraitPlaceholder
              caption="The two of us, coming soon"
              aspect="aspect-[16/9]"
            />
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-12 max-w-2xl text-center">
            <p className="eyebrow">Two of everything</p>
            <h2 className="display mt-4 text-4xl text-ink sm:text-5xl">
              Better together
            </h2>
            {/* PLACEHOLDER: duo paragraph for Amanda and Adria to make their own. */}
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              Every staging is both of us, start to finish. Amanda plans the
              big moves, Adria perfects the details, and we trade jobs
              constantly because that is what friends do. You get two sets of
              eyes on the walkthrough, two opinions in the proposal, and two
              very full carloads on install day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-taupe-deep py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="What we believe"
            title="How we work"
            intro="Three things guide every home we stage, whether it's a vacant listing downtown or an occupied family house in Louisville."
            align="center"
            light
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-3 lg:mt-16 lg:gap-12">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <p className="eyebrow eyebrow-light">{value.eyebrow}</p>
                <h3 className="display mt-4 text-2xl text-cream sm:text-3xl">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-cream/75 sm:text-base">
                  {value.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Come see what we'd do with your listing"
        body="The first consultation is free. Tell us about the property, walk us through the space, and we'll bring the ideas."
      />
    </>
  );
}
