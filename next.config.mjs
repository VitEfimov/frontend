/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Fix for alasql react-native errors
        config.externals = {
            ...config.externals,
            'react-native': 'undefined',
            'react-native-fs': 'undefined',
            'react-native-fetch-blob': 'undefined',
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
