import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n/LanguageProvider";
import { PageHeader } from "@/components/site/Layout";
import { InquiryCta } from "@/components/site/InquiryCta";
import beds from "@/assets/coffee-harvest-photo.jpg.asset.json";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Processing & Quality Control — Tropivara" },
      { name: "description", content: "Processing methods and grading data for Tropivara green coffee lots, as documented in our catalog." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Processing & Quality — Tropivara" },
      { property: "og:description", content: "Natural, pulp honey, anaerob and fully washed lots with documented moisture, screen and defect data." },
    ],
  }),
  component: Quality,
});

function Quality() {
  const { t } = useI18n();
  const q = t.quality;
  return (
    <>
      <PageHeader eyebrow={q.eyebrow} title={q.title} lead={q.lead} />
      <section className="container-page py-20">
        <h2 className="text-3xl text-forest-deep">{q.confirmedT}</h2>
        <div className="mt-8 grid gap-px bg-border sm:grid-cols-2">
          {q.confirmed.map((c) => <div key={c.t} className="bg-background p-7"><h3 className="text-xl text-forest-deep">{c.t}</h3><p className="mt-2 text-muted-foreground">{c.d}</p></div>)}
        </div>
      </section>
      <section className="border-y border-border bg-secondary/50">
        <div className="container-page grid gap-12 py-20 md:grid-cols-[1fr_1.2fr]">
          <img src={beds.url} alt="Coffee cherries drying after harvest" loading="lazy" width={1200} height={1200} className="aspect-square w-full object-cover" />
          <div>
            <h2 className="text-3xl text-forest-deep">{q.methodsT}</h2>
            <dl className="mt-8 divide-y divide-border border-y border-border">
              {q.methods.map((m) => <div key={m.t} className="py-4"><dt className="font-display text-xl text-forest-deep">{m.t}</dt><dd className="mt-1 text-muted-foreground">{m.d}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>
      <InquiryCta />
    </>
  );
}
