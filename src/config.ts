export const NODE_ENV = process.env.NODE_ENV || 'dev';
export const PORT = process.env.PORT || 3000;
export const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1/test';

export { users_per_page } from '../config/pages.json';
