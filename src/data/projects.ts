// Project galleries — images glob-imported from src/assets/projects/<slug>/
const projectModules = import.meta.glob("@/assets/projects/*/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export type Project = {
  slug: string;
  title: string;
  category: string;
  cover: string;
  images: string[];
};

function imagesFor(slug: string): string[] {
  return Object.entries(projectModules)
    .filter(([path]) => path.includes(`/projects/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, url]) => url);
}

const meta: Omit<Project, "cover" | "images">[] = [
  { slug: "5stars", title: "Five Stars Barbearia", category: "Identidade visual" },
  { slug: "tarquini", title: "Dre Tarquini Fotografia", category: "Branding & apresentação" },
  { slug: "hrc", title: "HRC Studio", category: "Branding interno" },
  { slug: "ntc", title: "New Trade Concept", category: "Apresentação corporativa" },
  { slug: "malaga", title: "Málaga", category: "Identidade visual" },
];

export const projects: Project[] = meta.map((m) => {
  const images = imagesFor(m.slug);
  return { ...m, cover: images[0], images };
});

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
