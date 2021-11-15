import app from './app';
import * as db from './config/db';
import * as dbDevfrom from '../src/utils/memoryServer';

if (process.env.ENVIRONMENT === "DEV") {
  try {
    app;
    dbDevfrom.dbTestConnect()
  } catch (err) {
    console.log(err)
  }
} else {
  db.connect().then(() => {
    app;
  });
}

