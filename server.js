const express = require("express")
const app = express()
const mysql = require("mysql")
const path = require("path")
const fs = require("fs")
const cookieParser= require("cookie-parser")
const session= require("express-session")
const mysqlStore= require("express-mysql-session") (session)
const bodyParser = require("body-parser")
const ejs = require('ejs')
const dotenv = require('dotenv')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.enable("trust proxy", true)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.static("./public/"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

  const sqlmap = mysql.createConnection({
    host: process.env.host_name,
    user: process.env.user_name,
    password: process.env.user_password,
    database: process.env.database_name
  
  });

  // 



const sessionStore= new mysqlStore({
  expiration: 86400000,
  createDatabaseTable: true,
  schema: {
    tableName: "authentication_session",
    columnNames: {
      session_id: "session_id",
      expires: "session_expires",
      data: "session_data"
    }
  }
 }, sqlmap)


  app.use(cookieParser('noname'));
  app.use( session({
    key: 'auth',
    secret: 'pipra',
    store: sessionStore,
    resave: true,
    saveUninitialized: true,
    name: "alifn",
    cookie: {
      secure: false, httpOnly: true, maxAge: 86400000, 
    }
}))




sqlmap.connect((err, res) => {

  if (err) console.log("Server not running")
  else console.log("code by 3alifn...")
})




app.listen(process.env.listen_port||30)


module.exports= {
    app, express, mysql, session, cookieParser, bodyParser, sqlmap, dotenv, fs, path, ejs,
}

