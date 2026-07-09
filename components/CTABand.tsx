import Link from "next/link";
import Reveal from "@/components/Reveal";

type CTABandProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

/** Full-width sage call-to-action band, reused at the bottom of every page. */
export default function CTABand({
  eyebrow = "Ready when you are",
  title,
  body,
  buttonLabel = "Request a Consultation",
  buttonHref = "/contact",
}: CTABandProps) {
  return (
    <section className="bg-sage-deep">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow eyebrow-light">{eyebrow}</p>
          <h2 className="display mt-4 text-4xl text-cream sm:text-5xl">
            {title}
          </h2>
          {body && (
            <p className="mt-5 text-base leading-relaxed text-cream/75 sm:text-lg">
              {body}
            </p>
          )}
          <div className="mt-9">
            <Link href={buttonHref} className="btn btn-light">
              {buttonLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
