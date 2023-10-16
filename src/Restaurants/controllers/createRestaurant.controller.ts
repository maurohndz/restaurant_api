import {
  type Request,
  type Response,
  type NextFunction,
  Router
} from 'express';
// Common
import { commonController } from 'src/common/infrastructure/commonController';
// Service
import CreateRestaurant from '@Restaurants/services/createRestaurant.service';

// init Router
const router = Router();
// Init Service
const service = new CreateRestaurant();

router.post(
  '/',
  commonController(async (req: Request, res: Response, next: NextFunction) => {
    return await service
      .run(req.body)
      .then((data) => {
        return {
          data
        };
      })
      .catch((error) => {
        throw error;
      });
  })
);

export default router;
