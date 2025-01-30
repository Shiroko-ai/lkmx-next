// This nextConfig is used to configure the Next.js build, when required uncomment the code below and comment the webpack one
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone'
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     webpack: (config: any, { dev }: any) => {
//       if (dev) {
//         config.watchOptions = {
//           poll: 1000,
//           aggregateTimeout: 300,
//         };
//       }
//       return config;
//     },
//   };

//   export default nextConfig;
