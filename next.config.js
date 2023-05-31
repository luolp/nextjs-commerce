/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  },
  experimental: {
    appDir: true
  },
  images: {
    // formats: ['image/avif', 'image/webp'],
    domains: [
        'data.eminstore.com'
    ]
  }
};