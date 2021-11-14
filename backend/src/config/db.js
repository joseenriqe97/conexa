'use strict';
import mongoose from 'mongoose';
import { DB_PROVIDER } from './constants';

let mongoOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  authSource: process.env.DB_NAME,
  dbName: process.env.DB_NAME,
  pass: process.env.DB_PASSWORD,
  user: process.env.DB_USERNAME,
};

if (process.env.DB_SECURE_SOCKET) {
  mongoOptions = {
    ...mongoOptions,
    ...{
      ssl: (process.env.DB_SSL && process.env.DB_SSL.toLowerCase() === 'true' ? true : false) || false,
      sslValidate:
        (process.env.DB_SSL_VALIDATE && process.env.DB_SSL_VALIDATE.toLowerCase() === 'true' ? true : false) || false,
      sslCA: process.env.DB_SSL_CA ? [readFileSync(path.resolve(__dirname, process.env.DB_SSL_CA))] : undefined,
    },
  };
}

const mongoUri = (provider) => {
  let uri = null;
  switch (provider) {
    case 'mongo':
      uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`;
      break;
    case 'atlas':
      uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
      break;
  }
  return uri;
};

export const connect = async () => {
  await mongoose.connect(
    mongoUri(DB_PROVIDER),
    DB_PROVIDER === 'atlas'
      ? {
          useCreateIndex: true,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        }
      : mongoOptions,
  );
};

export const dbHealth = () => (mongoose.connection.readyState === 1 ? true : false);

// Close connection to mongo
export const disconnect = () => mongoose.disconnect();
