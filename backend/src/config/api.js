import express from 'express';
import placeHolderRouter from '../routers/placeHolder';
import userRouter from '../routers/user';
const apiAppV1 = express();

apiAppV1.use('/placeholder', placeHolderRouter);
apiAppV1.use('/user', userRouter);


export const v1_0 = apiAppV1;
