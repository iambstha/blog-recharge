/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental : {
        serverActions: true
    },
    
    images: {
        domains: ['img.freepik.com'],
      },
}

module.exports = nextConfig
