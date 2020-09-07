var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://127.0.0.1:27017/ECA_db');
mongoose.connect('mongodb://127.0.0.1:27017/ECA_db1');

// mongoose.connect('mongodb://127.0.0.1:27017/ECA_db', { useNewUrlParser: true, useUnifiedTopology: true });
