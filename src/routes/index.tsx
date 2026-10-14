import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";
import { origins, products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import hero from "@/assets/hero-beans.jpg";
import beds from "@/assets/drying-beds.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tropivara — Indonesian Green Coffee for Roasters & Wholesalers" },
      { name: "description", content: "Green Excelsa, Arabica and Robusta beans from five Indonesian origins, supplied to wholesalers, roasters and coffee manufacturers." },
      { property: "og:title", content: "Tropivara — Indonesian Green Coffee Supplier" },
      { property: "og:description", content: "B2B green coffee from Wonosalam, Gayo, Ijen, Temanggung and Pagar Alam." },
    ],
  }),
  component: Home,
});

const featured = ["excelsa-petik-merah-specialty", "arabica-gayo-natural-grade-1", "arabica-ijen-full-washed-grade-1", "robusta-temanggung-natural-grade-1"];

function Home() {
  const { t, lang } = useI18n();
  const h = t.home;
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="eyebrow">{h.eyebrow}</p>
            <h1 className="mt-5 text-4xl leading-[1.02] text-forest-deep sm:text-5xl lg:text-[4.2rem]">{h.title}</h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{h.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="btn btn-primary">{t.common.explore} <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/contact" className="btn btn-outline text-forest">{t.common.contactTeam}</Link>
            </div>
            <dl className="mt-12 flex gap-10 border-t border-border pt-6">
              {h.stats.map((s) => (
                <div key={s.l}><dt className="sr-only">{s.l}</dt><dd><span className="font-display text-4xl text-forest">{s.n}</span><span className="block text-xs uppercase tracking-widest text-muted-foreground">{s.l}</span></dd></div>
              ))}
            </dl>
          </div>
          <figure className="relative">
            <img src={hero} alt="Unroasted green coffee beans spilling from a jute sack" width={1600} height={1072} className="aspect-[4/5] w-full object-cover lg:aspect-[4/5]" />
            <figcaption className="mt-2 text-xs text-muted-foreground">{t.common.imageNote}</figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-forest-deep text-forest-foreground">
        <div className="container-page grid gap-10 py-20 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow !text-accent">{h.introEyebrow}</p>
            <h2 className="mt-4 text-3xl md:text-4xl">{h.introTitle}</h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-forest-foreground/80">{h.introBody}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {(["Yatra", "Tanah"] as const).map((l) => (
                <div key={l} className="border border-forest-foreground/20 p-5">
                  <p className="font-display text-2xl">{l}</p>
                  <p className="mt-1 text-sm text-forest-foreground/70">{l === "Yatra" ? "The Indonesian Excelsa House" : "The Indonesian Arabica & Robusta House"}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline">{t.nav.about} <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="eyebrow">{h.featuredEyebrow}</p><h2 className="mt-3 text-3xl md:text-4xl text-forest-deep">{h.featuredTitle}</h2></div>
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:underline">{t.common.allProducts} <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((s) => <ProductCard key={s} product={products.find((p) => p.slug === s)!} />)}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="container-page py-20">
          <p className="eyebrow">{h.originsEyebrow}</p>
          <h2 className="mt-3 text-3xl md:text-4xl text-forest-deep">{h.originsTitle}</h2>
          <ol className="mt-10 divide-y divide-border border-y border-border">
            {origins.map((o, i) => (
              <li key={o.id}>
                <Link to="/origins" hash={o.id} className="grid grid-cols-[2.5rem_1fr] items-baseline gap-4 py-5 hover:bg-background/60 md:grid-cols-[3rem_1.4fr_1fr_1fr]">
                  <span className="font-display text-muted-foreground">0{i + 1}</span>
                  <span className="font-display text-2xl text-forest-deep">{o.title}</span>
                  <span className="col-start-2 text-sm text-muted-foreground md:col-start-auto">{o.location}</span>
                  <span className="col-start-2 text-sm md:col-start-auto">{t.species[o.species]}{o.altitude ? ` · ${o.altitude}` : ""}{o.note ? ` · ${o.note[lang]}` : ""}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page grid items-center gap-12 py-20 md:grid-cols-2">
        <img src={beds} alt="Coffee beans drying on raised wooden beds — illustrative" loading="lazy" width={1200} height={1200} className="aspect-square w-full object-cover" />
        <div>
          <p className="eyebrow">{h.qcEyebrow}</p>
          <h2 className="mt-3 text-3xl md:text-4xl text-forest-deep">{h.qcTitle}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{h.qcBody}</p>
          <Link to="/quality" className="btn btn-outline mt-8 text-forest">{h.qcLink}</Link>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-page py-20">
          <p className="eyebrow">{h.credEyebrow}</p>
          <h2 className="mt-3 text-3xl md:text-4xl text-forest-deep">{h.credTitle}</h2>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
            {h.cred.map((c, i) => (
              <div key={c.t} className="bg-background p-7">
                <span className="font-display text-coffee">0{i + 1}</span>
                <h3 className="mt-3 text-2xl text-forest-deep">{c.t}</h3>
                <p className="mt-2 text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{t.common.catalogSource}</p>
        </div>
      </section>

      <InquiryCta />
    </>
  );
}

export function InquiryCta() {
  const { t } = useI18n();
  return (
    <section className="bg-forest text-forest-foreground">
      <div className="container-page flex flex-col items-start gap-8 py-20 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl">{t.home.ctaTitle}</h2>
          <p className="mt-4 text-forest-foreground/80">{t.home.ctaBody}</p>
        </div>
        <Link to="/contact" className="btn btn-ivory shrink-0">{t.nav.inquire} <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  );
}
