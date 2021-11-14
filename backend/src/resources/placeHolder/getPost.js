import logger from '../../logger';
import * as jsonPractitionerServices from '../../services';
import respondError from '../../utils/respondError';
import respondSuccess from '../../utils/respondSuccess';

export const getPost = async (req, res) => {
  logger.debug('get post resource');
  const responseData = {};

  try {
    const postJsonPlaceHolder = await jsonPractitionerServices.getPost();

    responseData.message = 'success';
    responseData.data = postJsonPlaceHolder;
    responseData.status = 'OK';

    return respondSuccess(logger, res, responseData);
  } catch (err) {
    return respondError(logger, res, err, logData);
  }
};