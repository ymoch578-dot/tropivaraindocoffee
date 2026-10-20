import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n/LanguageProvider";
import { PageHeader } from "@/components/site/Layout";
import { originImage } from "@/components/site/ProductCard";
import { origins, products } from "@/data/products";
import { InquiryCta } from "@/components/site/InquiryCta";

export const Route = createFileRoute("/origins")({
  head: () => ({
    meta: [
      { title: "Coffee Origins — Java, Sumatra & Flores | Tropivara" },
      { name: "description", content: "The eight Indonesian origins in Tropivara's green coffee catalogue, with species, altitude and available products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Tropivara Coffee Origins" },
      { property: "og:description", content: "Excelsa, Arabica and Robusta origins across Java, Sumatra and Flores." },
    ],
  }),
  component: Origins,
});

function Origins() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader eyebrow={t.originsPage.eyebrow} title={t.originsPage.title} lead={t.originsPage.lead} />
      <div className="container-page py-10">
        {origins.map((o, i) => {
          const lots = products.filter((p) => p.originId === o.id);
          return (
            <section key={o.id} id={o.id} className={`grid scroll-mt-24 items-center gap-10 border-b border-border py-14 md:grid-cols-2 ${i % 2 ? "md:[&>figure]:order-2" : ""}`}>
              <figure>
                <img src={originImage(o.species)} alt="Coffee harvest — reference photograph, not this origin" loading="lazy" width={1200} height={900} className="aspect-[4/3] w-full object-cover" />
                <figcaption className="mt-2 text-xs text-muted-foreground">{t.common.imageNote}</figcaption>
              </figure>
              <div>
                <p className="eyebrow">0{i + 1} · {t.species[o.species]}</p>
                <h2 className="mt-3 text-3xl md:text-4xl text-forest-deep">{o.title}</h2>
                <dl className="mt-6 divide-y divide-border border-y border-border text-sm">
                  {([[t.spec.origin, o.location], [t.spec.species, o.speciesLabel], [t.spec.altitude, o.altitude]] as [string, string | undefined][])
                    .filter(([, v]) => v).map(([k, v]) => (
                      <div key={k} className="grid grid-cols-[8rem_1fr] gap-4 py-3"><dt className="text-muted-foreground">{k}</dt><dd className="font-medium">{v}</dd></div>
                    ))}
                </dl>
                <h3 className="eyebrow mt-8">{t.originsPage.lots}</h3>
                <ul className="mt-3 space-y-2">
                  {lots.map((p) => (
                    <li key={p.slug}><Link to="/products/$slug" params={{ slug: p.slug }} className="text-forest underline-offset-4 hover:underline">{p.ref} — {p.name}</Link></li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
        <p className="mt-6 text-xs text-muted-foreground">{t.common.catalogSource}</p>
      </div>
      <InquiryCta />
    </>
  );
}
