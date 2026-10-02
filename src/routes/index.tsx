import { createFileRoute } from "@tanstack/react-router";
import { CuisineCards, DishShowcase, GalleryPreview, Hero, Intro, LocationPreview, MenuPreview, ReservationCTA, WineAperitivo } from "@/components/locanda/Sections";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({ meta: [
    { title: "La Locanda del Tempio | Italian Restaurant in Rome" },
    { name: "description", content: "Discover Italian and Roman cuisine with Mediterranean influences at La Locanda del Tempio on Via di Pietra in central Rome." },
    { property: "og:title", content: "La Locanda del Tempio | Italian Restaurant in Rome" },
    { property: "og:description", content: "Italian and Roman cuisine with Mediterranean influences in central Rome." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/" }], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Restaurant", name: "La Locanda del Tempio", servesCuisine: ["Italian", "Roman", "Mediterranean", "Pizza", "Seafood"], telephone: "+39 06 4754 5886", email: "mcristorazionesrl@gmail.com", address: { "@type": "PostalAddress", streetAddress: "Via di Pietra, 85", postalCode: "00186", addressLocality: "Roma", addressRegion: "RM", addressCountry: "IT" }, sameAs: ["https://www.facebook.com/lalocandadeltempioroma"] }) }] }),
  component: HomePage,
});
function HomePage() { return <><Hero /><Intro /><CuisineCards /><DishShowcase /><MenuPreview /><WineAperitivo /><GalleryPreview /><LocationPreview /><ReservationCTA /></>; }