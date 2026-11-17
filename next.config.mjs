/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Mesa summit (Nov 26-29, 2026) was cancelled. Pages are archived in /archive/mesa-2026.
  async redirects() {
    return [
      { source: "/events/az-volleyball/:path*", destination: "/events", permanent: false },
      { source: "/events/az-volleyball", destination: "/events", permanent: false },
      { source: "/register/athlete", destination: "/register", permanent: false },
      { source: "/register/coach", destination: "/register", permanent: false },
      { source: "/clubs", destination: "/events", permanent: false },
      { source: "/programs", destination: "/events", permanent: false },
    ];
  },
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
