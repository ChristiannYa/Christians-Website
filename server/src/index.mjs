import express from 'express';
import cors from 'cors';
import routes from './routes/index.mjs';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.json());
app.use(routes);
