/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
    images: {
        unoptimized: true,
    },
    output: "export",
};

export default nextConfig;
