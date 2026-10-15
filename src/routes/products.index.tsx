import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";
import { PageHeader } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { getOrigin, origins, products, type Species } from "@/data/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Green Coffee Catalog — Tropivara" },
      { name: "description", content: "Eleven green coffee lots: Excelsa from Wonosalam, Arabica from Gayo and Ijen, Robusta from Temanggung and Pagar Alam." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Tropivara Green Coffee Catalog" },
      { property: "og:description", content: "Specifications for every Excelsa, Arabica and Robusta lot. Pricing on inquiry." },
    ],
  }),
  component: Catalog,
});

function Catalog() {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState<Species | "all">("all");
  const opts: (Species | "all")[] = ["all", "excelsa", "arabica", "robusta"];
  const shown = origins.filter((o) => filter === "all" || o.species === filter);
  return (
    <>
      <PageHeader eyebrow={t.products.eyebrow} title={t.products.title} lead={t.products.lead} />
      <section className="container-page py-14">
        <div role="group" aria-label={t.products.filterLabel} className="flex flex-wrap gap-2">
          {opts.map((o) => (
            <button key={o} type="button" aria-pressed={filter === o} onClick={() => setFilter(o)}
              className={`btn !py-2 border ${filter === o ? "btn-primary border-forest" : "border-border hover:border-forest"}`}>
              {o === "all" ? t.products.filterAll : t.species[o]}
            </button>
          ))}
        </div>
        {shown.map((o) => {
          const list = products.filter((p) => p.originId === o.id);
          return (
            <div key={o.id} className="mt-14">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3">
                <h2 className="text-3xl text-forest-deep">{o.title}</h2>
                <p className="text-sm text-muted-foreground">{o.location} · {o.speciesLabel}{o.altitude ? ` · ${o.altitude}` : ""}{o.note ? ` · ${o.note[lang]}` : ""}</p>
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((p) => <ProductCard key={p.slug} product={p} />)}
              </div>
            </div>
          );
        })}
        <p className="mt-12 text-xs text-muted-foreground">{t.common.catalogSource} · {products.filter((p) => filter === "all" || getOrigin(p.originId).species === filter).length} {t.common.products}</p>
      </section>
    </>
  );
}
