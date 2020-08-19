var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
var cors = require('cors')
app.use(cors());
app.use('/public', express.static('public'));
var port = process.env.PORT || 4000;

//////////////////////////////////////////////////

// var UserRouter = require('./routes/userRoutes');
// app.use('/users', UserRouter);

var ProductRouter = require('./routes/productRoutes');
app.use('/products', ProductRouter);

/////////////////////////////////////////////////

app.use((req, res, next) => {
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
