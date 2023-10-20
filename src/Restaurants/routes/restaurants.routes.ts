import { Router } from 'express';
// Controller
import ListRestaurants from '@Restaurants/controllers/listRestaurant.controller';
import CreateRestaurant from '@Restaurants/controllers/createRestaurant.controller';

function restaurantsRoutes(router: Router): void {
  const restaurants = Router();

  // [GET] List all restaurants
  ListRestaurants(restaurants);
  // [POST] Register/Create restaurant
  CreateRestaurant(restaurants);

  router.use('/restaurants', restaurants);
}

export { restaurantsRoutes };
