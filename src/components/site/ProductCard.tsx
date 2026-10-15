import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { getOrigin, type Product, type Species } from "@/data/products";
import { useI18n } from "@/i18n/LanguageProvider";
import beans from "@/assets/green-coffee-photo.jpg.asset.json";
import harvest from "@/assets/coffee-harvest-photo.jpg.asset.json";

export const speciesImage: Record<Species, string> = { excelsa: beans.url, arabica: beans.url, robusta: beans.url };
export const originImage = (species: Species) => (species === "arabica" ? harvest.url : harvest.url);

export function ProductCard({ product }: { product: Product }) {
  const { t, lang } = useI18n();
  const origin = getOrigin(product.originId);
  return (
    <article className="group flex flex-col border border-border bg-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={speciesImage[origin.species]} alt="Unroasted coffee beans — reference photograph, not the actual lot" loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-3 top-3 bg-background/90 px-2 py-1 text-xs font-semibold tracking-wider">No. {product.no}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">{origin.line} · {t.species[origin.species]}</p>
        <h3 className="mt-2 text-2xl leading-tight text-forest-deep">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{origin.title}</p>
        <p className="mt-4 text-sm italic">{product.flavor[lang]}</p>
        <dl className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-border pt-4 text-xs">
          <div><dt className="text-muted-foreground">{t.spec.process}</dt><dd className="font-medium">{product.process[lang]}</dd></div>
          <div><dt className="text-muted-foreground">{t.spec.moisture}</dt><dd className="font-medium">{product.moisture}</dd></div>
        </dl>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <Link to="/products/$slug" params={{ slug: product.slug }} className="btn btn-primary !py-2 !px-3 flex-1">
            {t.common.viewDetails} <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" search={{ product: product.slug }} className="btn btn-outline !py-2 !px-3 text-forest flex-1">
            {t.nav.inquire}
          </Link>
        </div>
      </div>
    </article>
  );
}
