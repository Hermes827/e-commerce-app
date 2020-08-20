var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
  name: String,
  image: {
      type: String
  },
  price: String,
  description: String,
  sellerID: String
});
mongoose.model('Product', ProductSchema);

module.exports = mongoose.model('Product');
