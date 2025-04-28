import type { Document, MDX } from "contentlayer2/core";

export type SpotifyNowPlayingData = {
  isPlaying: boolean;
  songUrl?: string;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
};

export type Project = {
  type: "work" | "self";
  title: string;
  description?: string;
  imgSrc: string;
  url?: string;
  repo?: string;
  builtWith: string[];
  links?: { title: string; url: string }[];
};

export type GoodreadsBook = {
  guid: string;
  pubDate: string;
  title: string;
  link: string;
  book_id: string;
  book_image_url: string;
  book_small_image_url: string;
  book_medium_image_url: string;
  book_large_image_url: string;
  book_description: string;
  author_name: string;
  isbn: string;
  user_name: string;
  user_rating: string;
  user_read_at: string;
  user_date_added: string;
  user_date_created: string;
  user_shelves: string;
  user_review: string;
  average_rating: number;
  book_published: string;
  content: string;
};

export type ImdbMovie = {
  const: string;
  your_rating: string;
  date_rated: string;
  title: string;
  original_title: string;
  url: string;
  title_type: string;
  imdb_rating: string;
  runtime: string;
  year: string;
  genres: string;
  num_votes: string;
  release_date: string;
  directors: string;
  // Additional fields from the OMDB API
  actors: string;
  plot: string;
  poster: string;
  language: string;
  country: string;
  awards: string;
  box_office: string;
  total_seasons: string;
  ratings: Array<{ source: string; value: string }>;
};

export type OmdbMovie = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<{ Source: string; Value: string }>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  totalSeasons: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

export interface ViewApiResponse {
  data?: {
    total: string;
  };
}

export type GithubRepository = {
  stargazerCount: number;
  description: string;
  homepageUrl: string;
  languages: {
    color: string;
    name: string;
  }[];
  name: string;
  nameWithOwner: string;
  url: string;
  forkCount: number;
  repositoryTopics: string[];
  lastCommit?: GithubRepositoryCommit;
};

// https://docs.github.com/en/graphql/reference/enums#statusstate
export type CommitState =
  | "SUCCESS"
  | "PENDING"
  | "FAILURE"
  | "ERROR"
  | "EXPECTED";

export type GithubRepositoryCommit = {
  id: string;
  abbreviatedOid: string;
  committedDate: string;
  message: string;
  url: string;
  status: {
    state: CommitState;
  };
};

export type MDXDocument = Document & { body: MDX };
export type MDXDocumentDate = MDXDocument & {
  date: string;
};

export type CoreContent<T> = Omit<T, "body" | "_raw" | "_id">;

export interface Skill {
  name: string;
  id: string;
  category: "Languages" | "Web Dev" | "AI & Data Science" | "DevOps & Tools";
  field?: string;
  subfield?: string;
  description?: string;
  imgSrc?: string;
  level: "advanced" | "familiar" | "learning";
  hidden?: boolean;
  href?: string;
  mostUsed?: boolean;
}

export const skillsData: Skill[] = [
  {
    name: "Javascript",
    id: "javascript",
    category: "Languages",
    level: "advanced",
  },
  {
    name: "Typescript",
    id: "typescript",
    category: "Languages",
    level: "advanced",
    mostUsed: true,
  },
  {
    name: "React",
    id: "react",
    category: "Web Dev",
    field: "Frontend",
    level: "advanced",
  },
  {
    name: "Next.js",
    id: "nextjs",
    category: "Web Dev",
    field: "Fullstack",
    subfield: "Frameworks",
    level: "advanced",
    mostUsed: true,
  },
  {
    name: "Tailwind",
    id: "tailwind",
    category: "Web Dev",
    field: "Frontend",
    subfield: "Styling",
    level: "advanced",
    mostUsed: true,
  },
  {
    name: "Fiber",
    id: "fiber",
    category: "Web Dev",
    field: "Backend",
    level: "learning",
  },
  {
    name: "ShadCN",
    id: "shadcn",
    category: "Web Dev",
    field: "Frontend",
    subfield: "Styling",
    level: "advanced",
  },
  {
    name: "CSS",
    id: "css",
    category: "Web Dev",
    field: "Frontend",
    subfield: "Styling",
    level: "advanced",
  },
  {
    name: "Prisma",
    id: "prisma",
    category: "Web Dev",
    field: "Backend",
    subfield: "ORM",
    level: "advanced",
  },
  {
    name: "OpenAI",
    id: "openai",
    category: "AI & Data Science",
    field: "AI",
    description: "GPTs, Whisper",
    level: "familiar",
    mostUsed: true,
  },
  {
    name: "LangChain",
    id: "langchain",
    category: "AI & Data Science",
    field: "AI",
    subfield: "Frameworks",
    level: "familiar",
    mostUsed: true,
  },
  {
    name: "Python",
    id: "python",
    category: "Languages",
    level: "familiar",
    mostUsed: true,
  },
  {
    name: "C Lang",
    id: "clang",
    category: "Languages",
    level: "familiar",
  },
  {
    name: "Node.js",
    id: "nodejs",
    category: "Web Dev",
    field: "Backend",
    level: "familiar",
  },
  {
    name: "Fast API",
    id: "fastapi",
    category: "Web Dev",
    field: "Backend",
    level: "familiar",
    mostUsed: true,
  },
  {
    name: "Django",
    id: "django",
    category: "Web Dev",
    field: "Backend",
    level: "advanced",
  },
  {
    name: "Flask",
    id: "flask",
    category: "Web Dev",
    field: "Backend",
    level: "advanced",
  },
  {
    name: "Docker",
    id: "docker",
    category: "DevOps & Tools",
    field: "Containers",
    level: "advanced",
    mostUsed: true,
  },
  {
    name: "AWS",
    id: "aws",
    category: "DevOps & Tools",
    field: "Cloud Providers",
    level: "advanced",
  },
  {
    name: "Azure",
    id: "azure",
    category: "DevOps & Tools",
    field: "Cloud Providers",
    level: "advanced",
  },
  {
    name: "Git",
    id: "git",
    category: "DevOps & Tools",
    field: "Source Control",
    level: "advanced",
  },
  {
    name: "Github",
    id: "github",
    category: "DevOps & Tools",
    field: "Source Control",
    level: "advanced",
  },
  {
    name: "Azure DevOps",
    id: "azuredevops",
    category: "DevOps & Tools",
    field: "Source Control",
    level: "advanced",
  },
  {
    name: "Bash",
    id: "bash",
    category: "DevOps & Tools",
    field: "Shell",
    level: "advanced",
  },
  {
    name: "Powershell",
    id: "powershell",
    category: "DevOps & Tools",
    field: "Shell",
    level: "advanced",
  },
  {
    name: "Linux",
    id: "linux",
    category: "DevOps & Tools",
    field: "OS",
    level: "advanced",
  },
  {
    name: "SQL",
    id: "sql",
    category: "Web Dev",
    field: "Backend",
    subfield: "Databases",
    level: "advanced",
    hidden: true,
  },
  {
    name: "NoSQL",
    id: "nosql",
    category: "Web Dev",
    field: "Backend",
    subfield: "Databases",
    level: "advanced",
    hidden: true,
  },
  {
    name: "MongoDB",
    id: "mongodb",
    category: "Web Dev",
    field: "Backend",
    subfield: "Databases",
    level: "learning",
  },
  {
    name: "PostgreSQL",
    id: "postgres",
    category: "Web Dev",
    field: "Backend",
    subfield: "Databases",
    level: "advanced",
    mostUsed: true,
  },
  {
    name: "MySQL",
    id: "mysql",
    category: "Web Dev",
    field: "Backend",
    subfield: "Databases",
    level: "advanced",
  },
  {
    name: "Redis",
    id: "redis",
    category: "Web Dev",
    field: "Backend",
    subfield: "Databases",
    level: "advanced",
    mostUsed: true,
  },
  {
    name: "Bootstrap",
    id: "bootstrap",
    category: "Web Dev",
    field: "Frontend",
    subfield: "Styling",
    level: "advanced",
  },
  {
    name: "Pandas",
    id: "pandas",
    category: "AI & Data Science",
    field: "Data Science",
    subfield: "Analytics",
    level: "advanced",
  },
  {
    name: "Numpy",
    id: "numpy",
    category: "AI & Data Science",
    field: "Data Science",
    subfield: "Analytics",
    level: "advanced",
  },
  {
    name: "Anaconda",
    id: "anaconda",
    category: "AI & Data Science",
    field: "Data Science",
    subfield: "Tools",
    level: "advanced",
  },
  {
    name: "Jupyter",
    id: "jupyter",
    category: "AI & Data Science",
    field: "Data Science",
    subfield: "Tools",
    level: "advanced",
  },
  {
    name: "Matplotlib",
    id: "matplotlib",
    category: "AI & Data Science",
    field: "Data Science",
    subfield: "Visualization",
    level: "advanced",
  },
  {
    name: "Plotly",
    id: "plotly",
    category: "AI & Data Science",
    field: "Data Science",
    subfield: "Visualization",
    level: "advanced",
  },
  {
    name: "Seaborn",
    id: "seaborn",
    category: "AI & Data Science",
    field: "Data Science",
    subfield: "Visualization",
    level: "advanced",
  },
  {
    name: "Scikit-learn",
    id: "scikitlearn",
    category: "AI & Data Science",
    field: "Data Science",
    subfield: "ML",
    level: "advanced",
  },
  {
    name: "Postman",
    id: "postman",
    category: "DevOps & Tools",
    field: "Tools",
    level: "advanced",
  },
  {
    name: "DataDog",
    id: "datadog",
    category: "DevOps & Tools",
    field: "Analytics",
    level: "advanced",
  },
  {
    name: "Umami",
    id: "umami",
    category: "DevOps & Tools",
    field: "Analytics",
    level: "advanced",
  },
  {
    name: "PowerBI",
    id: "powerbi",
    category: "AI & Data Science",
    field: "Data Science",
    subfield: "Visualization",
    level: "advanced",
  },
  {
    name: "Celery",
    id: "celery",
    category: "Web Dev",
    field: "Backend",
    level: "advanced",
  },
  {
    name: "NGINX",
    id: "nginx",
    category: "Web Dev",
    field: "Backend",
    level: "advanced",
  },
  {
    name: "Vercel",
    id: "vercel",
    category: "DevOps & Tools",
    field: "Cloud Providers",
    level: "advanced",
  },
  {
    name: "VLLM",
    id: "vllm",
    category: "AI & Data Science",
    field: "AI",
    subfield: "Frameworks",
    level: "advanced",
  },
  {
    name: "OpenSource LLMs, Mistral, LLAMA, Vicuna",
    id: "mistral",
    category: "AI & Data Science",
    field: "AI",
    level: "advanced",
  },
  {
    name: "Streamlit",
    id: "streamlit",
    category: "AI & Data Science",
    field: "Prototyping",
    level: "advanced",
  },
  {
    name: "Gradio",
    id: "gradio",
    category: "AI & Data Science",
    field: "Prototyping",
    level: "advanced",
  },
  {
    name: "Huggingface",
    id: "huggingface",
    category: "AI & Data Science",
    field: "AI",
    level: "advanced",
  },
  {
    name: "GoLang",
    id: "golang",
    category: "Languages",
    level: "learning",
  },
  {
    name: "Jira",
    id: "jira",
    category: "DevOps & Tools",
    field: "DevOps & Tools",
    subfield: "Fullstack",
    level: "advanced",
  },
  {
    name: "Sanity",
    id: "sanity",
    category: "Web Dev",
    field: "CMS",
    level: "advanced",
  },
  {
    name: "Pinecone",
    id: "pinecone",
    category: "AI & Data Science",
    field: "AI",
    subfield: "Vectors",
    level: "advanced",
  },
  {
    name: "TestRail",
    id: "testrail",
    category: "DevOps & Tools",
    field: "DevOps & Tools",
    level: "advanced",
  },
  {
    name: "Locust",
    id: "locust",
    category: "DevOps & Tools",
    field: "DevOps & Tools",
    level: "advanced",
  },
  {
    name: "Grafana",
    id: "grafana",
    category: "DevOps & Tools",
    field: "DevOps & Tools",
    subfield: "Fullstack",
    level: "advanced",
  },
  {
    name: "Selenium",
    id: "selenium",
    category: "DevOps & Tools",
    field: "DevOps & Tools",
    level: "advanced",
  },
  {
    name: "PyTest",
    id: "pytest",
    category: "DevOps & Tools",
    field: "DevOps & Tools",
    level: "advanced",
  },
  {
    name: "Svelte",
    id: "svelte",
    category: "Web Dev",
    field: "Frontend",
    subfield: "Fullstack",
    level: "advanced",
  },
  {
    name: "SvelteKit",
    id: "sveltekit",
    category: "Web Dev",
    field: "Fullstack",
    level: "advanced",
  },
  {
    name: "Vite",
    id: "vite",
    category: "DevOps & Tools",
    field: "DevOps & Tools",
    level: "advanced",
  },
  {
    name: "Yarn",
    id: "yarn",
    category: "DevOps & Tools",
    field: "DevOps & Tools",
    level: "advanced",
    hidden: true,
  },
  {
    name: "Tableau",
    id: "tableau",
    category: "AI & Data Science",
    field: "Analytics",
    level: "advanced",
  },
  {
    name: "Three.js",
    id: "threejs",
    category: "Web Dev",
    field: "Frontend",
    level: "advanced",
  },
  {
    name: "Poetry",
    id: "poetry",
    category: "DevOps & Tools",
    field: "Tools",
    level: "advanced",
  },
  {
    name: "PNPM",
    id: "pnpm",
    category: "DevOps & Tools",
    field: "Tools",
    level: "advanced",
    hidden: true,
  },
  {
    name: "Github Actions",
    id: "githubactions",
    category: "DevOps & Tools",
    field: "Deployment",
    level: "advanced",
  },
  {
    name: "Framer Motion",
    id: "framermotion",
    category: "Web Dev",
    field: "Frontend",
    level: "advanced",
  },
  {
    name: "VS Code",
    id: "vscode",
    category: "DevOps & Tools",
    field: "Tools",
    level: "advanced",
  },
  {
    name: "MeiliSearch",
    id: "meilisearch",
    category: "Web Dev",
    field: "Backend",
    level: "advanced",
  },
  {
    name: "Stripe",
    id: "stripe",
    category: "Web Dev",
    field: "Backend",
    level: "advanced",
  },
  {
    name: "Notion",
    id: "notion",
    category: "DevOps & Tools",
    field: "Tools",
    level: "advanced",
  },
];
