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
        ],
      },
};

export default nextConfig;
