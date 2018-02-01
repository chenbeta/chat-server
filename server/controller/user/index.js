export default class User {
  static async getUser() {
    const sql = 'select * from user';
    const res = await query(sql).catch(err => {
      console.log(err);
    });
    return res;
  }
}
