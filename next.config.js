/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'deploy_files',
    images: {
        domains: ["cdn.imagin.studio"]
    }    
}

module.exports = nextConfig
