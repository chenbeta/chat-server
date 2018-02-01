import express from 'express';

import userRouter from './router/user';

const apiRouter = express.Router();

apiRouter.use('/user', userRouter);

export default apiRouter;
