/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Fix for alasql react-native errors
        config.resolve.alias = {
            ...config.resolve.alias,
            alasql: 'alasql/dist/alasql.min.js',
        };

        config.resolve.fallback = {
            ...config.resolve.fallback,
            "react-native": false,
            "react-native-fs": false,
            "react-native-fetch-blob": false,
            "fs": false,
            "crypto": false,
            "os": false,
            "path": false,
        };

        return config;
    },
};

export default nextConfig;
