import express from 'express';
import apiRouter from './api';
import bodyParser from 'body-parser';
import query from './common/mysql/db';
import resMsg from './common/util/respMsg';

let app = express();
global.query = query;
global.resMsg = resMsg;

// 解析表单post数据
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello word123!');
});

// 使用路由
app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log(3000);
});

export default app;
