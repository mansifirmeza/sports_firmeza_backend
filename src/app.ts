import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { env } from '@/config/env';
import routes from '@/routes';
import { notFound } from '@/middlewares/notFound';
import { errorHandler } from '@/middlewares/errorHandler';

export const createApp = (): Application => {
  const app = express();

  // Security & performance
  app.use(helmet());
  app.use(cors({ origin: env.corsOrigin }));
  app.use(compression());

  // Body parsing
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Request logging
  app.use(morgan(env.isProduction ? 'combined' : 'dev'));

  // Root
  app.get('/', (_req: Request, res: Response) => {
    res.json({ name: 'sports-firmeza-backend', status: 'running' });
  });

  // API routes
  app.use('/api/v1', routes);

  // 404 + error handling (must be last)
  app.use(notFound);
  app.use(errorHandler);

  return app;
};
