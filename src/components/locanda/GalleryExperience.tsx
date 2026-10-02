import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { assets } from "@/data/content";
import { useLanguage } from "@/lib/i18n";
import { DepthCard } from "./DepthCard";
const photos = [
  { src: assets.pasta, cat: "Piatti", name: "Cacio e pepe" }, { src: assets.interior, cat: "Interni", name: "Atmosfera romana" },
    { src: assets.pasta, cat: "Piatti", name: "Cacio e pepe" }, { src: assets.interior, cat: "Interni", name: "Atmosfera mediterranea" },
  { src: assets.seafood, cat: "Piatti", name: "Sapori del mare" }, { src: assets.wine, cat: "Demo City", name: "Aperitivo a Demo City" },
  { src: assets.steak, cat: "Dining", name: "Dalla terra" }, { src: assets.pizza, cat: "Piatti", name: "Pizza italiana" },
  { src: assets.tiramisu, cat: "Atmosfera", name: "Dolce italiano" }, { src: assets.hero, cat: "Demo City", name: "Demo City di sera" },
];
const filters = ["Tutto", "Piatti", "Interni", "Atmosfera", "Dining", "Demo City"];
export function GalleryExperience() {
  const { text } = useLanguage(); const [filter, setFilter] = useState("Tutto"); const [selected, setSelected] = useState<number | null>(null);
  const visible = photos.filter((p) => filter === "Tutto" || p.cat === filter);
  const shift = (delta: number) => setSelected((current) => current === null ? null : (current + delta + visible.length) % visible.length);
  useEffect(() => { const key = (e: KeyboardEvent) => { if (e.key === "ArrowRight") shift(1); if (e.key === "ArrowLeft") shift(-1); }; addEventListener("keydown", key); return () => removeEventListener("keydown", key); }, [visible.length]);
  return <><div className="no-scrollbar mb-10 flex gap-2 overflow-x-auto">{filters.map((item) => <Button key={item} variant={filter === item ? "default" : "outline"} onClick={() => { setFilter(item); setSelected(null); }}>{item}</Button>)}</div><div className="columns-1 gap-5 md:columns-2 lg:columns-3">{visible.map((photo, i) => <DepthCard key={`${photo.src}-${i}`} className="mb-5 break-inside-avoid"><button className="group relative w-full overflow-hidden focus-ring" onClick={() => setSelected(i)}><img src={photo.src} alt={`Replaceable editorial concept: ${photo.name}`} loading="lazy" width={1280} height={1536} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" /><span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/90 to-transparent p-5 pt-20 text-left text-background"><small className="eyebrow text-gold">{photo.cat}</small><strong className="mt-2 block font-display text-2xl">{photo.name}</strong></span></button></DepthCard>)}</div><p className="mt-8 text-[10px] uppercase text-muted-foreground">{text({ it: "Immagini editoriali di concept — non fotografie ufficiali del ristorante.", en: "Editorial concept images — not official restaurant photography." })}</p><Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}><DialogContent className="max-w-5xl border-none bg-foreground p-3 text-background sm:rounded-none">{selected !== null && visible[selected] && <><DialogTitle className="sr-only">{visible[selected].name}</DialogTitle><DialogDescription className="sr-only">Editorial concept image</DialogDescription><img src={visible[selected].src} alt={`Editorial concept: ${visible[selected].name}`} className="max-h-[78vh] w-full object-contain" /><div className="flex items-center justify-between p-3"><Button variant="ghostLight" size="icon" onClick={() => shift(-1)} aria-label="Previous image"><ChevronLeft /></Button><span className="font-display text-2xl">{visible[selected].name}</span><Button variant="ghostLight" size="icon" onClick={() => shift(1)} aria-label="Next image"><ChevronRight /></Button></div></>}</DialogContent></Dialog></>;
}
