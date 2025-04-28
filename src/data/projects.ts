import type { Project } from "@/types/data";

export const PROJECTS: Project[] = [
  {
    type: "work",
    title: "Weaverse Hydrogen Customizer",
    description: `The first Hydrogen-driven website builder powered by AI. Weaverse is a Shopify sales channel that allows you to create a website in minutes with no coding required.`,
    imgSrc: "/static/images/weaverse-logo.png",
    url: "https://www.weaverse.io?ref=leohuynh.dev",
    builtWith: ["Shopify", "Remix", "TailwindCSS", "Prisma", "OpenAI"],
    links: [
      { title: "Website", url: "https://www.weaverse.io?ref=leohuynh.dev" },
      { title: "GitHub Org", url: "https://github.com/weaverse" },
    ],
  },
  {
    type: "work",
    title: "Weaverse SDKs",
    description:
      "Open-source toolkits for seamless integration and development of Shopify Hydrogen themes and headless commerce solutions.",
    imgSrc: "/static/images/weaverse-logo.png",
    repo: "weaverse/weaverse",
    builtWith: ["Turborepo", "Hydrogen", "React", "Typescript"],
  },
  {
    type: "work",
    title: "Pilot - Shopify Hydrogen theme",
    description:
      "A fully-featured Shopify Hydrogen theme crafted to help you launch modern, high-performing headless storefronts in minutes.",
    imgSrc: "/static/images/theme-100.png",
    repo: "weaverse/pilot",
    url: "https://pilot.weaverse.io/",
    builtWith: ["Hydrogen", "Remix", "TailwindCSS", "HeadlessUI"],
  },
  {
    type: "self",
    title: "leohuynh.dev",
    imgSrc: "/static/images/writer-96.png",
    repo: "hta218/leohuynh.dev",
    builtWith: ["NextJS", "TailwindCSS", "Typescript", "Drizzle", "Umami"],
  },
  {
    type: "self",
    title: "Shopify theme starter",
    imgSrc: "/static/images/liquid-96.png",
    repo: "hta218/shopify-theme-starter",
    builtWith: ["ThemeKit", "Liquid", "Webpack", "TailwindCSS"],
  },
  {
    type: "self",
    title: "Exercism solutions",
    imgSrc: "/static/images/average-math-96.png",
    repo: "hta218/exercism-solutions",
    builtWith: ["Exercism", "Javascript", "Bash"],
  },
];
