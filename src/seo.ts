export const SITE_URL = "https://meetnella.com";
export const SITE_NAME = "Nella";
export const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/nella-paper-sculpture.jpg`;
export const DEFAULT_SOCIAL_IMAGE_ALT =
  "Abstract layered paper sculpture in Nella’s soft pastel palette";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const EDITORIAL_TEAM_ID = `${SITE_URL}/about#editorial-team`;

export type FaqEntry = {
  question: string;
  answer: string;
};

export type BreadcrumbEntry = {
  name: string;
  path: string;
};

export type CollectionEntry = {
  name: string;
  path: string;
};

export type ArticleSeo = {
  headline: string;
  description: string;
  urlPath: string;
  datePublished: string;
  dateModified: string;
  section: string;
};

export function absoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${path === "/" ? "/" : path.replace(/\/$/, "")}`;
}

function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: `${SITE_URL}/favicon.svg`,
      width: 64,
      height: 64,
      caption: "Nella",
    },
    image: DEFAULT_SOCIAL_IMAGE,
    email: "hello@meetnella.com",
    description:
      "Nella is the company and operating partner behind private support systems for law firms.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@meetnella.com",
      availableLanguage: "English",
    },
  };
}

function editorialTeamSchema() {
  return {
    "@type": "Organization",
    "@id": EDITORIAL_TEAM_ID,
    name: "Nella editorial team",
    url: absoluteUrl("/about#editorial-team"),
    parentOrganization: { "@id": ORGANIZATION_ID },
    description:
      "The Nella team writes and reviews practical guidance about private AI, legal workflows, deployment and responsible adoption.",
  };
}

function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      "Private AI assistants and support systems for law firms, configured around the firm’s people, documents, systems and way of working.",
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
  };
}

export function buildJsonLd({
  title,
  description,
  canonicalPath,
  article,
  breadcrumbs = [],
  faqs = [],
  collection,
}: {
  title: string;
  description: string;
  canonicalPath: string;
  article?: ArticleSeo;
  breadcrumbs?: readonly BreadcrumbEntry[];
  faqs?: readonly FaqEntry[];
  collection?: readonly CollectionEntry[];
}) {
  const pageUrl = absoluteUrl(canonicalPath);
  const pageId = `${pageUrl}#webpage`;
  const pageSchema: Record<string, unknown> = {
    "@type": collection ? "CollectionPage" : "WebPage",
    "@id": pageId,
    url: pageUrl,
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
    ...(article ? { primaryImageOfPage: DEFAULT_SOCIAL_IMAGE } : {}),
  };
  if (collection) pageSchema.mainEntity = { "@id": `${pageUrl}#itemlist` };
  if (faqs.length > 0) pageSchema.mainEntity = { "@id": `${pageUrl}#faq` };
  const graph: Array<Record<string, unknown>> = [
    organizationSchema(),
    editorialTeamSchema(),
    websiteSchema(),
    pageSchema,
  ];

  if (breadcrumbs.length > 1) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: breadcrumbs.map((breadcrumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: breadcrumb.name,
        item: absoluteUrl(breadcrumb.path),
      })),
    });
  }

  if (article) {
    graph.push({
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      isPartOf: { "@id": pageId },
      mainEntityOfPage: { "@id": pageId },
      url: absoluteUrl(article.urlPath),
      headline: article.headline,
      description: article.description,
      image: [DEFAULT_SOCIAL_IMAGE],
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      author: { "@id": EDITORIAL_TEAM_ID },
      publisher: { "@id": ORGANIZATION_ID },
      articleSection: article.section,
      inLanguage: "en",
      isAccessibleForFree: true,
    });
  }

  if (collection) {
    graph.push({
      "@type": "ItemList",
      "@id": `${pageUrl}#itemlist`,
      itemListElement: collection.map((entry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: entry.name,
        url: absoluteUrl(entry.path),
      })),
    });
  }

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      isPartOf: { "@id": pageId },
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
