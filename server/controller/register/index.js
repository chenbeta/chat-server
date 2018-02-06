import moment from 'moment';

export default class Register {
  static async register(req, res) {
    const { account, password } = req.body;
    if (!account) {
      return resMsg({ msg: '请设置登录名', success: false });
    }
    if (!password) {
      return resMsg({ msg: '请设置登录密码', success: false });
    }

    const isHave = await this.checkUser(account);

    if (isHave) {
      return resMsg({ msg: '请重新设置账号，当前账号已被注册', success: false });
    }

    const sql = 'insert into user set ?';
    let data = {
      user_account: account,
      user_password: password,
      register_time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      on_line_status: 0
    };
    const rest = await query(sql, data).catch(err => {
      console.log(err);
    });
    if (rest.affectedRows === 1) {
      return resMsg({ msg: '注册成功' });
    } else {
      return resMsg({ msg: '注册失败', success: false });
    }
  }

  static async checkUser(user) {
    const sql = `select * from user where user_account = ? limit 1`;
    const rows = await query(sql, user).catch(err => {
      console.log(err);
    });
    return rows.length;
  }
}
