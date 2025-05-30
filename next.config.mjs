/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    outputFileTracingExcludes: {
      files: [],
      directories: ["./src/generated/prisma"],
    },
  },
  images: {
    domains: [
      "i.scdn.co",
      "unsplash.com",
      "i.gr-assets.com",
      "m.media-amazon.com",
      "images.unsplash.com",
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "prefixIds",
                  params: {
                    delim: "__",
                    prefixIds: true,
                    prefixClassNames: true,
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
