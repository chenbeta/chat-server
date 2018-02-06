import express from 'express';
import Login from '../../controller/login/index';

const LoginRouter = express.Router();

LoginRouter.post('/login', async (req, res) => {
  const result = await Login.login(req, res);
  res.json(result);
});

export default LoginRouter;
