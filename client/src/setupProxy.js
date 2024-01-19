const  {createProxyMiddleware}  = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    "/api/v1",
    createProxyMiddleware({
      target: "https://server-spjn.onrender.com",
      changeOrigin: true,
    })
  );
};