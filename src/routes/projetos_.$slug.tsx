import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projetos_/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Projeto — HRC Studio" }] };
    return {
      meta: [
        { title: `${p.title} — HRC Studio` },
        {
          name: "description",
          content: `${p.title} — ${p.category}. Projeto desenvolvido pela HRC Studio.`,
        },
        { property: "og:title", content: `${p.title} — HRC Studio` },
        {
          property: "og:description",
          content: `${p.title} — ${p.category}. Projeto desenvolvido pela HRC Studio.`,
        },
        { property: "og:image", content: p.cover },
        { name: "twitter:image", content: p.cover },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-4xl font-bold">Projeto não encontrado</h1>
        <Link
          to="/projetos"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Ver todos os projetos
        </Link>
      </main>
      <Footer />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-background p-10 text-foreground">
      <p>Erro: {error.message}</p>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-24 lg:pt-40">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} /> Todos os projetos
          </Link>

          <div className="mt-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {project.category}
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] md:text-6xl">
              {project.title}
            </h1>
          </div>

          <div className="mt-16 flex flex-col gap-6 md:gap-10">
            {project.images.map((src, i) => (
              <figure
                key={src}
                className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card"
              >
                <img
                  src={src}
                  alt={`${project.title} — imagem ${i + 1} de ${project.images.length}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-auto w-full object-cover"
                />
              </figure>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold">Quer um projeto assim?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Vamos conversar sobre a sua marca.
              </p>
            </div>
            <a
              href="https://wa.me/5511922193335"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:bg-primary-glow"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-16">
            <h3 className="font-display text-xl font-bold">Outros projetos</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {projects
                .filter((p) => p.slug !== project.slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    to="/projetos/$slug"
                    params={{ slug: p.slug }}
                    className="group overflow-hidden rounded-xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-primary/50"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={p.cover}
                        alt={p.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-[10px] uppercase tracking-wider text-primary">
                        {p.category}
                      </div>
                      <div className="mt-1 font-display text-sm font-bold">{p.title}</div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
