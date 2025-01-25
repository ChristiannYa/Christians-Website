import { Router } from 'express';

const themeRouter = Router();

themeRouter.get('/theme', (req, res) => {
  // Theme logic
  const currentTheme = req.cookies.theme || 'light';
  res.send({ theme: currentTheme });
});

themeRouter.post('/theme', (req, res) => {
  const { theme } = req.body;

  res.cookie('theme', theme, {
    // 30 day expiration cookie
    maxAge: 30 * 24 * 60 * 60 * 1000,
    sameSite: 'none',
    secure: true,
    domain:
      process.env.NODE_ENV === 'production'
        ? 'christianwebdev.com'
        : 'localhost',
  });

  res.send({ message: 'Theme updated' });
});

export default themeRouter;
