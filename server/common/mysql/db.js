import mysql from 'mysql';
import camelcase from 'camelcase';

const pool = mysql.createPool({
  host: '',
  user: '',
  password: '',
  database: ''
});

function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
}

export default (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            if (Array.isArray(rows)) {
              let objArr = rows.map(item => {
                let obj = {};
                for (let [key, value] of entries(item)) {
                  obj[camelcase(key)] = value;
                }
                return obj;
              });
              resolve(objArr);
            }
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};
