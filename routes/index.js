var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require("body-parser");
var encoder = bodyParser.urlencoded();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ushauri_il"
});

// connect to the database
connection.connect(function(error){
  if (error) throw error
  else console.log("connected to the database successfully!")
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve("views/index.html"));
});

router.post("/",encoder, function(req,res){
  var username = req.body.username;
  var password = req.body.password;

  connection.query("select * from users where username = ? and password = ?",[username,password],function(error,results,fields){
      if (results.length > 0) {
          res.redirect("/clients");
      } else {
          res.redirect("/");
      }
      res.end();
  })
})

router.get("/clients", function(req, res){

  connection.query("select * from clients", function(error,results,fields){
      if (error){
          console.log(error)
      } else {
          res.render("clients", {results:results})
      }
  })
})

router.get("/appointments", function(req, res){

  connection.query("select * from appointments", function(error,results,fields){
      if (error){
          console.log(error)
      } else {
          res.render("appointments", {results:results})
      }
  })
})

router.get("/logout", function(req, res, next) {
  res.sendFile(path.resolve("views/index.html"));
});

router

module.exports = router;
