import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CuisineCards,
  DishShowcase,
  ReservationCTA,
  WineAperitivo,
} from "@/components/locanda/Sections";
import { assets } from "@/data/content";
import { useLanguage } from "@/lib/i18n";
export const Route = createFileRoute("/cucina")({
  head: () => ({
    meta: [
      { title: "La Cucina | Demo Trattoria" },
      {
        name: "description",
        content:
          "Italian and Roman culinary traditions, seafood, meat, pizza and Mediterranean flavors in Demo City.",
      },
      { property: "og:title", content: "La Cucina | Demo Trattoria" },
      { property: "og:description", content: "Explore Italian, Roman and Mediterranean cuisine." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cucina" }],
  }),
  component: CucinaPage,
});
function CucinaPage() {
  const { text } = useLanguage();
  return (
    <>
      <header className="page-hero page-hero-image">
        <img
          src={assets.interior}
          alt="Editorial concept of a Mediterranean dining room"
          width={1536}
          height={1280}
        />
        <div>
          <p className="eyebrow text-gold">La Nostra Cucina</p>
          <h1>
            {text({
              it: "Tradizione italiana, spirito mediterraneo.",
              en: "Italian tradition, Mediterranean spirit.",
            })}
          </h1>
            <p>
              {text({
                it: "Mare, terra, pasta, pizza e ospitalità nel centro di Demo City.",
                en: "Sea, land, pasta, pizza and hospitality in central Demo City.",
              })}
            </p>
        </div>
      </header>
      <section className="section-shell grid gap-10 lg:grid-cols-2">
        <div>
            <p className="eyebrow">Example Street · Demo City</p>
          <h2 className="section-title mt-4">
            {text({
              it: "Una tavola italiana contemporanea.",
              en: "A contemporary Italian table.",
            })}
          </h2>
        </div>
        <div>
          <p className="body-copy">
            {text({
              it: "La proposta riunisce cucina italiana, influenze romane e sapori mediterranei. Il menu attraversa specialità regionali, piatti di pesce, carne di qualità, pasta e pizza, accompagnati da vini italiani e cocktail.",
              en: "The offering brings together Italian cuisine, Roman influences and Mediterranean flavors, spanning regional specialties, seafood, quality meat, pasta and pizza, accompanied by Italian wines and cocktails.",
            })}
          </p>
          <Button asChild variant="text" className="mt-7">
            <Link to="/menu">
              Menu <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
      <CuisineCards />
      <DishShowcase />
      <WineAperitivo />
      <ReservationCTA />
    </>
  );
}
