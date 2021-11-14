import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongoServer = new MongoMemoryServer();

export const dbTestConnect = () => {
  mongoose.Promise = Promise;
  mongoServer.getUri().then((mongoUri) => {
    const mongooseOpts = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    };

    mongoose.connect(mongoUri, mongooseOpts);

    mongoose.connection.on('error', (e) => {
      if (e.message.code === 'ETIMEDOUT') {
        console.log(e);
        mongoose.connect(mongoUri, mongooseOpts);
      }
      console.log(e);
    });

    mongoose.connection.once('open', () => {
      console.log(`MongoDB successfully connected to ${mongoUri}`);
    });
  });
};

export const dbTestDisconnect = () => mongoose.disconnect();
