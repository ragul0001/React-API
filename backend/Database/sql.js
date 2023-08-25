const mysql=require('mysql');

const db_conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'Registration'
});

db_conn.connect((err)=>{
    if(err){
       console.log("Database Connections failed!!!",err);
    }
    else{
      console.log("Connected to Database");
      
       }
})
module.exports=db_conn;