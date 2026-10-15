import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n/LanguageProvider";
import { DraftBadge, PageHeader } from "@/components/site/Layout";
import { InquiryCta } from "@/components/site/InquiryCta";
import cherries from "@/assets/cherries.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tropivara — Indonesian Green Coffee Supplier" },
      { name: "description", content: "Who Tropivara is, how we work with business buyers, and our commitment to transparent product information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "About Tropivara" },
      { property: "og:description", content: "An Indonesian green coffee supplier for wholesalers, roasters and coffee manufacturers." },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useI18n();
  const a = t.about;
  return (
    <>
      <PageHeader eyebrow={a.eyebrow} title={a.title} lead={a.lead} />
      <section className="container-page py-20">
        <div className="flex items-center gap-3"><DraftBadge /><p className="text-sm text-muted-foreground">{t.common.draftNote}</p></div>
        <div className="mt-8 grid gap-px bg-border md:grid-cols-3">
          {[{ h: a.purposeT, b: a.purpose }, { h: a.visionT, b: a.vision }].map((x) => (
            <div key={x.h} className="bg-background p-7"><h2 className="text-2xl text-forest-deep">{x.h}</h2><p className="mt-3 text-muted-foreground">{x.b}</p></div>
          ))}
          <div className="bg-background p-7">
            <h2 className="text-2xl text-forest-deep">{a.missionT}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">{a.mission.map((m) => <li key={m}>{m}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-secondary/50">
        <div className="container-page grid gap-12 py-20 md:grid-cols-2">
          <img src={cherries} alt="Ripe coffee cherries on the branch — illustrative" loading="lazy" width={1200} height={1200} className="aspect-square w-full object-cover" />
          <div>
            <h2 className="text-3xl md:text-4xl text-forest-deep">{a.approachT}</h2>
            <ol className="mt-8 space-y-6">
              {a.approach.map((x, i) => (
                <li key={x.t} className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-border pt-5">
                  <span className="font-display text-coffee">0{i + 1}</span>
                  <div><h3 className="text-xl text-forest-deep">{x.t}</h3><p className="mt-1 text-muted-foreground">{x.d}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="container-page grid gap-12 py-20 md:grid-cols-2">
        <div><h2 className="text-3xl text-forest-deep">{a.transparencyT}</h2><p className="mt-4 text-lg text-muted-foreground">{a.transparency}</p></div>
        <div className="border border-dashed border-draft-foreground/40 bg-draft/30 p-7">
          <DraftBadge /><h2 className="mt-4 text-2xl text-forest-deep">{a.historyT}</h2><p className="mt-3 text-muted-foreground">{a.history}</p>
        </div>
      </section>
      <InquiryCta />
    </>
  );
}
