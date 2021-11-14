'use strict';
import createError from 'http-errors';

import logger from '../../logger';
import { getPhotoJsonPlaceHolder } from '../../utils/externalResource'

export const getPhoto = async (params) => {
    logger.debug('get photo service');
    try {
        const response = await getPhotoJsonPlaceHolder(params);
        return response
    } catch (error) {
        logger.error(error);
        throw createError(422, 'server error');
    }
}