import { Request, Response, NextFunction } from 'express';
import { ApiError } from '@/utils/ApiError';

/**
 * Handles requests that did not match any route.
 */
export const notFound = (req: Request, _res: Response, next: NextFunction): void => {
  next(ApiError.notFound(`Route not found: ${req.method} ${req.originalUrl}`));
};
