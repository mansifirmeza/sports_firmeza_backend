import dotenv from 'dotenv';

dotenv.config();

const parseOrigins = (value: string | undefined): string | string[] => {
  if (!value || value === '*') return '*';
  return value.split(',').map((origin) => origin.trim());
};

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 3000),
  corsOrigin: parseOrigins(process.env.CORS_ORIGIN),
  isProduction: (process.env.NODE_ENV ?? 'development') === 'production',
} as const;
