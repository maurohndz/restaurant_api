import { Router } from 'express';
// Services
import RestuarantService from '@Services/restaurants.service';
// Utils
import { commonController } from '@Utils/commonController';

function restaurantController(main: Router): void {
  // Restuarant Router
  const router = Router();
  // Service
  const service = new RestuarantService();

  // [GET] List all restaurants
  router.get(
    '/',
    commonController(async (req, res, next) => {
      return {
        data: []
      };
    })
  );

  // [POST] Register/Create restaurant
  router.post(
    '/',
    commonController(async (req, res, next) => {
      return await service
        .createRestaurant()
        .then((data) => {
          return { data };
        })
        .catch((error) => {
          throw error;
        });
    })
  );

  // *********************
  // Define the main route
  main.use('/restaurants', router);
}

export default restaurantController;
