/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        'path': '/',
        'loader': 'custom',
        'loaderFile': './my-loader.js',
    }
};

export default nextConfig;
