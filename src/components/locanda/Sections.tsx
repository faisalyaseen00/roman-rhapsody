import { ArrowRight, ChevronDown, GlassWater, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { assets, restaurant, t } from "@/data/content";
import { useLanguage } from "@/lib/i18n";
import { DepthCard } from "./DepthCard";
const HeroScene = lazy(() => import("@/components/three/HeroScene"));

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return <motion.div className={className} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .75, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}

export function Hero() {
  const { text } = useLanguage();
  return <section className="relative min-h-[92svh] overflow-hidden bg-foreground text-hero-foreground">
    <img src={assets.hero} alt="Editorial concept of candlelit dining beneath Mediterranean architecture" className="absolute inset-0 h-full w-full object-cover opacity-55" width={1920} height={1280} fetchPriority="high" />
    <div className="hero-vignette absolute inset-0" />
    <div className="absolute inset-0 hidden opacity-65 md:block"><Suspense fallback={null}><HeroScene /></Suspense></div>
    <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-[1400px] flex-col items-center justify-center px-5 pb-16 pt-28 text-center">
      <p className="eyebrow mb-6 text-gold">Example Street · Demo City</p>
      <h1 className="max-w-6xl font-display text-[clamp(3.4rem,9vw,8.8rem)] font-medium uppercase leading-[0.78]">Demo<br /><span className="text-[.56em] italic text-ivory-soft">Trattoria</span></h1>
      <p className="mt-8 font-display text-2xl italic md:text-4xl">{text({ it: "Sapori autentici nel cuore di Demo City", en: "Authentic Italian flavors in the heart of Demo City" })}</p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild variant="hero" size="xl"><Link to="/menu">{text({ it: "Scopri il menu", en: "Discover the menu" })}<ArrowRight /></Link></Button><Button asChild variant="heroOutline" size="xl"><a href={restaurant.phoneHref}>{text(t.reserve)}</a></Button></div>
      <div className="absolute bottom-7 flex flex-col items-center gap-2 text-[10px] uppercase text-hero-foreground/60"><span>{text({ it: "Inizia il viaggio", en: "Begin the journey" })}</span><ChevronDown size={16} className="animate-bounce" /></div>
    </div>
  </section>;
}

export function Intro() {
  const { text } = useLanguage();
  return <section className="section-shell overflow-hidden"><Reveal><p className="mx-auto max-w-5xl text-center font-display text-[clamp(2.5rem,6vw,6rem)] leading-[.98]">{text({ it: "La cucina italiana raccontata nel cuore di Demo City.", en: "Italian cuisine, told in the heart of Demo City." })}</p></Reveal>
    <div className="mt-20 grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]"><Reveal className="image-frame"><img src={assets.interior} alt="Editorial concept image of an elegant Roman dining room" loading="lazy" width={1536} height={1280} className="aspect-[6/5] h-full w-full object-cover" /><span className="image-credit">{text(t.demo)}</span></Reveal><Reveal className="lg:px-10"><p className="eyebrow">La Nostra Cucina</p><h2 className="section-title mt-4">{text({ it: "Tradizione, mare e terra.", en: "Tradition, sea and land." })}</h2><p className="body-copy mt-6">{text({ it: "Una proposta italiana con influenze romane e mediterranee: pasta, pesce, carne, pizza, vini italiani e cocktail, nel centro di Roma.", en: "An Italian table shaped by Roman and Mediterranean influences: pasta, seafood, meat, pizza, Italian wines and cocktails, in central Rome." })}</p><Button asChild variant="text" className="mt-8"><Link to="/cucina">{text({ it: "Esplora la cucina", en: "Explore the cuisine" })}<ArrowRight /></Link></Button></Reveal></div>
  </section>;
}

const cuisine = [
  ["Cucina Romana", "Roman pasta classics and Italian culinary traditions.", "I"], ["Dal Mare", "Fresh seafood and Mediterranean flavors.", "II"], ["Dalla Terra", "Meat and regional specialties.", "III"], ["Pizza", "Italian-style pizza.", "IV"], ["Vini & Aperitivo", "Italian wines, Prosecco DOC and Aperol Spritz.", "V"],
];
export function CuisineCards() { const { lang } = useLanguage(); return <section className="section-shell border-y border-border"><p className="eyebrow">{lang === "it" ? "Esperienze" : "Experiences"}</p><h2 className="section-title mt-4">{lang === "it" ? "Cinque modi di assaporare l'Italia" : "Five ways to taste Italy"}</h2><div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-5">{cuisine.map(([name, desc, num]) => <DepthCard key={name} className="group min-h-64 bg-background p-6"><span className="font-display text-5xl text-gold/50">{num}</span><h3 className="mt-16 font-display text-2xl">{name}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{desc}</p></DepthCard>)}</div></section>; }

const dishes = [
  { name: "Tonnarelli Cacio e Pepe", image: assets.pasta, copy: "Pecorino e pepe, nella tradizione romana." },
  { name: "Spaghetti all'Astice", image: assets.seafood, copy: "Astice e pomodorini, sapori del Mediterraneo." },
  { name: "Fiorentina", image: assets.steak, copy: "La tradizione italiana della carne alla griglia." },
  { name: "Tiramisù", image: assets.tiramisu, copy: "Il classico dolce italiano fatto in casa." },
];
export function DishShowcase() { const { text } = useLanguage(); return <section className="section-shell bg-foreground text-background"><Reveal><p className="eyebrow text-gold">{text({ it: "Un assaggio di Roma", en: "A taste of Rome" })}</p><h2 className="section-title mt-4 max-w-3xl">{text({ it: "Piatti che parlano italiano.", en: "Dishes that speak Italian." })}</h2><p className="mt-4 text-sm text-background/55">{text({ it: "Una selezione editoriale ispirata agli esempi pubblici del menu.", en: "An editorial selection inspired by publicly available menu examples." })}</p></Reveal><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{dishes.map((dish, index) => <DepthCard key={dish.name} className={index % 2 ? "lg:mt-14" : ""}><div className="group relative overflow-hidden"><img src={dish.image} alt={`Editorial image: ${dish.name}`} loading="lazy" width={1280} height={1536} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/95 to-transparent p-6 pt-24"><h3 className="font-display text-3xl">{dish.name}</h3><p className="mt-2 text-xs leading-5 text-background/65">{dish.copy}</p></div></div></DepthCard>)}</div></section>; }

export function MenuPreview() { const { text } = useLanguage(); return <section className="section-shell grid items-center gap-12 lg:grid-cols-2"><Reveal><p className="eyebrow">Menu</p><h2 className="section-title mt-4">{text({ it: "Dalla prima portata all'ultimo brindisi.", en: "From the first course to the final toast." })}</h2><p className="body-copy mt-6">{text({ it: "Esplora antipasti, primi, piatti di mare e di terra, pizza, dolci, vini e cocktail. Il menu online è una selezione dimostrativa, senza prezzi non verificati.", en: "Explore starters, pasta, seafood, meat, pizza, desserts, wines and cocktails. The online menu is a demonstration selection without unverified prices." })}</p><Button asChild size="xl" className="mt-8"><Link to="/menu">{text({ it: "Apri il menu", en: "Open the menu" })}<UtensilsCrossed /></Link></Button></Reveal><Reveal className="relative"><img src={assets.pizza} alt="Editorial image of Italian pizza" loading="lazy" width={1280} height={1536} className="ml-auto aspect-[4/5] w-[82%] object-cover" /><div className="absolute -bottom-6 left-0 border border-border bg-background p-6 shadow-elevated"><p className="font-display text-3xl">15</p><p className="text-[10px] uppercase text-muted-foreground">{text({ it: "categorie da esplorare", en: "categories to explore" })}</p></div></Reveal></section>; }

export function WineAperitivo() { const { text } = useLanguage(); return <section className="relative min-h-[80vh] overflow-hidden bg-foreground text-background"><img src={assets.wine} alt="Editorial image of Prosecco and Aperol Spritz in Demo City" loading="lazy" width={1536} height={1280} className="absolute inset-0 h-full w-full object-cover opacity-65" /><div className="hero-vignette absolute inset-0" /><div className="section-shell relative z-10 flex min-h-[80vh] items-end"><div className="max-w-2xl"><GlassWater className="mb-6 text-gold" /><p className="eyebrow text-gold">Vini d'Italia</p><h2 className="section-title mt-4">{text({ it: "Un aperitivo a Demo City", en: "An aperitivo in Demo City" })}</h2><p className="mt-6 max-w-lg text-background/70">{text({ it: "Vini italiani, Prosecco DOC e Aperol Spritz accompagnano il ritmo della sera.", en: "Italian wines, Prosecco DOC and Aperol Spritz accompany the rhythm of the evening." })}</p></div></div></section>; }

export function GalleryPreview() { const { text } = useLanguage(); const pics = [assets.interior, assets.pasta, assets.seafood]; return <section className="section-shell"><div className="flex items-end justify-between"><div><p className="eyebrow">Gallery</p><h2 className="section-title mt-3">{text({ it: "Atmosfere italiane", en: "Italian atmospheres" })}</h2></div><Button asChild variant="text" className="hidden sm:inline-flex"><Link to="/gallery">{text({ it: "Vedi la gallery", en: "View gallery" })}<ArrowRight /></Link></Button></div><div className="mt-10 grid gap-5 md:grid-cols-[1.3fr_.7fr]">{pics.map((src, i) => <DepthCard key={src} className={i === 0 ? "md:row-span-2" : ""}><img src={src} alt="Replaceable editorial restaurant concept imagery" loading="lazy" width={i === 0 ? 1536 : 1280} height={1280} className={i === 0 ? "aspect-[4/5] h-full w-full object-cover md:aspect-auto" : "aspect-[16/9] w-full object-cover"} /></DepthCard>)}</div><p className="mt-4 text-[10px] uppercase text-muted-foreground">{text(t.demo)}</p></section>; }

export function LocationPreview() { const { text } = useLanguage(); return <section className="section-shell border-t border-border"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><Reveal><MapPin className="text-terracotta" /><p className="eyebrow mt-6">{text({ it: "Nel cuore di Demo City", en: "In the heart of Demo City" })}</p><h2 className="section-title mt-4">Example Street, 123</h2><p className="mt-5 text-muted-foreground">00000 Demo City · Demo Country</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild><a href={restaurant.map} target="_blank" rel="noreferrer">{text({ it: "Apri la mappa", en: "Open map" })}<ArrowRight /></a></Button><Button asChild variant="outline"><a href={restaurant.phoneHref}><Phone />{restaurant.phoneDisplay}</a></Button></div></Reveal><a className="map-panel" href={restaurant.map} target="_blank" rel="noreferrer" aria-label="Open demo location"><div className="map-grid" /><span className="map-pin"><MapPin /></span><span className="map-label">DEMO TRATTORIA<br /><small>EXAMPLE STREET · DEMO CITY</small></span></a></div></section>; }

export function ReservationCTA() { const { text } = useLanguage(); return <section className="bg-terracotta px-6 py-20 text-center text-terracotta-foreground md:py-28"><p className="eyebrow opacity-70">Demo City ti aspetta</p><h2 className="mx-auto mt-5 max-w-4xl font-display text-[clamp(3rem,7vw,7rem)] leading-[.9]">{text({ it: "Il tuo tavolo nel cuore di Demo City.", en: "Your table in the heart of Demo City." })}</h2><p className="mx-auto mt-6 max-w-xl text-sm opacity-75">{text({ it: "Per prenotare, chiama direttamente il ristorante.", en: "To reserve, call the restaurant directly." })}</p><Button asChild variant="ivory" size="xl" className="mt-9"><a href={restaurant.phoneHref}><Phone />{text(t.reserve)}</a></Button></section>; }
