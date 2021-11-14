import createError from 'http-errors';
import bcrypt from 'bcrypt';
import * as userDaos from '../../daos';
import logger from '../../logger';

export const createUser = async (userData) => {
  logger.debug('create user service');
  try {
    // We validate the existence of the user
    await userDaos.isExistUser(userData.email);

    userData.password = await bcrypt.hash(userData.password, 10);

    const newUser = await userDaos.createUser(userData);

    return newUser;
  } catch (err) {
    logger.error(err);
    if (err.code && err.code === 'ECONNREFUSED') {
      throw createError(409, 'connection in external validation refused');
    }
    if (err.code && err.code === 11000) {
      throw createError(409, 'User Already Exist. Please Login');
    }
    throw createError(400, 'server error');
  }
};
