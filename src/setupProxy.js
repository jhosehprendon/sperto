const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use('/api', proxy({
        target: 'https://jhosehprendon.api-us1.com/api/3', 
        changeOrigin: true,
        pathRewrite: {
            '^/api' : '/'
        }
    }));
};