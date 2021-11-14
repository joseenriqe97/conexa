import logger from '../../logger';
import createError from 'http-errors';

import * as userServices from '../../services';
import respondError from '../../utils/respondError';
import respondSuccess from '../../utils/respondSuccess';

export const authUser = async (req, res) => {
  logger.debug('auth user resource');
  const { email, password } = req.body;
  let responseData = {};

  try {
    if (!(email && password)) {
      throw createError(400, 'empty parameters');
    }

    const userData = req.body;
    const user = await userServices.authUser(userData);
    responseData.message = 'successfully logged in';
    responseData.data = user;
    responseData.status = 'OK';

    return respondSuccess(logger, res, responseData);
  } catch (err) {
    return respondError(logger, res, err);
  }
};
