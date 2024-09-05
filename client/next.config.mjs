const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.module.rules.push({
                test: /\.handlebars$/,
                use: 'raw-loader',
            });
        }
        return config;
    },
};

export default nextConfig;
