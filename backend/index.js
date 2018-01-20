var express = require('express');
var app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/main', function(req, res){
  res.send("This is a main page");
});

app.post('/post', function(req, res){
  console.log(req.body);
  res.send("This is post request");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
