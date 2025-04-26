export const SITE_METADATA = {
  title: `Huu dr blog – stories, insights, and ideas`,
  author: "Quoc Huu",
  headerTitle: `Huu dr blog`,
  description:
    "A personal space on the cloud where I document my medical journey, sharing lessons, insights, and resources for fellow doctors and medical students.",
  language: "en-us",
  theme: "system", // system, dark or light
  siteUrl: "https://healingnotes.site/",
  siteRepo: "https://github.com/codewithme2k/healingnotes.site",
  siteLogo: `${process.env.BASE_PATH || ""}/static/images/logo.jpg`,
  socialBanner: `${
    process.env.BASE_PATH || ""
  }/static/images/twitter-card.jpeg`,
  email: "contact@leohuynh.dev",
  github: "https://github.com/codewithme2k",
  x: "https://x.com/codewithme2k",
  facebook: "https://facebook.com/codewithme2k",
  youtube: "https://www.youtube.com/@codewithme2k",
  linkedin: "https://www.linkedin.com/in/codewithme2k",
  threads: "https://www.threads.net/codewithme2k",
  instagram: "https://www.instagram.com/codewithme2k",
  locale: "en-US",
  stickyNav: true,
  goodreadsBookshelfUrl: "",
  goodreadsFeedUrl: "",
  imdbRatingsList: "",
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl: "",
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: "buttondown",
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: "title", // supported options: pathname, url, title
      reactions: "1", // Emoji reactions: 1 = enable / 0 = disable
      metadata: "0",
      theme: "light",
      darkTheme: "transparent_dark",
      themeURL: "",
      lang: "en",
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ""}/search.json`,
    },
  },
  support: {
    buyMeACoffee: "",
    paypal: "",
    kofi: "",
  },
};
