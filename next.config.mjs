/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.wp.com',
        port: '',
        pathname: '/nacentralohio.org/wp-content/uploads/2018/05/**',
      },
      {
        protocol: 'https',
        hostname: '**.icons8.com',
        port: '',
        pathname: '/*/64/*',
      },
    ],
  },
};

export default nextConfig;
