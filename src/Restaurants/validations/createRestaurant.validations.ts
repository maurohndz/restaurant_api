import { type RequestHandler } from 'express';
import validator from 'express-validator';

const createRestaurant: RequestHandler[] = [validator.check('name').notEmpty()];

export default createRestaurant;
