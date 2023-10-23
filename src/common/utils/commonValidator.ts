import { type NextFunction, type Request, type Response } from 'express';

function commonValidator(validations = [], params: unknown): unknown {
  return [validations, (req: Request, res: Response, next: NextFunction) => {}];
}

export { commonValidator };
