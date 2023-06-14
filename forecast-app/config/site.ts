export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Weather forecasting service",
  description: "A service that lets you know what the weather is like.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
