import { Router } from 'express';
// Common
import { commonController } from 'src/common/infrastructure/commonController';

// init Router
const router = Router();
// Init Service

router.get(
  '/',
  commonController(async () => {
    return { data: {} };
  })
);

export default router;
