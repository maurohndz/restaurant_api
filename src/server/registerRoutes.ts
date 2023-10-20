import { type Router } from 'express';
// Routes
import { restaurantsRoutes } from '@Restaurants/routes/restaurants.routes';
// Controllers
import AuthController from '@Controllers/auth.controller';

function registerRoutes(router: Router): void {
  restaurantsRoutes(router);
  // Authentication module
  AuthController(router);
}

export { registerRoutes };
