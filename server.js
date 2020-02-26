const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(allowCrossDomain);
//some other code   

const port = process.env.PORT || 8080;

 app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "mydb",
  multipleStatements: true

});


con.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
 
app.get('/api', (req, res) => {
  con.query("SELECT * FROM smallapp", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
})


app.post('/new', function(req, res, next) {
 con.query('insert into smallapp(name,email,password) values("'+req.body.name+'","'+req.body.email+'","'+req.body.password+'");', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});

app.post('/auth', function(req,res,next){
  var username = req.body.name;
  var password = req.body.password;
  if (username && password) {
  con.query('select id from smallapp where name="'+req.body.name+'" and password="'+req.body.password+'";', function(error, results, fields) {
    if (results != '') {
     res.send(JSON.stringify('true'))
    } else {
      res.send(JSON.stringify('false'));
    }			
  });
} else {
  res.send('Please enter Username and Password!');
}

})

})

app.listen(port, () => console.log(`Listening on port ${port}`));