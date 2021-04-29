import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';

export const middlewares = applyMiddleware(thunk, logger);
