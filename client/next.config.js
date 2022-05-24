/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_API_URL: 'https://nodie-jsmailer.herokuapp.com/api/v1',
  }
}

module.exports = nextConfig
