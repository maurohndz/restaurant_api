// SUCCESS
export const SUCCESS = 'success';
// ERROR
export const FATAL = 'fatal';

const responseMessages = {
  // SUCCESS
  [SUCCESS]: { status: 200, message: 'successful operation' },
  // ERROR
  [FATAL]: { status: 500, message: 'Internal server error' }
};

export default responseMessages;
