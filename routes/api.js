const express = require('express');

const router = express.Router();
const Ninja = require('../models/names');
//get a list of person

router.get('/names', function(req, res, next){
  Ninja.geoNear({
    type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)] }//parseFloat is used to convert the string to numbers
     {maxDistance: 100000, spherical: true}
  ).then(function(names){ //call back function will return the value
    res.send(names)
  });
});

//add a new name to db

router.post('/names', function(req, res, next){
  Ninja.create(req.body).then(function(ninja){
  res.send(ninja)

}).catch(next);
});

//update the list in db
router.put('/names/:id', function(req, res, next){
  Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Ninja.findOne({_id: req.params.id}).then(function(ninja){
      res.send(ninja)
  })
});
});

//delete from db

router.delete('/names/:id', function(req, res,next){
  Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja))
  res.send(ninja)
  });
});

module.exports = router;
