const express = require ('express');

const bodyParser = require('body-parser');
const mongoose = require('mongoose')
//set up express

const app = express();
//connect to mongoDB

mongoose.connect('mongodb://localhost/ninjago')
mongoose.promise = global.Promise;

app.use(bodyParser.json());
//initialize routes
app.use('/api',require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next){
  //console.log(err)
  res.status(422).send({error: err.message})
});


//listen for request   process.env.port is used for listning from live status like heroku

app.listen(process.env.port || 4000, function(){
  console.log('now listning for request');
});
