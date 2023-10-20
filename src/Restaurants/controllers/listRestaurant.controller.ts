import { type Router } from 'express';
// Common
import { commonController } from 'src/common/utils/commonController';

function listRestaurants(router: Router): void {
  router.get(
    '/',
    commonController(async () => {
      return { data: ['Restaurant'] };
    })
  );
}

export default listRestaurants;
