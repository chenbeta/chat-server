import express from 'express';
import reg from '../../controller/register/index';

const registerRouter = express.Router();

registerRouter.post('/register', async (req, res) => {
  const result = await reg.register(req, res);
  res.json(result);
});

export default registerRouter;
