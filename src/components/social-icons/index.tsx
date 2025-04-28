import {
  NextJs,
  Tailwind,
  TypeScript,
  ShadCn,
  Umami,
  Mongodb,
  Markdown,
  Prisma,
  // Pinecone,
  Bash,
  Django,
  Linux,
  Docker,
  VsCode,
  Azure,
  Arduino,
  AzureDevOps,
  CLang,
  CSS,
  DBeaver,
  FastAPI,
  Flask,
  GoLang,
  GraphQL,
  HTML,
  JavaScript,
  JSON,
  Jira,
  Kaggle,
  Kub,
  NGINX,
  NodeJs,
  Notion,
  Pandas,
  Plotly,
  PlayWright,
  Powershell,
  Postgres,
  Pytest,
  Python,
  React,
  Redis,
  Selenium,
  Streamlit,
  Svelte,
  Swagger,
  Vercel,
  Vite,
  Windows,
  Yarn,
  Yaml,
  AWS,
  Anaconda,
  Git,
  PyTorch,
  BootStrap,
  Postman,
  Sanity,
  SvelteKit,
  Numpy,
  Matplotlib,
  Jupyter,
  SciKitLearn,
  Gradio,
  Grafana,
  Celery,
  TestRail,
  LangChain,
  Seaborn,
  PowerBi,
  DataDog,
  HuggingFace,
  Pinecone,
  Rust,
  ThreeJS,
  Node,
  Poetry,
  MySQL,
  PNPM,
  GithubActions,
  FramerMotion,
  RabbitMQ,
  Tableau,
  MeiliSearch,
  Mistral,
  Opensource,
  VLLM,
  Locust,
  Fiber,
  Stripe,
} from "./icons";

import { Button } from "@/components/ui/button";
import clsx from "clsx";

import Link from "next/link";

const components = {
  nextjs: NextJs,
  tailwind: Tailwind,
  typescript: TypeScript,
  shadclsx: ShadCn,
  umami: Umami,
  mongodb: Mongodb,
  markdown: Markdown,
  prisma: Prisma,
  pinecone: Pinecone,
  bash: Bash,
  django: Django,
  linux: Linux,
  docker: Docker,
  vscode: VsCode,
  azure: Azure,
  arduino: Arduino,
  azuredevops: AzureDevOps,
  clang: CLang,
  css: CSS,
  dbeaver: DBeaver,
  fastapi: FastAPI,
  flask: Flask,
  golang: GoLang,
  graphql: GraphQL,
  html: HTML,
  javascript: JavaScript,
  json: JSON,
  jira: Jira,
  kaggle: Kaggle,
  kub: Kub,
  nginx: NGINX,
  nodejs: NodeJs,
  notion: Notion,
  pandas: Pandas,
  plotly: Plotly,
  playwright: PlayWright,
  powershell: Powershell,
  postgres: Postgres,
  pytest: Pytest,
  python: Python,
  react: React,
  redis: Redis,
  selenium: Selenium,
  streamlit: Streamlit,
  svelte: Svelte,
  swagger: Swagger,
  vercel: Vercel,
  vite: Vite,
  windows: Windows,
  yarn: Yarn,
  yaml: Yaml,
  aws: AWS,
  anaconda: Anaconda,
  git: Git,
  pytorch: PyTorch,
  bootstrap: BootStrap,
  postman: Postman,
  sanity: Sanity,
  sveltekit: SvelteKit,
  numpy: Numpy,
  matplotlib: Matplotlib,
  jupyter: Jupyter,
  scikitlearn: SciKitLearn,
  grafana: Grafana,
  gradio: Gradio,
  celery: Celery,
  testrail: TestRail,
  langchain: LangChain,
  seaborn: Seaborn,
  powerbi: PowerBi,
  datadog: DataDog,
  huggingface: HuggingFace,
  rust: Rust,
  threejs: ThreeJS,
  node: Node,
  poetry: Poetry,
  mysql: MySQL,
  pnpm: PNPM,
  githubactions: GithubActions,
  framermotion: FramerMotion,
  rabbitmq: RabbitMQ,
  tableau: Tableau,
  meilisearch: MeiliSearch,
  mistral: Mistral,
  opensource: Opensource,
  locust: Locust,
  vllm: VLLM,
  fiber: Fiber,
  stripe: Stripe,
};

type IconsBundleProps = {
  kind: keyof typeof components | string;
  href?: string | undefined;
  size?: number;
  hover?: boolean;
  iconType?: "linkButton" | "link" | "icon" | "Link" | "LinkButton";
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
  className?: string;
  parentClassName?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  text?: string;
  strokeWidth?: number;
};

const IconsBundle = ({
  kind,
  href,
  size = 8,
  iconType = "link",
  variant = "outline",
  className,
  parentClassName,
  hover = true,
  target,
  text,
  strokeWidth,
}: IconsBundleProps) => {
  // Kiểm tra trước, nếu kind không tồn tại thì return null
  if (!(kind in components)) {
    return null;
  }

  const SocialSvg = components[kind as keyof typeof components];

  const combinedClass = clsx(
    `${text ? "mr-2" : ""} h-${size} w-${size}`,
    className
  );

  const combinedParentClass = clsx(
    "flex items-center justify-center",
    hover ? "hover:text-sky-900 dark:hover:text-sky-900" : "",
    parentClassName
  );

  if ((iconType === "link" || iconType === "Link") && href) {
    return (
      <Link href={href} className={combinedParentClass} target={target}>
        <span className="sr-only">{kind}</span>
        <SocialSvg className={combinedClass} strokeWidth={strokeWidth} />
        {text}
      </Link>
    );
  }

  if (iconType === "LinkButton" && href) {
    return (
      <Button
        variant={variant}
        size={!text ? "icon" : "default"}
        className={combinedParentClass}
        asChild
      >
        <Link href={href} target={target}>
          <span className="sr-only">{kind}</span>
          <SocialSvg className={combinedClass} strokeWidth={strokeWidth} />
          {text}
        </Link>
      </Button>
    );
  }

  if (iconType === "linkButton" && href) {
    return (
      <Button
        variant={variant}
        size={!text ? "icon" : "default"}
        className={parentClassName}
        asChild
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx("text-sm transition", combinedParentClass)}
        >
          <span className="sr-only">{kind}</span>
          <SocialSvg className={combinedClass} strokeWidth={strokeWidth} />
          {text}
        </a>
      </Button>
    );
  }

  if (iconType === "icon") {
    return (
      <SocialSvg
        className={clsx(`h-${size} w-${size}`, className)}
        strokeWidth={strokeWidth}
      />
    );
  }

  // Mặc định: trả về <a> nếu không match các điều kiện trên
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx("text-sm transition", combinedParentClass)}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg className={combinedClass} strokeWidth={strokeWidth} />
      {text}
    </a>
  );
};

export default IconsBundle;
