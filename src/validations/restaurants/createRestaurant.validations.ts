import validator from 'express-validator';

const createRestaurant = [validator.check('name').notEmpty()];

export default createRestaurant;
