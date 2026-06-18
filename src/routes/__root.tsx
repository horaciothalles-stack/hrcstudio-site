import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import ogImage from "@/assets/og-image.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HRC Lab — Diferente por Design. Premium por Natureza." },
      {
        name: "description",
        content:
          "Transformamos marcas em ativos financeiros de alto valor. Estratégia de marca, tráfego e sistemas inteligentes para o mercado Premium.",
      },
      { property: "og:title", content: "HRC Lab — Diferente por Design. Premium por Natureza." },
      {
        property: "og:description",
        content:
          "Transformamos marcas em ativos financeiros de alto valor. Estratégia de marca, tráfego e sistemas inteligentes para o mercado Premium.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://hrcstudio.com.br" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "HRC Lab — Diferente por Design. Premium por Natureza." },
      {
        name: "twitter:description",
        content:
          "Transformamos marcas em ativos financeiros de alto valor. Estratégia de marca, tráfego e sistemas inteligentes para o mercado Premium.",
      },
      { property: "og:image", content: ogImage },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon-180.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
