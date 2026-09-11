import express from 'express';
import morgan from 'morgan';
import { sum } from './lib.js';
import { query } from './pg.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use(morgan("dev", {
  skip: function (req) {
    return req.url === '/healthz' || req.url === '/readyz';
  }
}));

app.get('/', (req, res) => {
  res.status(200).json(`Hello world: ${sum(1, 1)}`);
});

app.get('/healthz', (req, res) => {
  res.status(200).json();
});

app.get('/readyz', (req, res) => {
  res.status(200).json();
});

app.get('/pg', async (req, res) => {
  res.status(200).json(`PG: ${await query()}`);
});

app.get('/redis', async (req, res) => {
  res.status(200).json(`Redis: ${await query()}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;