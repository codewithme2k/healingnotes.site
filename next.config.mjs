/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    outputFileTracingExcludes: {
      files: [],
      directories: ["./src/generated/prisma"],
    },
  },
  images: {
    domains: ["i.scdn.co"], // Thêm domain này vào danh sách các domain hợp lệ
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
