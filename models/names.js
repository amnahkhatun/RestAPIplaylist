const mongoose = require('mongoose')

const Schema = mongoose.Schema;

//create geolocation Schema

const Geolocation = new Schema({

  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

//create schema and model

const ninjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is requires']
  },
  job: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
})

const Ninja = mongoose.model('ninja', ninjaSchema);

module.exports = Ninja;
