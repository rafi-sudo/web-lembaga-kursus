// next.config.js
const nextConfig = {
  reactStrictMode: true, // debugging strict React
  images: {
    domains: ['example.com'], // untuk <Image src="https://example.com/..." />
  },
  env: {
    API_URL: 'https://api.myserver.com', // bisa diakses di browser
  },
};

module.exports = nextConfig;
