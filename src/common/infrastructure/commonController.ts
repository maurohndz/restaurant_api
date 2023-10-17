import { type Request, type Response, type NextFunction } from 'express';
import {
  type Controller,
  type ControllerResponse
} from '@Interfaces/controller.interfaces';
// Response
import { buildResponse } from '../utils/buildResponse';
// Constants
import { SUCCESS, FATAL } from '@Constants/responseMessages';

export const commonController = (controller: Controller) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const value: ControllerResponse = await controller(req, res, next);

      // Build response
      const type = value?.type ?? SUCCESS;
      const response = buildResponse(type, value.data);

      // Send
      res.status(response.status).send(response);
    } catch (error) {
      console.log(error);

      // Build response
      const type = error ?? FATAL;
      const response = buildResponse(type, null);

      // Send
      res.status(response.status).send(response);
    }
  };
};
