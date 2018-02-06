import express from 'express';

import userRouter from './router/user';
import registerRouter from './router/register';
import LoginRouter from './router/login';

const apiRouter = express.Router();

apiRouter.use('/user', userRouter);
apiRouter.use('/register', registerRouter);
apiRouter.use('/login', LoginRouter);

export default apiRouter;
