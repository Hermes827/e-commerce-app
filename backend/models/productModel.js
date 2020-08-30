var mongoose = require('mongoose');
var schema = mongoose.Schema
var ObjectId = schema.Types.ObjectId

var ProductSchema = new mongoose.Schema({
  name: String,
  image: {
      type: String
  },
  price: String,
  description: String,
  sellerID: ObjectId
});
mongoose.model('Product', ProductSchema);

module.exports = mongoose.model('Product');
