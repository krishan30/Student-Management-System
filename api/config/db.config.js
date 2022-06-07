const mysql = require("mysql");

//create connection
const db=mysql.createConnection({
  host: 'sql6.freesqldatabase.com',
  user: 'sql6497198',
  password: 's9KSCTJ2iA',
  database: 'sql6497198',
  port:'3306'
})
//connect
db.connect((err)=>{
  if(err){
      console.log(err);
  }
  else{
    console.log("database connected successfully!!!!!");
  }

});

module.exports=db;
