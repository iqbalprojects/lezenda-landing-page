/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s.menuju.co.id",
            },
        ],
    },
};

export default nextConfig;
