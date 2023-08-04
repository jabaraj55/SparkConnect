const express = require ("express");
const mysql = require ("mysql");
const bodyparser = require ("body-parser");
const fileupload = require ("express-fileupload");
const cors = require ("cors");

const app = express();

app.use (fileupload())
app.use (express.json())
app.use (bodyparser.json())
app.use (bodyparser.urlencoded())
app.use (cors()) 
app.use(express.static("public"))

const con = mysql.createConnection({
  host : "localhost",
  port : "3306",
  user : "root",
  password : "Rajapandi@55",
  database : "spark_connect"
})
con.connect(function(error){
  if (error) {
    console.log(error);
  } else {
    console.log("you have successfully connected");
  }
})






app.listen(5000);