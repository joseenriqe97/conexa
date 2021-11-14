'use strict';

import logger from '../../logger';
import { getPostJsonPlaceHolder } from '../../utils/externalResource'

export const getPost = async () => {
    logger.debug('get post service');
    try {
        const response = await getPostJsonPlaceHolder()
        return response
    } catch (error) {
        logger.error(err);
        throw createError(400, 'server error');
    }

}