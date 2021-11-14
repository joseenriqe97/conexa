import logger from '../../logger';
import * as jsonPlaceHolderServices from '../../services';
import respondError from '../../utils/respondError';
import respondSuccess from '../../utils/respondSuccess';

export const getPhoto = async (req, res) => {
   const { start, limit } = req.query
   logger.debug('get photos resource');
   try {
      const photosJsonPlaceHolder = await jsonPlaceHolderServices.getPhoto({
         '_start': start,
         '_limit': limit
      })
      let responseData = {};

      responseData.message = 'success';
      responseData.data = photosJsonPlaceHolder;
      responseData.status = 'OK';

      return respondSuccess(logger, res, responseData);
   } catch (err) {
      return respondError(logger, res, err);
   }
};