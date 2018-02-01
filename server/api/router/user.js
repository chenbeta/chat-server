import express from 'express';
import user from '../../controller/user';

const userRouter = express.Router();

userRouter.get('/list', async (req, res) => {
  // 获取用户列表
  const result = await user.getUser();
  res.json(result);
});

export default userRouter;
