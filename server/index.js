import express from 'express';
import apiRouter from './api';
import query from './common/mysql/db';
import resMsg from './common/util/respMsg';

let app = express();

app.get('/', (req, res) => {
  res.send('hello word123!');
});

// 使用路由
app.use('/api', apiRouter);

global.query = query;
global.resMsg = resMsg;

app.listen(3000, () => {
  console.log(3000);
});

export default app;
