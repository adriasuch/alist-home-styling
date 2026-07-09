import Reveal from "@/components/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

/** Shared interior-page hero: linen band, tracked eyebrow, big serif title. */
export default function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="bg-linen pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display mt-4 text-5xl text-ink sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
