'use strict';

let serverURL = null;

if (process.env.ENVIRONMENT === 'dev') {
  serverURL = process.env.DEVELOPMENT_SERVER_URL;
} else {
  serverURL = process.env.PRODUCTION_SERVER_URL;
}

export const ENVIRONMENT = process.env.ENVIRONMENT.toLowerCase();
export const APP_PORT = process.env.APP_PORT;
export const LOG_LEVEL = process.env.LOG_LEVEL;
export const AVAILABLE_VERSIONS = process.env.AVAILABLE_VERSIONS?.split(',');
export const URL_PLACE_HOLDER = process.env.URL_PLACE_HOLDER;
export const JWT_TOKEN = process.env.JWT_TOKEN;

export const DB_PROVIDER = process.env.DB_PROVIDER;