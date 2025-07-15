import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'placehold.co',
      'fastcdn.hoyoverse.com',
      'static.wikia.nocookie.net', 
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/characters', //ต้องใช้ rewrites เพื่อให้มันรู้จักว่าเป็น API ไม่งั้นดึงบ่ได้ 
        destination: 'https://hsr-api.vercel.app/api/v1/characters',
      },
      {
        source: '/api/characters/:id',
        destination: 'https://hsr-api.vercel.app/api/v1/characters/:id',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ];
  },
};

export default nextConfig;