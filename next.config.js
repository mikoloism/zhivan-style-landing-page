/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	trailingSlash: undefined,
	basePath: '/zhivan-style-landing-page',
	// TODO : add `images: { loader: 'custom' },`
};

/**
 * TODO : uncomment pwa codes
 * const withPWA = require('next-pwa');
 * const runtimeCaching = require('next-pwa/cache');
 *
 * module.exports = withPWA({
 *  pwa: {
 *    dest: 'public',
 *    runtimeCaching,
 *   },
 *  ...nextConfig,
 * });
 */

module.exports = nextConfig;
