var express = require('express');
var app = express();
var mysql = require('mysql');
var cors = require('cors')
app.use(cors())

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'archi_si'
});

connection.connect();

app.get('/getAllData', function (req, res) {
   connection.query('SELECT * FROM data', function(err, results) {
      if (err) throw err;
      res.status(200).send(JSON.stringify({"status": 200, "error": null, "datas": results}))
      // res.send(JSON.stringify({"status": 200, "error": null, "datas": results}), 200);
   });
})

app.get('/findOneBy', function (req, res) {
   connection.query('SELECT * FROM data WHERE numUnite=?',[req.query.numUnite], function(err, results) {
      if (err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "datas": results}), 200);
   });
 });

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Au bon beurre : http://%s:%s", host, port)
})