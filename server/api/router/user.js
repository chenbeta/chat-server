import express from 'express';
import user from '../../controller/user';

const userRouter = express.Router();

userRouter.get('/list', async (req, res) => {
  // 获取用户列表
  const result = await user.getUser();

  res.json(resMsg({ data: result }));
});

userRouter.post('/setUserInfo', async (req, res) => {
  // 设置用户
  const result = await user.setUserInfo(req, res);

  res.json(result);
});

userRouter.get('/del', async (req, res) => {
  // 获取用户列表
  const result = await user.delUser();

  res.json(resMsg({ data: result }));
});

export default userRouter;
