import { type Router } from 'express';
// Routes
import { restaurantsRoutes } from '@Restaurants/routes/restaurants.routes';

function registerRoutes(router: Router): void {
  restaurantsRoutes(router);
}

export { registerRoutes };
