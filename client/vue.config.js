module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'backend://server:3333',
            },
        },
    },
};