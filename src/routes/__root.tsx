import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-midnight px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-gold">404</h1>
        <p className="mt-4 text-silver">This page does not exist.</p>
        <Link to="/" className="mt-6 inline-block border border-gold px-6 py-2 text-gold hover:bg-gold hover:text-midnight transition">Return</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-midnight px-4 text-center">
      <div>
        <h1 className="font-display text-2xl text-gold">Something went wrong</h1>
        <p className="mt-2 text-sm text-silver">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 border border-gold px-6 py-2 text-gold">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "American Dream — The Western Hemisphere's Greatest Destination" },
      { name: "description", content: "An interactive sales experience for prospective tenants, sponsors, and event partners at American Dream — 3M sq ft of retail, entertainment, and dining minutes from Manhattan." },
      { property: "og:title", content: "American Dream — Interactive Sales Deck" },
      { property: "og:description", content: "3M sq ft. 40M+ visitors. The destination that redefined what a property can be." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
