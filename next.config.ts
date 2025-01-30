/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config: any, { dev }: any) => {
      if (dev) {
        config.watchOptions = {
          poll: 1000,
          aggregateTimeout: 300,
        };
      }
      return config;
    },
  };

  export default nextConfig;
