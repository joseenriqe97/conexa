'use strict';
import createError from 'http-errors';

import logger from '../../logger';
import { getPhotoJsonPlaceHolder } from '../../utils/externalResource';

export const getPhoto = async () => {
  logger.debug('get photo service');
  try {
    const response = await getPhotoJsonPlaceHolder();
    return response;
  } catch (error) {
    logger.error(error);
    throw createError(422, 'server error');
  }
};
