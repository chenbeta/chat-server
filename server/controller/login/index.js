import reg from '../register/index';

export default class Login {
  static async login(req, res) {
    const { user, pwd } = req.body;
    if(!user){
      return resMsg({ msg: '请输入账号', success: false });
    }
    const isHave = await reg.checkUser(user);
    if (isHave === 0) {
      return resMsg({ msg: '此帐号不存在', success: false });
    }
    const userId = await this.checkPwd(user, pwd);
    if (userId === 0) {
      return resMsg({ msg: '密码错误', success: false });
    }

    return resMsg({ msg: '登陆成功' });
  }

  static async checkPwd(user, pwd) {
    const sql = `select id from user where user_account = ? and user_password= ? limit 1 `;
    const rows = await query(sql, [user, pwd]).catch(err => {
      console.log(err);
    });
    return rows.length > 0 ? rows[0].id : 0;
  }
}
