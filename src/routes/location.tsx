import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocationPreview, ReservationCTA } from "@/components/locanda/Sections";
import { restaurant } from "@/data/content";
export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location | Demo Trattoria Demo City" },
      {
        name: "description",
        content: "Find Demo Trattoria at Example Street 123, Demo City.",
      },
      { property: "og:title", content: "Location | Demo Trattoria" },
      { property: "og:description", content: "Example Street 123 in Demo City." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
  component: LocationPage,
});
function LocationPage() {
  const details = [
    { Icon: MapPin, label: restaurant.addressLines.join(", "), href: restaurant.map },
    { Icon: Phone, label: restaurant.phoneDisplay, href: restaurant.phoneHref },
    { Icon: Mail, label: restaurant.email, href: `mailto:${restaurant.email}` },
  ];
  return (
    <>
      <header className="page-hero">
        <p className="eyebrow text-gold">Example Street</p>
        <h1>Nel cuore di Demo City</h1>
        <p>Example Street, 123 · 00000 Demo City · Demo Country</p>
      </header>
      <LocationPreview />
      <section className="section-shell pt-0">
        <div className="grid gap-px bg-border md:grid-cols-3">
          {details.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex min-h-44 flex-col justify-between bg-background p-6 text-sm"
            >
              <Icon className="text-terracotta" />
              <span className="break-all">{label}</span>
            </a>
          ))}
        </div>
        <Button asChild size="xl" className="mt-8">
          <a href={restaurant.map} target="_blank" rel="noreferrer">
            Apri in Google Maps
          </a>
        </Button>
      </section>
      <ReservationCTA />
    </>
  );
}
