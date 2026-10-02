import hero from "@/assets/locanda-rome-dining.jpg";
import pasta from "@/assets/locanda-pasta.jpg";
import seafood from "@/assets/locanda-seafood.jpg";
import wine from "@/assets/locanda-wine.jpg";
import steak from "@/assets/locanda-steak.jpg";
import pizza from "@/assets/locanda-pizza.jpg";
import tiramisu from "@/assets/locanda-tiramisu.jpg";
import interior from "@/assets/locanda-interior.jpg";

export type Lang = "it" | "en";
export type Localized = { it: string; en: string };
export type MenuDish = { id: string; category: string; name: string; description: Localized; image?: string };

export const assets = { hero, pasta, seafood, wine, steak, pizza, tiramisu, interior };

export const restaurant = {
  name: "La Locanda del Tempio",
  addressLines: ["Via di Pietra, 85", "00186 Roma RM", "Italia"],
  phoneDisplay: "+39 06 4754 5886",
  phoneHref: "tel:+390647545886",
  email: "mcristorazionesrl@gmail.com",
  facebook: "https://www.facebook.com/lalocandadeltempioroma",
  map: "https://www.google.com/maps/search/?api=1&query=Via+di+Pietra+85+00186+Roma+RM+Italy",
};

export const categories: { id: string; label: Localized }[] = [
  { id: "terra", label: { it: "Antipasti di Terra", en: "Land Starters" } },
  { id: "mare-antipasti", label: { it: "Antipasti di Mare", en: "Seafood Starters" } },
  { id: "primi", label: { it: "Primi Piatti", en: "First Courses" } },
  { id: "primi-mare", label: { it: "Primi Piatti di Mare", en: "Seafood Pasta" } },
  { id: "carne", label: { it: "Secondi di Carne", en: "Meat Main Courses" } },
  { id: "pesce", label: { it: "Secondi di Pesce", en: "Fish Main Courses" } },
  { id: "contorni", label: { it: "Contorni", en: "Side Dishes" } },
  { id: "zuppe", label: { it: "Zuppe", en: "Soups" } },
  { id: "insalate", label: { it: "Insalate", en: "Salads" } },
  { id: "pizza", label: { it: "Pizza", en: "Pizza" } },
  { id: "dolci", label: { it: "Dolci", en: "Desserts" } },
  { id: "caffe", label: { it: "Caffetteria", en: "Coffee" } },
  { id: "bevande", label: { it: "Bevande", en: "Drinks" } },
  { id: "vini", label: { it: "Vini", en: "Wines" } },
  { id: "cocktail", label: { it: "Cocktail", en: "Cocktails" } },
];

export const menuDishes: MenuDish[] = [
  { id: "bruschetta-aglio", category: "terra", name: "Bruschetta aglio e olio", description: { it: "Pane tostato, aglio e olio extravergine.", en: "Toasted bread, garlic and extra virgin olive oil." } },
  { id: "olive", category: "terra", name: "Olive", description: { it: "Olive servite secondo la tradizione italiana.", en: "Olives served in the Italian tradition." } },
  { id: "olive-ascolane", category: "terra", name: "Olive ascolane", description: { it: "Olive ascolane dorate.", en: "Golden fried Ascoli-style olives." } },
  { id: "suppli", category: "terra", name: "Supplì", description: { it: "Classico supplì romano.", en: "A classic Roman supplì." } },
  { id: "crocchette", category: "terra", name: "Crocchette di patate", description: { it: "Crocchette di patate dorate.", en: "Golden potato croquettes." } },
  { id: "bruschetta-pomodoro", category: "terra", name: "Bruschetta al pomodoro", description: { it: "Pane tostato e pomodoro.", en: "Toasted bread with tomato." } },
  { id: "porcini-tartufo", category: "primi", name: "Fettuccine ai funghi porcini e tartufo", description: { it: "Fettuccine con funghi porcini e tartufo.", en: "Fettuccine with porcini mushrooms and truffle." }, image: pasta },
  { id: "carbonara", category: "primi", name: "Mezzi rigatoni alla carbonara", description: { it: "Un grande classico della cucina romana.", en: "A celebrated classic of Roman cooking." }, image: pasta },
  { id: "cacio-pepe", category: "primi", name: "Tonnarelli cacio e pepe", description: { it: "Tonnarelli nella tradizione romana del cacio e pepe.", en: "Tonnarelli in the Roman cacio e pepe tradition." }, image: pasta },
  { id: "gricia", category: "primi", name: "Mezzi rigatoni alla gricia", description: { it: "Mezzi rigatoni in stile romano.", en: "Mezzi rigatoni in classic Roman style." } },
  { id: "gnocchetti", category: "primi", name: "Gnocchetti di patate al pomodoro e basilico", description: { it: "Gnocchetti di patate con pomodoro e basilico.", en: "Potato gnocchi with tomato and basil." } },
  { id: "vongole-porcini", category: "primi-mare", name: "Fettuccine vongole, pomodoro datterino e funghi porcini", description: { it: "Fettuccine con sapori di mare e terra.", en: "Fettuccine bringing together flavors of sea and land." }, image: seafood },
  { id: "astice", category: "primi-mare", name: "Spaghetti all'astice con pomodorini", description: { it: "Spaghetti all'astice con pomodorini.", en: "Lobster spaghetti with cherry tomatoes." }, image: seafood },
  { id: "entrecote", category: "carne", name: "Entrecote alla griglia con tartufo", description: { it: "Entrecote alla griglia con tartufo.", en: "Grilled entrecôte with truffle." }, image: steak },
  { id: "tagliata", category: "carne", name: "Tagliata di manzo con rucola e pomodori glassati", description: { it: "Tagliata di manzo con rucola e pomodori glassati all'aceto balsamico.", en: "Sliced beef with rocket and balsamic-glazed tomatoes." }, image: steak },
  { id: "agnello", category: "carne", name: "Agnello ai ferri", description: { it: "Agnello cotto alla griglia.", en: "Grilled lamb." } },
  { id: "calamari", category: "pesce", name: "Frittura di calamari", description: { it: "Calamari fritti dorati.", en: "Golden fried calamari." }, image: seafood },
  { id: "calamari-gamberi", category: "pesce", name: "Frittura di calamari e gamberi", description: { it: "Frittura di calamari e gamberi.", en: "Fried calamari and prawns." }, image: seafood },
  { id: "gamberoni", category: "pesce", name: "Gamberoni alla griglia", description: { it: "Gamberoni cotti alla griglia.", en: "Grilled king prawns." }, image: seafood },
  { id: "pizza-italiana", category: "pizza", name: "Pizza italiana", description: { it: "Pizza nello stile della tradizione italiana.", en: "Pizza in the Italian tradition." }, image: pizza },
  { id: "tiramisu", category: "dolci", name: "Tiramisù fatto in casa", description: { it: "Il classico dolce italiano fatto in casa.", en: "The classic homemade Italian dessert." }, image: tiramisu },
  { id: "cheesecake", category: "dolci", name: "Cheesecake", description: { it: "Cheesecake.", en: "Cheesecake." }, image: tiramisu },
  { id: "panna-cotta", category: "dolci", name: "Panna cotta", description: { it: "Tradizionale panna cotta.", en: "Traditional panna cotta." }, image: tiramisu },
  { id: "vino-italiano", category: "vini", name: "Vino Italiano", description: { it: "Una selezione di vini italiani.", en: "A selection of Italian wines." }, image: wine },
  { id: "prosecco", category: "vini", name: "Prosecco DOC", description: { it: "Prosecco DOC per brindare a Roma.", en: "Prosecco DOC for a toast in Rome." }, image: wine },
  { id: "aperol", category: "cocktail", name: "Aperol Spritz", description: { it: "Il classico aperitivo italiano.", en: "The classic Italian aperitivo." }, image: wine },
];

export const t = {
  nav: { home: { it: "Home", en: "Home" }, cucina: { it: "La Cucina", en: "Cuisine" }, menu: { it: "Menu", en: "Menu" }, gallery: { it: "Gallery", en: "Gallery" }, location: { it: "Dove siamo", en: "Location" }, contact: { it: "Contatti", en: "Contact" } },
  reserve: { it: "Prenota un tavolo", en: "Reserve a table" },
  demo: { it: "Concept dimostrativo — immagini editoriali sostituibili", en: "Demonstration concept — replaceable editorial imagery" },
};
