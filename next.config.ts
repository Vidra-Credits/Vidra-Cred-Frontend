import type { NextConfig } from "next";
const config: NextConfig = {
  poweredByHeader: false,
  // El navegador llama a /api; Next lo reenvía al backend, así la cookie de sesión queda en el mismo origen.
  async rewrites() {
    return [{ source: "/api/:path*", destination: `${process.env.BACKEND_URL ?? "http://127.0.0.1:3000"}/api/:path*` }];
  },
  async headers() { return [{ source: "/(.*)", headers: [
    {key:"X-Content-Type-Options",value:"nosniff"},
    {key:"X-Frame-Options",value:"DENY"},
    {key:"Referrer-Policy",value:"same-origin"}
  ]}]; }
};
export default config;
