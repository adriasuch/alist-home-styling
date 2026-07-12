"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

function Rise({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

/** Staggered entrance for the home hero copy and buttons. */
export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      <Rise delay={0.15}>
        <p className="eyebrow eyebrow-light">
          Home Staging in Boulder, Colorado
        </p>
      </Rise>
      <Rise delay={0.3}>
        <h1 className="display mt-5 text-5xl text-cream sm:text-6xl lg:text-7xl">
          Homes styled to sell. Beautifully.
        </h1>
      </Rise>
      <Rise delay={0.45}>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
          Warm, elevated staging that makes buyers stop scrolling and start
          picturing their life here. We help Boulder listings sell faster and
          for more.
        </p>
      </Rise>
      <Rise delay={0.6}>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href="/contact" className="btn btn-light">
            Request a Consultation
          </Link>
          <Link href="/services" className="btn btn-outline-light">
            View Packages
          </Link>
        </div>
      </Rise>
    </div>
  );
}
