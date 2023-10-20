import { type Request, type Response, type NextFunction } from 'express';

function authentication(req: Request, res: Response, next: NextFunction): void {
  next();
}

export { authentication };
