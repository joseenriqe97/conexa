import bcrypt from 'bcrypt';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';
import { JWT_TOKEN } from '../../config/constants';
import * as userDaos from '../../daos';
import logger from '../../logger';

export const authUser = async (userData) => {
    logger.debug('auth user service');
    try {

        // We validate the existence of the user
        const user = await userDaos.isExistUser(userData.email);
        if (!user) {
            throw createError(401, 'User does not exist');
        }

        const validPassword = await bcrypt.compare(userData.password, user.password);

        if (!validPassword) {
            throw createError(403, 'Invalid Credentials');
        }

        const tokenUser = jwt.sign(
            {
                "user_id": user._id,
                "email": userData.email
            },
            JWT_TOKEN,
            {
                expiresIn: "2h",
            }
        );
        user.token = tokenUser;
        return user;


    } catch (err) {
        logger.error(err);
        if (err.code && err.code === 'ECONNREFUSED') {
            throw createError(409, 'connection in external validation refused');
        }
        throw createError(err.code, err);
    }
};
