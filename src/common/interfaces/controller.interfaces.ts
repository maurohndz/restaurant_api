import { type Request, type Response, type NextFunction } from 'express';

export interface ControllerResponse {
  data: unknown;
  status?: number;
}

export type Controller = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<ControllerResponse>;
