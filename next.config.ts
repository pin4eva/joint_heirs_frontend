// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	reactStrictMode: true,
// 	swcMinify: true,
// 	compiler: {
// 		styledComponents: true,
// 	},
// 	env: {
// 		API_URL: process.env.API_URL,
// 	},
// 	eslint: {
// 		ignoreDuringBuilds: true,
// 	},
// };

// module.exports = nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	env: {
		API_URL: process.env.API_URL || "",
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
