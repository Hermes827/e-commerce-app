var mongoose = require('mongoose');
var schema = mongoose.Schema
var ObjectId = schema.Types.ObjectId

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  username: String,
  profileImg: {
      type: String
  },
  messages: [],
  shoppingCart: [],
  products: [{
        type: ObjectId,
        ref: "Product"
      }]
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
