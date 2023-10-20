import { Router } from 'express';

function commonValidator(validations = []): Router {
  const router = Router();

  return router.use('*', validations, (req, res, next) => {
    if (false) {
    } else {
      next();
    }
  });
}

export { commonValidator };
