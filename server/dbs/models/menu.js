const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MenuSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  child: {
    type: Array,
    require: true
  }
})
module.exports = mongoose.model('Menu', MenuSchema)