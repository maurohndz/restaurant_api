import {
  type RequestHandler,
  type NextFunction,
  type Request,
  type Response
} from 'express';

function commonValidator(
  validations: RequestHandler[] = [],
  params?: unknown
): [
  RequestHandler[],
  () => {}] {
  return [validations, (req: Request, res: Response, next: NextFunction) => {}];
}

export { commonValidator };
