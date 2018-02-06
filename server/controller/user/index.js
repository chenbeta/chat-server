export default class User {
  static async getUser() {
    const sql = 'select * from user';
    const res = await query(sql).catch(err => {
      console.log(err);
    });
    return res;
  }

  static async setUserInfo(req, res) {
    let sql = '';
    const { userId, nickName, userFace, sex, birthday, signature } = req.body;
    if(!userId){
      return resMsg({ msg: '请登录', success: false });
    }
    if(!nickName){
      return resMsg({ msg: '请填写昵称', success: false });
    }
    if(!sex){
      return resMsg({ msg: '请选择性别', success: false });
    }
    const data = {
      user_id: userId,
      user_nick_name: nickName,
      user_face: userFace,
      sex: sex,
      birthday: birthday,
      signature: signature
    };
    const userItem =await this.checkUserInfo(userId);
    if (userItem.length) {
      sql = 'UPDATE user_info SET ?';
    } else {
      sql = 'INSERT INTO user_info SET ?';
    }
    const result = await query(sql, data).catch(err => {
      console.log(err);
    });
    if (result.affectedRows === 1) {
      return resMsg({ msg: '操作成功' });
    } else {
      return resMsg({ msg: '操作失败', success: false });
    }
  }

  static async checkUserInfo(userId) {
    const sql = 'select * from user_info where user_id = ?';
    const userItem = await query(sql, [userId]).catch(err => {
      console.log(err);
    });
    return userItem;
  }
}
