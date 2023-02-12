// Server
export const NODE_ENV = process.env.NODE_ENV || 'dev';
export const PORT = process.env.PORT || 3000;

// DB
export const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1/test';

// Json Web Token
export const jwtExpiration = process.env.jwtExpiration || '1h';
export const jwtSecret = process.env.jwtSecret || 'secret';

// Config
export { users_per_page } from '../config/pages.json';
