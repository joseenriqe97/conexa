import jwt from 'jsonwebtoken';
import { JWT_TOKEN } from '../config/constants';

export const tokenVerification = (req, res, next) => {
  const tokenUser = req.headers['token'];

  if (!tokenUser) {
    return res.status(403).send('A Token is required for authentication.');
  }
  try {
    const t = jwt.verify(tokenUser, JWT_TOKEN);
  } catch (e) {
    return res.status(401).send('Invalid Token');
  }
  return next();
};
