import { site } from "@/lib/site";
import ComingSoonForm from "@/components/ComingSoonForm";

export const metadata = {
  title: `${site.name} | Site Coming Soon`,
  description: "Our new site is under construction. Check back soon.",
};

export default function Home() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center px-6 py-24 text-center">
      <p className="text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-sage-dark">
        {site.name}
      </p>
      <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
        Site build in progress
      </h1>
      <p className="mt-4 max-w-md text-ink/70">
        Check back soon. In the meantime, reach out below.
      </p>
      <ComingSoonForm />
    </div>
  );
}
