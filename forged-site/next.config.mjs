/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dbukjj6eu5tsf.cloudfront.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fiusports.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dxbhsrqyrr690.cloudfront.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
