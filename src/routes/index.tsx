import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pains } from "@/components/Pains";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { Ecosystem } from "@/components/Ecosystem";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HRC Lab — Diferente por Design. Premium por Natureza." },
      {
        name: "description",
        content:
          "Transformamos marcas em ativos financeiros de alto valor. Estratégia, criação e ecossistema de sistemas inteligentes para o mercado Premium.",
      },
      { property: "og:title", content: "HRC Lab — Diferente por Design. Premium por Natureza." },
      {
        property: "og:description",
        content:
          "Agência e laboratório de soluções: estratégia de marca, tráfego, branding e os sistemas Frees.io e Biz.io.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Pains />
        <Services />
        <Process />
        <Portfolio />
        <Ecosystem />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
