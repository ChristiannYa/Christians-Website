import { Router } from 'express';

import themeRouter from './themeRouter.mjs';
import rootRouter from './rootRouter.mjs';

const router = Router();

router.use(themeRouter);
router.use(rootRouter);

export default router;
