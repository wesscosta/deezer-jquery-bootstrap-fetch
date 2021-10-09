import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

// Create Express Server
const app = express();

// Cors
app.use(cors());

// Configuration
const PORT = 3333;
const HOST = "localhost";
const API_SERVICE_URL = "https://api.deezer.com/";

// app.use((req, res, next) => {
//   console.log('Acessou o Mimiddleware')
// })

// Proxy endpoints
app.get('/chart/tracks', createProxyMiddleware({
  target: API_SERVICE_URL,
  changeOrigin: true,
}));

app.get('/search', createProxyMiddleware({
  target: API_SERVICE_URL,
  changeOrigin: true,
}));

app.get('/playlist/1111141961', createProxyMiddleware({
  target: API_SERVICE_URL,
  changeOrigin: true,
}));

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});