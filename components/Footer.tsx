import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/monogram.png"
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 brightness-0 invert opacity-90"
            />
            <p className="eyebrow eyebrow-light mt-6">
              Curated Staging &bull; Elevated Design
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              Warm, elevated home staging for Boulder and the Front Range.
              We style listings that buyers fall for.
            </p>
          </div>

          <div>
            <p className="eyebrow eyebrow-light">Explore</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow eyebrow-light">Serving</p>
            <ul className="mt-5 space-y-2">
              {site.serviceAreas.map((area) => (
                <li key={area} className="text-sm text-cream/70">
                  {area}, CO
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Boulder, Colorado.
          </p>
          <p>Homes styled to sell, beautifully.</p>
        </div>
      </div>
    </footer>
  );
}
