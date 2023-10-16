import { type Request, type Response, type NextFunction } from 'express';
import {
  type Controller,
  type ControllerResponse
} from '@Interfaces/controller.interfaces';

export const commonController = (controller: Controller) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const value: ControllerResponse = await controller(req, res, next);
      res.status(value?.status ?? 200).send(value.data);
    } catch (error) {
      console.log(error);
      res.status(500).send({});
    }
  };
};
