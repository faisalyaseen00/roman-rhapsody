import { Link, useRouterState } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { restaurant, t, type Lang } from "@/data/content";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", key: "home" }, { to: "/cucina", key: "cucina" }, { to: "/menu", key: "menu" },
  { to: "/gallery", key: "gallery" }, { to: "/location", key: "location" }, { to: "/contact", key: "contact" },
] as const;

export function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const { lang, setLang } = useLanguage();
  return <div className={cn("flex items-center gap-1 text-[11px] font-semibold uppercase", light ? "text-hero-foreground" : "text-foreground")} aria-label="Language">
    {(["it", "en"] as Lang[]).map((item, i) => <span key={item} className="flex items-center gap-1">
      {i > 0 && <span className="opacity-40">/</span>}
      <button aria-pressed={lang === item} onClick={() => setLang(item)} className={cn("focus-ring px-1 py-2 uppercase transition-opacity", lang === item ? "opacity-100" : "opacity-45 hover:opacity-80")}>{item}</button>
    </span>)}
  </div>;
}

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { text } = useLanguage();
  const onHero = pathname === "/" && !scrolled;
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  return <>
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", onHero ? "bg-transparent py-3 text-hero-foreground" : "border-b border-border/70 bg-background/92 py-1 text-foreground backdrop-blur-xl")}>
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 lg:px-8">
        <Link to="/" className="focus-ring max-w-[180px] font-display text-[18px] leading-[0.95] uppercase lg:max-w-none lg:text-xl">La Locanda <span className="block text-[0.62em] font-body font-medium uppercase opacity-70">del Tempio · Roma</span></Link>
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
          {nav.map((item) => <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="story-link py-2 text-[11px] font-semibold uppercase text-current opacity-75 transition-opacity hover:opacity-100" activeProps={{ className: "opacity-100" }}>{text(t.nav[item.key])}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher light={onHero} />
          <Button asChild variant={onHero ? "hero" : "default"} size="sm" className="hidden lg:inline-flex"><a href={restaurant.phoneHref}><Phone />{text(t.reserve)}</a></Button>
          <Button variant="ghost" size="icon" aria-label="Open menu" onClick={() => setOpen(true)} className="xl:hidden"><Menu /></Button>
        </div>
      </div>
    </header>
    {open && <div className="fixed inset-0 z-[70] flex flex-col bg-foreground p-6 text-background animate-in fade-in duration-300">
      <div className="flex items-center justify-between"><span className="font-display text-xl uppercase">La Locanda del Tempio</span><Button variant="ghostLight" size="icon" aria-label="Close menu" onClick={() => setOpen(false)}><X /></Button></div>
      <nav className="my-auto flex flex-col" aria-label="Mobile navigation">{nav.map((item) => <Link key={item.to} to={item.to} className="border-b border-background/15 py-4 font-display text-4xl">{text(t.nav[item.key])}</Link>)}</nav>
      <a className="flex items-center gap-3 text-sm" href={restaurant.phoneHref}><Phone size={16} />{restaurant.phoneDisplay}</a>
    </div>}
  </>;
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => { const update = () => setProgress(window.scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)); update(); addEventListener("scroll", update, { passive: true }); return () => removeEventListener("scroll", update); }, []);
  return <div className="fixed left-0 top-0 z-[80] h-[2px] bg-gold transition-[width]" style={{ width: `${progress * 100}%` }} />;
}

export function Footer() {
  const { text } = useLanguage();
  return <footer className="bg-foreground pb-24 pt-16 text-background md:pb-8">
    <div className="mx-auto grid max-w-[1440px] gap-12 px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
      <div><p className="font-display text-4xl uppercase">La Locanda<br />del Tempio</p><p className="mt-4 max-w-sm text-sm text-background/60">{text({ it: "Cucina italiana e romana con influenze mediterranee nel centro di Roma.", en: "Italian and Roman cuisine with Mediterranean influences in central Rome." })}</p><p className="mt-5 text-[10px] uppercase text-background/45">{text(t.demo)}</p></div>
      <div className="space-y-3 text-sm"><p className="eyebrow text-gold">Roma</p><a className="flex gap-2" href={restaurant.map} target="_blank" rel="noreferrer"><MapPin size={16} />{restaurant.addressLines.join(", ")}</a><a className="flex gap-2" href={restaurant.phoneHref}><Phone size={16} />{restaurant.phoneDisplay}</a><a className="flex gap-2 break-all" href={`mailto:${restaurant.email}`}><Mail size={16} />{restaurant.email}</a></div>
      <div className="space-y-3"><p className="eyebrow text-gold">{text({ it: "Esplora", en: "Explore" })}</p>{nav.slice(1).map((item) => <Link key={item.to} to={item.to} className="block text-sm text-background/70 hover:text-background">{text(t.nav[item.key])}</Link>)}<a href={restaurant.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-2 pt-2 text-sm"><Facebook size={15} />Facebook</a></div>
    </div>
    <div className="mx-auto mt-14 flex max-w-[1440px] items-center justify-between border-t border-background/15 px-6 pt-6 text-xs text-background/45 lg:px-10"><span>© 2026 La Locanda del Tempio — concept</span><LanguageSwitcher light /></div>
  </footer>;
}

export function MobileActions() {
  const { text } = useLanguage();
  return <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-3 border border-border bg-background/95 shadow-elevated backdrop-blur-xl md:hidden"><a className="mobile-action" href={restaurant.phoneHref}><Phone />{text({ it: "Chiama", en: "Call" })}</a><Link className="mobile-action border-x border-border" to="/menu"><Menu />Menu</Link><a className="mobile-action" href={restaurant.phoneHref}><Phone />{text({ it: "Prenota", en: "Reserve" })}</a></div>;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return <><ScrollProgress /><Navbar /><main>{children}</main><Footer /><MobileActions /></>;
}
