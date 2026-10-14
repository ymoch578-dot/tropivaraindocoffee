// Product data transcribed from "Export Catalog – September 2026".
// Prices are intentionally omitted (no public pricing). Only fields present in the catalog are listed.
import type { Lang } from "@/i18n/translations";

type L = Record<Lang, string>;
export type Species = "excelsa" | "arabica" | "robusta";

export interface Origin {
  id: string;
  title: string;
  location: string;
  species: Species;
  speciesLabel: string;
  altitude?: string;
  note?: L;
  line: "Yatra" | "Tanah";
}

export interface Product {
  slug: string;
  no: string;
  name: string;
  originId: string;
  tags: string[];
  process: L;
  flavor: L;
  moisture: string;
  screenDefect: string;
  capacity: L;
}

export const lines = {
  Yatra: { tagline: "The Indonesian Excelsa House", scope: "Excelsa · Wonosalam, East Java" },
  Tanah: { tagline: "The Indonesian Arabica & Robusta House", scope: "Robusta & Arabica · Pan-Indonesia" },
} as const;

export const origins: Origin[] = [
  { id: "wonosalam", title: "Wonosalam Rare Origins", location: "Wonosalam · Jombang · East Java", species: "excelsa", speciesLabel: "Excelsa (Liberica var. Dewevrei)", line: "Yatra" },
  { id: "gayo", title: "Arabica Gayo", location: "Gayo Highlands · Aceh", species: "arabica", speciesLabel: "Arabica", altitude: "1,200–1,600 mdpl", line: "Tanah" },
  { id: "ijen", title: "Arabica Ijen Highlands", location: "Banyuwangi · East Java", species: "arabica", speciesLabel: "Arabica", altitude: "1,200–1,500 mdpl", line: "Tanah" },
  { id: "temanggung", title: "Robusta Temanggung", location: "Temanggung · Central Java", species: "robusta", speciesLabel: "Robusta", note: { en: "Routed via Semarang", id: "Dikirim melalui Semarang" }, line: "Tanah" },
  { id: "pagar-alam", title: "Robusta Pagar Alam", location: "Pagar Alam · South Sumatra", species: "robusta", speciesLabel: "Robusta", altitude: "800–1,100 mdpl", line: "Tanah" },
];

const perSeason = (n: string): L => ({ en: `${n} Tons / season`, id: `${n} Ton / musim` });
const perMonth = (n: string): L => ({ en: `${n} Tons / month`, id: `${n} Ton / bulan` });
const perWeek = (n: string): L => ({ en: `${n} Tons / week`, id: `${n} Ton / minggu` });

export const products: Product[] = [
  { slug: "excelsa-petik-merah-specialty", no: "01", name: "Excelsa Petik Merah | Specialty", originId: "wonosalam", tags: ["Rare Variety", "Hand-Picked"],
    process: { en: "Pulp honey natural, hand-picked ripe cherry", id: "Pulp honey natural, ceri matang dipetik tangan" },
    flavor: { en: "Dried fruit, caramel, cashew, jackfruit", id: "Buah kering, karamel, kacang mete, nangka" },
    moisture: "10–12%", screenDefect: "Screen 14–15 / 10 defect pts", capacity: perSeason("4") },
  { slug: "excelsa-grade-1", no: "02", name: "Excelsa Grade 1", originId: "wonosalam", tags: ["Rare Variety", "Pulp Honey"],
    process: { en: "Pulp honey natural", id: "Pulp honey natural" },
    flavor: { en: "Jackfruit, blueberry, chocolate finish", id: "Nangka, blueberry, akhir rasa cokelat" },
    moisture: "10–12%", screenDefect: "Screen 14–15 / 25 defect pts", capacity: perSeason("24") },
  { slug: "excelsa-natural-anaerob", no: "03", name: "Excelsa Natural Anaerob", originId: "wonosalam", tags: ["Rare Variety", "Anaerob"],
    process: { en: "Natural Anaerob", id: "Natural Anaerob" },
    flavor: { en: "Dark rum, ripe jackfruit, prune, cacao nibs", id: "Rum gelap, nangka matang, prune, cacao nibs" },
    moisture: "10–13%", screenDefect: "Screen 14–15 / 25 defect pts", capacity: perSeason("5") },
  { slug: "arabica-gayo-natural-grade-1", no: "04", name: "Natural Grade 1", originId: "gayo", tags: ["Natural", "Single Origin"],
    process: { en: "Natural, sun-dried on raised beds", id: "Natural, dijemur matahari di para-para" },
    flavor: { en: "Tropical fruit, syrupy body, dark chocolate, herbal finish", id: "Buah tropis, body kental seperti sirup, cokelat hitam, akhir rasa herbal" },
    moisture: "≤12%", screenDefect: "Screen 16+ / ≤11 defect pts", capacity: perMonth("20") },
  { slug: "arabica-gayo-natural-commercial", no: "05", name: "Natural Commercial", originId: "gayo", tags: ["Natural", "Single Origin"],
    process: { en: "Natural, sun-dried on raised beds", id: "Natural, dijemur matahari di para-para" },
    flavor: { en: "Dark chocolate, wet tobacco, cedar wood", id: "Cokelat hitam, tembakau basah, kayu cedar" },
    moisture: "≤12%", screenDefect: "Screen 14+ / ≤80 defect pts", capacity: perMonth("20") },
  { slug: "arabica-ijen-full-washed-grade-1", no: "06", name: "Full Washed Grade 1", originId: "ijen", tags: ["Fully Washed"],
    process: { en: "Fully washed", id: "Fully washed" },
    flavor: { en: "Bright & clean, citrus, bergamot", id: "Cerah & bersih, sitrus, bergamot" },
    moisture: "≤12%", screenDefect: "Screen 16+ / ≤11 defect pts", capacity: perWeek("10") },
  { slug: "arabica-ijen-natural-grade-1", no: "07", name: "Natural Grade 1", originId: "ijen", tags: ["Natural"],
    process: { en: "Natural", id: "Natural" },
    flavor: { en: "Citrus, mild acidity", id: "Sitrus, keasaman lembut" },
    moisture: "≤12%", screenDefect: "Screen 16+ / ≤11 defect pts", capacity: perWeek("10") },
  { slug: "robusta-temanggung-natural-grade-1", no: "08", name: "Natural Grade 1", originId: "temanggung", tags: ["Natural", "Sorted"],
    process: { en: "Natural, sorted", id: "Natural, disortir" },
    flavor: { en: "Earthy, tobacco, dark cocoa, heavy body", id: "Earthy, tembakau, kakao gelap, body tebal" },
    moisture: "≤13%", screenDefect: "Screen 16 / ≤11 defect pts", capacity: perWeek("20") },
  { slug: "robusta-temanggung-natural-grade-3", no: "09", name: "Natural Grade 3", originId: "temanggung", tags: ["Natural", "Sorted"],
    process: { en: "Natural, sorted", id: "Natural, disortir" },
    flavor: { en: "Bold dark cocoa, roasted peanut, heavy body, earthy undertones", id: "Kakao gelap yang tegas, kacang sangrai, body tebal, nuansa earthy" },
    moisture: "≤13%", screenDefect: "Screen 14–16 / ≤80 defect pts", capacity: perWeek("20") },
  { slug: "robusta-pagar-alam-grade-1", no: "10", name: "Grade 1", originId: "pagar-alam", tags: ["Natural", "Sorted"],
    process: { en: "Natural, sorted", id: "Natural, disortir" },
    flavor: { en: "Bold, heavy body, dark chocolate, earthy", id: "Tegas, body tebal, cokelat hitam, earthy" },
    moisture: "≤15%", screenDefect: "Screen 16 / ≤11 defect pts", capacity: perWeek("10") },
  { slug: "robusta-pagar-alam-commercial-grade", no: "11", name: "Commercial Grade", originId: "pagar-alam", tags: ["Unsorted"],
    process: { en: "Natural", id: "Natural" },
    flavor: { en: "Bold, earthy, lowland robusta character", id: "Tegas, earthy, karakter robusta dataran rendah" },
    moisture: "15–18%", screenDefect: "Mixed, ungraded", capacity: perWeek("20") },
];

export const getOrigin = (id: string) => origins.find((o) => o.id === id)!;
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const productLabel = (p: Product) => `${getOrigin(p.originId).title} — ${p.name}`;
