import { Router } from 'express';
import { createUser, authUser } from '../resources';

const userRouter = Router();

// Main routes
userRouter.post('/', createUser).post('/auth', authUser);

export default userRouter;
