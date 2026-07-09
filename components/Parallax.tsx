"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  /** How far the content drifts, in px, as it crosses the viewport. Keep subtle (40 to 80). */
  amount?: number;
  className?: string;
};

/**
 * Gentle scroll parallax. Wrap an image (usually inside an overflow-hidden
 * container slightly taller than the visible crop) to let it drift as the
 * user scrolls past.
 */
export default function Parallax({
  children,
  amount = 60,
  className,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);

  return (
    <motion.div ref={ref} style={reduceMotion ? undefined : { y }} className={className}>
      {children}
    </motion.div>
  );
}
