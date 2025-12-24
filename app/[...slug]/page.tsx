import { notFound } from "next/navigation";

import PageWrapper from "@/components/site/PageWrapper";
import { GLOBAL_ROUTES } from "@/data/routes";
import * as pages from "@/page-components";
import { ParamsProvider } from "@/utils/ParamsProvider";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const slug = params.slug || [];
  const path = `/${slug.join("/")}`;

  // Try to find exact match first
  let pageName = GLOBAL_ROUTES[path];
  let routeParams: Record<string, string> = {};

  // If no exact match, try to match dynamic routes
  if (!pageName) {
    for (const [route, page] of Object.entries(GLOBAL_ROUTES)) {
      const routeParts = route.split("/").filter(Boolean);
      const slugParts = slug;

      if (routeParts.length !== slugParts.length) {
        continue;
      }

      let match = true;
      const params: Record<string, string> = {};

      for (let i = 0; i < routeParts.length; i++) {
        if (routeParts[i].startsWith(":")) {
          // Dynamic segment
          const paramName = routeParts[i].slice(1);
          params[paramName] = decodeURIComponent(slugParts[i]);
        } else if (routeParts[i] !== slugParts[i]) {
          match = false;
          break;
        }
      }

      if (match) {
        pageName = page;
        routeParams = params;
        break;
      }
    }
  }

  if (!pageName || pageName === "NotFoundPage") {
    notFound();
  }

  const PageComponent = pages[pageName];

  if (!PageComponent) {
    notFound();
  }

  return (
    <ParamsProvider params={routeParams}>
      <PageWrapper>
        <PageComponent />
      </PageWrapper>
    </ParamsProvider>
  );
}
