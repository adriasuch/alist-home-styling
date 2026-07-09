import Image from "next/image";

type PortraitPlaceholderProps = {
  caption: string;
  /** Full Tailwind aspect class, e.g. "aspect-[4/5]" or "aspect-[16/9]". */
  aspect?: string;
  className?: string;
};

/**
 * Elegant stand-in for portraits we don't have yet: sand block with the
 * A List monogram ghosted in the center and a tracked-caps caption.
 * Swap for a real photo whenever Amanda and Adria have one they love.
 */
export default function PortraitPlaceholder({
  caption,
  aspect = "aspect-[4/5]",
  className = "",
}: PortraitPlaceholderProps) {
  return (
    <div
      className={`relative flex ${aspect} items-center justify-center overflow-hidden bg-sand ${className}`}
    >
      <Image
        src="/brand/monogram.png"
        alt=""
        width={160}
        height={160}
        className="h-28 w-28 opacity-[0.16] sm:h-36 sm:w-36"
      />
      <p className="absolute inset-x-0 bottom-6 text-center text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-ink-soft">
        {caption}
      </p>
    </div>
  );
}
