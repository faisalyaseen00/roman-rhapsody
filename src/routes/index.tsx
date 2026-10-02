import { createFileRoute } from "@tanstack/react-router";
import { CuisineCards, DishShowcase, GalleryPreview, Hero, Intro, LocationPreview, MenuPreview, ReservationCTA, WineAperitivo } from "@/components/locanda/Sections";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({ meta: [
    { title: "Demo Trattoria | Italian Restaurant in Demo City" },
    { name: "description", content: "Discover Italian and Roman cuisine with Mediterranean influences at Demo Trattoria on Example Street in Demo City." },
    { property: "og:title", content: "Demo Trattoria | Italian Restaurant in Demo City" },
    { property: "og:description", content: "Italian and Roman cuisine with Mediterranean influences in Demo City." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/" }], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Restaurant", name: "Demo Trattoria", servesCuisine: ["Italian", "Roman", "Mediterranean", "Pizza", "Seafood"], telephone: "+1 555 010 0123", email: "hello@example.com", address: { "@type": "PostalAddress", streetAddress: "Example Street, 123", postalCode: "00000", addressLocality: "Demo City", addressRegion: "DM", addressCountry: "DC" }, sameAs: ["https://example.com/social"] }) }] }),
  component: HomePage,
});
function HomePage() { return <><Hero /><Intro /><CuisineCards /><DishShowcase /><MenuPreview /><WineAperitivo /><GalleryPreview /><LocationPreview /><ReservationCTA /></>; }