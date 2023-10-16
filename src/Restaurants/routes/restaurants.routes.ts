import { Router } from 'express';
// Controller
import ListRestaurants from '@Restaurants/controllers/listRestaurant.controller';
import CreateRestaurant from '@Restaurants/controllers/createRestaurant.controller';

function restaurantsRoutes(router: Router): void {
  const restaurants = Router();

  // [GET] List all restaurants
  restaurants.use(ListRestaurants);
  // [POST] Register/Create restaurant
  restaurants.use(CreateRestaurant);

  router.use('/restaurants', restaurants);
}

export { restaurantsRoutes };
