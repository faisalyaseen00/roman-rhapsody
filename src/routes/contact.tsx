import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Mail, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { restaurant } from "@/data/content";
import { useLanguage } from "@/lib/i18n";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Reservations | Demo Trattoria" },
      {
        name: "description",
        content: "Call or email Demo Trattoria at Example Street 123 in Demo City.",
      },
      { property: "og:title", content: "Contact | Demo Trattoria" },
      {
        property: "og:description",
        content: "Contact and reservation details for Demo Trattoria in Demo City.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});
function ContactPage() {
  const { text } = useLanguage();
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <>
      <header className="page-hero">
        <p className="eyebrow text-gold">Contatti</p>
        <h1>{text({ it: "Parliamo a tavola.", en: "Let's meet at the table." })}</h1>
        <p>
          {text({
            it: "Per prenotare, contatta direttamente il ristorante.",
            en: "To reserve, contact the restaurant directly.",
          })}
        </p>
      </header>
      <section className="section-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <h2 className="font-display text-4xl">Demo Trattoria</h2>
          <p className="mt-5 text-muted-foreground">
            {restaurant.addressLines.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </p>
          <div className="mt-8 space-y-4">
            <a className="contact-link" href={restaurant.phoneHref}>
              <Phone />
              {restaurant.phoneDisplay}
            </a>
            <a className="contact-link" href={`mailto:${restaurant.email}`}>
              <Mail />
              {restaurant.email}
            </a>
            <a className="contact-link" href={restaurant.facebook} target="_blank" rel="noreferrer">
              <Facebook />
              Facebook
            </a>
          </div>
        </div>
        <div className="border border-border p-6 md:p-10">
          {sent ? (
            <div className="flex min-h-96 flex-col items-center justify-center text-center">
              <p className="eyebrow text-terracotta">Demo</p>
              <h2 className="mt-4 font-display text-4xl">
                {text({
                  it: "Messaggio acquisito nella demo.",
                  en: "Message captured in the demo.",
                })}
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                {text({
                  it: "Questo concept non invia messaggi. Usa telefono o email per contattare il ristorante.",
                  en: "This concept does not send messages. Use phone or email to contact the restaurant.",
                })}
              </p>
              <Button className="mt-7" onClick={() => setSent(false)}>
                {text({ it: "Nuovo messaggio", en: "New message" })}
              </Button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-6">
              <div>
                <label htmlFor="name" className="form-label">
                  {text({ it: "Nome", en: "Name" })}
                </label>
                <Input id="name" required />
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <label htmlFor="message" className="form-label">
                  {text({ it: "Messaggio", en: "Message" })}
                </label>
                <Textarea id="message" required className="min-h-40" />
              </div>
              <Button type="submit" size="xl">
                {text({ it: "Mostra stato demo", en: "Show demo state" })}
              </Button>
              <p className="text-xs text-muted-foreground">
                {text({
                  it: "Modulo dimostrativo: nessun messaggio verrà inviato.",
                  en: "Demo form: no message will be sent.",
                })}
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
