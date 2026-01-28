const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const LCD_TARGET = process.env.LCD_TARGET || 'https://lcd.twilight.org';

// CORS headers for all responses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Proxy API requests to LCD server
const proxyOptions = {
  target: LCD_TARGET,
  changeOrigin: true,
  secure: true,
  logLevel: 'warn',
  onError: (err, req, res) => {
    console.error('Proxy error:', err.message);
    res.status(502).json({ error: 'Proxy error', message: err.message });
  },
};

app.use('/cosmos', createProxyMiddleware(proxyOptions));
app.use('/twilight', createProxyMiddleware(proxyOptions));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', target: LCD_TARGET });
});

// Serve static files from React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));

  // Handle React routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
  console.log(`Proxying API requests to ${LCD_TARGET}`);
});
