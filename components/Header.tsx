"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // The home hero photo is only shown once the full site replaces the
  // coming-soon placeholder, so there's no dark background to flip against yet.
  const onDarkHero = false;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_var(--color-sand)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" aria-label="A List Home Styling, home">
          <Image
            src="/brand/line-logo.png"
            alt="A List Home Styling"
            width={165}
            height={52}
            preload
            className={`h-11 w-auto transition-[filter] duration-500 md:h-13 ${
              onDarkHero ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[0.8125rem] font-medium uppercase tracking-[0.18em] transition-colors ${
                onDarkHero
                  ? "text-cream/90 hover:text-cream"
                  : pathname === item.href
                    ? "text-taupe hover:text-taupe"
                    : "text-ink hover:text-taupe"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary !px-6 !py-3">
            Request a Consultation
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 transition-transform duration-300 ${
              onDarkHero ? "bg-cream" : "bg-ink"
            } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 transition-transform duration-300 ${
              onDarkHero ? "bg-cream" : "bg-ink"
            } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-sand bg-cream md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-3 font-serif text-2xl ${
                    pathname === item.href ? "text-taupe" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="btn btn-primary mt-4">
                Request a Consultation
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
