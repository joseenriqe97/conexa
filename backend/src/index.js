'use strict';

import app from './app';
import * as db from './config/db';

db.connect().then(() => {
  app;
});
