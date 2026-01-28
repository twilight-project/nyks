const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Proxy Cosmos API requests to Twilight LCD
  app.use(
    '/cosmos',
    createProxyMiddleware({
      target: 'https://lcd.twilight.org',
      changeOrigin: true,
      secure: true,
      logLevel: 'debug',
    })
  );

  // Proxy Twilight-specific API requests
  app.use(
    '/twilight',
    createProxyMiddleware({
      target: 'https://lcd.twilight.org',
      changeOrigin: true,
      secure: true,
      logLevel: 'debug',
    })
  );

  // Proxy decode API requests
  app.use(
    '/api/decode',
    createProxyMiddleware({
      target: 'http://143.198.60.224:8449',
      changeOrigin: true,
      pathRewrite: {
        '^/api/decode': '/api',
      },
      logLevel: 'debug',
    })
  );
};
