var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require("body-parser");
var encoder = bodyParser.urlencoded();
const mysql = require("mysql");
var moment = require("moment");
var today = moment(new Date()).format("YYYY-MM-DD")
var internetAvailable = require("internet-available");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  port: 3306,
  database: "ushauri_il"
});

function formatDate(date) {
  return moment(date).format('YYYY-MM-DD ');
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
          res.redirect("/general-logs");
      } else {
          res.redirect("/");
      }
      res.end();
  })
})

router.get("/settings", function(req,res, next) {
  res.sendFile(path.resolve("views/settings.pug"));
})

router.get("/clients", function(req, res){

  connection.query("select * from clients where created_at >= ?",today, function(error,results,fields){
      if (error){
          console.log(error)
      } else {

        internetAvailable({
          // Provide maximum execution time for the verification
          timeout: 5000,
          // If it tries 5 times and it fails, then it will throw no internet
          retries: 5
        }).then(() => {

          var msg = "Online"

          rows = results.map(result=> ({
            ...result,
            enrollment_date: formatDate(result.enrollment_date),
            art_date: formatDate(result.art_date),
            date_processed: formatDate(result.date_processed)
          })); 

          res.render("clients",{
            rows:rows,
            msg:msg
          })

        }).catch(() => {
            
          var msg = "Please Connect to the internet"

          rows = results.map(result=> ({
            ...result,
            enrollment_date: formatDate(result.enrollment_date),
            art_date: formatDate(result.art_date),
            date_processed: formatDate(result.date_processed)
          })); 

          res.render("clients",{
            rows:rows,
            msg:msg
          })
        }); 

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

  connection.query("select * from appointments where created_at >= ?",[today], function(error,results,fields){
      if (error){
          console.log(error)
      } else {

        internetAvailable({
          // Provide maximum execution time for the verification
          timeout: 5000,
          // If it tries 5 times and it fails, then it will throw no internet
          retries: 5
        }).then(() => {

          var msg = "Online"

          rows = results.map(result=> ({
            ...result,
            appntmnt_date: formatDate(result.appntmnt_date),
            date_processed: formatDate(result.date_processed)
          }));

          res.render("appointments",{
            rows:rows,
            msg:msg
          })

        }).catch(() => {
            
          var msg = "Please Connect to the internet"

          rows = results.map(result=> ({
            ...result,
            appntmnt_date: formatDate(result.appntmnt_date),
            date_processed: formatDate(result.date_processed)
          }));

          res.render("appointments",{
            rows:rows,
            msg:msg
          })
        }); 

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

  connection.query("select * from clients_oru where created_at >= ?",[today], function(error,results,fields){
      if (error){
          console.log(error)
      } else {

        internetAvailable({
          // Provide maximum execution time for the verification
          timeout: 5000,
          // If it tries 5 times and it fails, then it will throw no internet
          retries: 5
        }).then(() => {

        var msg = "Online"

        rows = results.map(result=> ({
          ...result,
          observation_date: formatDate(result.observation_date),
          date_processed: formatDate(result.date_processed)
        }));

        res.render("observations",{
          rows:rows,
          msg:msg
        })

      }).catch(() => {
            
        var msg = "Please Connect to the internet"

        rows = results.map(result=> ({
          ...result,
          observation_date: formatDate(result.observation_date),
          date_processed: formatDate(result.date_processed)
        }));

        res.render("observations",{
          rows:rows,
          msg:msg
        })
      }); 

        

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

router.get("/general-logs", function(req, res){

  connection.query("select * from logs where created_at >= ?",[today], function(error,results,fields){
      if (error){
          console.log(error)
      } else {

        internetAvailable({
          // Provide maximum execution time for the verification
          timeout: 5000,
          // If it tries 5 times and it fails, then it will throw no internet
          retries: 5
        }).then(() => {

          var msg = "Online"

          rows = results.map(result=> ({
            ...result,
            date_processed: formatDate(result.date_processed)
          }));

          res.render("general",{
            rows:rows,
            msg:msg
          })

        }).catch(() => {
            
          var msg = "Please Connect to the internet"

          rows = results.map(result=> ({
            ...result,
            date_processed: formatDate(result.date_processed)
          }));

          res.render("general",{
            rows:rows,
            msg:msg
          })

        })  

      }
  })
})

router.post("/general-logs",encoder, function(req, res){

  var start = req.body.start_date;
  var end = req.body.end_date;

  if(end === "" || end === undefined) {
    end = moment().toDate() ;
  }

  connection.query("select * from logs where created_at between ? and ?",[start,end], function(error,results,fields){
    if (error){
        console.log(error)
    } else {

      rows = results.map(result=> ({
        ...result,
        date_processed: formatDate(result.date_processed)
      }));

      res.render("general", {rows:rows})
    }
  })
})

router.get("/logout", function(req, res, next) {
  res.sendFile(path.resolve("views/index.html"));
});

module.exports = router;
