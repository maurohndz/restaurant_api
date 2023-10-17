import { type Request, type Response, type NextFunction } from 'express';

export interface ControllerResponse {
  data: unknown;
  type?: string;
}

export type Controller = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<ControllerResponse>;
