const mysql = require("mysql");

//create connection
const db=mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'student_management_system',
  port:'3307'
})
//connect
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("database connected successfully!!!!!");
  }
});

module.exports = db;
