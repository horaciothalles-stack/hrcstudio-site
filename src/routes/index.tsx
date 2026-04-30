import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pains } from "@/components/Pains";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { Creatives } from "@/components/Creatives";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HRC Studio — Agência de marketing focada em resultado" },
      {
        name: "description",
        content:
          "Estratégia, criação e tráfego para sua marca economizar tempo e multiplicar resultado. +200 marcas atendidas, +1000 criativos premium.",
      },
      { property: "og:title", content: "HRC Studio — Marketing focado em resultado" },
      {
        property: "og:description",
        content:
          "Agência full-service: tráfego, branding, conteúdo e criativos premium prontos pra escalar sua marca.",
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
        <Creatives />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
