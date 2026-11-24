import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // 브라우저가 localhost가 아닌 LAN 주소로 접속할 때도 개발용 JS가 로드되어야
  // GNB 같은 클라이언트 상호작용이 동작한다.
  allowedDevOrigins: ["172.30.208.1"],
  devIndicators: {
    position: "top-right",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
