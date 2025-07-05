import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'placehold.co', // <--- เพิ่ม Domain นี้เข้าไป
      'fastcdn.hoyoverse.com', // <--- ถ้าคุณใช้ URL วิดีโอจาก hoyoverse.com ก็ควรเพิ่มไว้ด้วย (แม้ว่าจะไม่ใช่ Image Component โดยตรง แต่ก็ดีที่จะมี)
      // เพิ่ม Domain อื่นๆ ที่คุณจะใช้รูปภาพจากภายนอกที่นี่
    ],
  },
};

export default nextConfig;


