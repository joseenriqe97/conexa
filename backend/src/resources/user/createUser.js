import logger from '../../logger';
import * as userServices from '../../services';
import respondError from '../../utils/respondError';
import respondSuccess from '../../utils/respondSuccess';

export const createUser = async (req, res) => {
 logger.debug('create user resource');
 let responseData = {};

 try {
  const userData = req.body;
  const user = await userServices.createUser(userData)
  responseData.message = 'user created';
  responseData.data = user;
  responseData.status = 'OK';

  return respondSuccess(logger, res, responseData);
 } catch (err) {
  return respondError(logger, res, err);
 }
};