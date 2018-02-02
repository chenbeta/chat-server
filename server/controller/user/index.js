export default class User {
  static async getUser() {
    const sql = 'select * from user';
    const res = await query(sql).catch(err => {
      console.log(err);
    });
    return res;
  }

  static async addUser() {
    const sql = 'INSERT INTO user (user_account,user_password,register_time,login_socket_id,on_line_status) VALUES ("cccccc","bbbbb","2018-02-02 10:56:26","123",1) ';
    const res = await query(sql).catch(err => {
      console.log(err);
    });
    return res;
  }

  static async delUser() {
    const sql = 'DELETE FROM user WHERE user_account = "cccccc"';
    const res = await query(sql).catch(err => {
      console.log(err);
    });
    return res;
  }
}
