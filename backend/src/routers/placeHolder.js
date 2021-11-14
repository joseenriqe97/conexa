import { Router } from 'express';
import { tokenVerification } from '../middleware'

import {
  getPhoto,
  getPost
} from '../resources';

const placeHolderRouter = Router();

// Main routes
placeHolderRouter
  .get('/post', /* tokenVerification */ getPost)
  .get('/photo', getPhoto)

export default placeHolderRouter;