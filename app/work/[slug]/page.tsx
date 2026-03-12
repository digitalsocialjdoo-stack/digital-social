import CaseStudyClient from "../../../src/components/CaseStudyClient";

type StoryItem = {
  k: string;
  title: string;
  text: string;
};

type Project = {
  title: string;
  subtitle: string;
  image: string;
  stack: string[];
  results: string[];
  story: StoryItem[];
};

const projects: Record<string, Project> = {
  "restaurant-platform": {
    title: "Platforma za naručivanje hrane",
    subtitle: "Online narudžbe i SEO optimizacija za restorane.",
    image: "/work/p1.png",
    stack: [
      "Brza web platforma",
      "Optimizacija za mobilne uređaje",
      "SEO optimizacija za Google",
      "Moderan dizajn i UX",
    ],
    results: [
      "40% brže učitavanje stranice",
      "lakše online naručivanje",
      "više narudžbi",
    ],
    story: [
      {
        k: "Problem",
        title: "Nepregledan meni",
        text: "Gostima je teško brzo pronaći jela i ponudu.",
      },
      {
        k: "Rješenje",
        title: "Jednostavno naručivanje",
        text: "Meni je pojednostavljen za brži odabir hrane.",
      },
      {
        k: "Iskustvo",
        title: "Bolje korisničko iskustvo",
        text: "Jasna struktura stranice i moderan dizajn.",
      },
      {
        k: "Rezultat",
        title: "Više online narudžbi",
        text: "Brža stranica i lakše naručivanje na mobilnim uređajima.",
      },
    ],
  },

  "hotel-booking-ui": {
    title: "Vile i apartmani",
    subtitle: "Moderan booking sustav za smještaj i apartmane.",
    image: "/work/p2.png",
    stack: [
      "Sustav online rezervacija",
      "Optimizacija za mobilne uređaje",
      "Jasan prikaz smještaja",
      "Moderan dizajn i UX",
    ],
    results: [
      "jednostavniji booking",
      "bolji pregled ponude",
      "više upita i rezervacija",
    ],
    story: [
      {
        k: "Problem",
        title: "Nepregledan prikaz smještaja",
        text: "Gostima je teško brzo pronaći slobodne termine i informacije.",
      },
      {
        k: "Rješenje",
        title: "Jednostavan booking",
        text: "Prikaz smještaja i rezervacija je pojednostavljen.",
      },
      {
        k: "Iskustvo",
        title: "Bolje korisničko iskustvo",
        text: "Moderan dizajn i jasna struktura olakšavaju pregled.",
      },
      {
        k: "Rezultat",
        title: "Više rezervacija",
        text: "Brži booking proces povećava broj upita i rezervacija.",
      },
    ],
  },

  "luxury-brand-site": {
    title: "Premium web stranica brenda",
    subtitle: "Vizualni identitet i moderan dojam za premium brend.",
    image: "/work/p3.png",
    stack: [
      "Moderan dizajn",
      "Animacije i interakcije",
      "Premium vizualni identitet",
      "Prilagodba za sve uređaje",
    ],
    results: [
      "jači dojam brenda",
      "profesionalnija prezentacija",
      "moderniji vizualni identitet",
    ],
    story: [
      {
        k: "Problem",
        title: "Slab vizualni identitet",
        text: "Stranica nije ostavljala dojam premium brenda.",
      },
      {
        k: "Rješenje",
        title: "Moderan web dizajn",
        text: "Vizualni identitet je redizajniran s fokusom na premium dojam.",
      },
      {
        k: "Iskustvo",
        title: "Premium prezentacija",
        text: "Animacije i layout naglašavaju kvalitetu brenda.",
      },
      {
        k: "Rezultat",
        title: "Jači brand dojam",
        text: "Stranica ostavlja profesionalan i luksuzan dojam.",
      },
    ],
  },

  "startup-landing": {
    title: "Landing stranica za startup",
    subtitle: "Stranica optimizirana za prodaju i prijavu korisnika.",
    image: "/work/p4.png",
    stack: [
      "Landing struktura za prodaju",
      "Jasna prezentacija usluge",
      "Optimizacija za konverzije",
      "Moderan dizajn i UX",
    ],
    results: [
      "više prijava korisnika",
      "jasnija prezentacija proizvoda",
      "bolja stopa konverzije",
    ],
    story: [
      {
        k: "Problem",
        title: "Nejasna prezentacija proizvoda",
        text: "Korisnici nisu odmah razumjeli vrijednost ponude.",
      },
      {
        k: "Rješenje",
        title: "Jasna landing struktura",
        text: "Sadržaj je posložen tako da vodi korisnika prema prijavi.",
      },
      {
        k: "Iskustvo",
        title: "Bolji korisnički tok",
        text: "Navigacija i raspored sekcija olakšavaju donošenje odluke.",
      },
      {
        k: "Rezultat",
        title: "Više prijava korisnika",
        text: "Landing stranica je optimizirana za upite i konverzije.",
      },
    ],
  },
};

const order = [
  "restaurant-platform",
  "hotel-booking-ui",
  "luxury-brand-site",
  "startup-landing",
];

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white pt-28">
        <div className="mx-auto w-[min(1100px,92%)]">Projekt nije pronađen.</div>
      </main>
    );
  }

  const idx = order.indexOf(slug);
  const prevSlug = idx > 0 ? order[idx - 1] : null;
  const nextSlug = idx < order.length - 1 ? order[idx + 1] : null;

  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-24">
      <CaseStudyClient
        project={project}
        prevSlug={prevSlug}
        nextSlug={nextSlug}
      />
    </main>
  );
}