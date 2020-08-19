var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  username: String,
  profileImg: {
      type: String
  },
  messages: []
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
