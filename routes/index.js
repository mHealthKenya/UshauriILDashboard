var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require("body-parser");
var encoder = bodyParser.urlencoded();
const mysql = require("mysql");
var moment = require("moment");
var today = moment().toDate();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ushauri_il"
});

function formatDate(date) {
  return moment(date).format('YYYY-MM-DD');
}

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

  connection.query("select * from clients where created_at = ?",[today], function(error,results,fields){
      if (error){
          console.log(error)
      } else {

        rows = results.map(result=> ({
          ...result,
          enrollment_date: formatDate(result.enrollment_date),
          art_date: formatDate(result.art_date),
          date_processed: formatDate(result.date_processed)
        }));

        res.render("clients", {rows:rows})
      }
  })
})

router.post("/clients",encoder, function(req,res){
  var start = req.body.start_date;
  var end = req.body.end_date;

  if(end === "" || end === undefined) {
    end = moment().toDate() ;
  }

  connection.query("select * from clients where created_at between ? and ?",[start,end],function(error,results,fields){
    if (error){
      console.log(error)
    } else {

    rows = results.map(result=> ({
      ...result,
      enrollment_date: formatDate(result.enrollment_date),
      art_date: formatDate(result.art_date),
      date_processed: formatDate(result.date_processed)
    }));

    res.render("clients", {rows:rows})

    }  

  }) 
  
})

router.get("/appointments", function(req, res){

  connection.query("select * from appointments where created_at = ?",[today], function(error,results,fields){
      if (error){
          console.log(error)
      } else {

      rows = results.map(result=> ({
        ...result,
        appntmnt_date: formatDate(result.appntmnt_date),
        date_processed: formatDate(result.date_processed)
      }));

          res.render("appointments", {rows:rows})
      }
  })
})

router.post("/appointments",encoder, function(req, res){

  var start = req.body.start_date;
  var end = req.body.end_date;

  if(end === "" || end === undefined) {
    end = moment().toDate() ;
  }

  connection.query("select * from appointments where created_at between ? and ?",[start,end], function(error,results,fields){
      if (error){
          console.log(error)
      } else {

      rows = results.map(result=> ({
        ...result,
        appntmnt_date: formatDate(result.appntmnt_date),
        date_processed: formatDate(result.date_processed)
      }));

      res.render("appointments", {rows:rows})

      }
  })
})

router.get("/observations", function(req, res){

  connection.query("select * from clients_oru where created_at = ?",[today], function(error,results,fields){
      if (error){
          console.log(error)
      } else {

        rows = results.map(result=> ({
          ...result,
          observation_date: formatDate(result.observation_date),
          date_processed: formatDate(result.date_processed)
        }));

        res.render("observations", {rows:rows})
      }
  })
})

router.post("/observations",encoder, function(req, res){

  var start = req.body.start_date;
  var end = req.body.end_date;

  if(end === "" || end === undefined) {
    end = moment().toDate() ;
  }

  connection.query("select * from clients_oru where created_at between ? and ?",[start,end], function(error,results,fields){
    if (error){
        console.log(error)
    } else {

      rows = results.map(result=> ({
        ...result,
        observation_date: formatDate(result.observation_date),
        date_processed: formatDate(result.date_processed)
      }));

      res.render("observations", {rows:rows})
    }
  })
})

router.get("/logout", function(req, res, next) {
  res.sendFile(path.resolve("views/index.html"));
});

module.exports = router;
