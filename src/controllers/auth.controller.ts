import { Router } from 'express';

function authController(main: Router): void {
  // Restuarant Router
  const router = Router();

  // ======
  // Routes

  // Define the main route
  main.use('/auth', router);
}

export default authController;
