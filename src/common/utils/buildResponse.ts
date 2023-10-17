import { type ResponseInterface } from '../interfaces/response.interfaces';
import objectResponse, * as KEYS from '../constants/responseMessages';

function buildResponse(type, data: unknown = null): ResponseInterface {
  let response = objectResponse[type] ?? false;

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!response) {
    response = objectResponse[KEYS.FATAL];
  }

  return {
    status: response?.status,
    data,
    message: response?.message
  };
}

export { buildResponse };
