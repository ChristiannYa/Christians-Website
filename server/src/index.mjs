import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes/index.mjs';

const CLIENT_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://christianwebdev.com'
    : 'http://localhost:5173';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`);
});
