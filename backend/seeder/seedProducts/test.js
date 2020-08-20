// var mongodb = require('mongodb')
// var MongoClient = require('mongodb').MongoClient;
// var fs = require('fs');
// var url = 'mongodb://127.0.0.1:27017/ECA_db';
//
// MongoClient.connect(url, function(err, client) {
//
//   var dbName = 'ECA_db';
//
//   var db = client.db(dbName);
//
//     if (err) {
//         console.log('Sorry unable to connect to MongoDB Error:', err);
//     } else {
//         var bucket = new mongodb.GridFSBucket(db, {
//             chunkSizeBytes: 1024,
//             bucketName: 'images'
//         });
//
//         fs.createReadStream('/Users/chriscable/Desktop/newprojects/five projects/e-commerce application/e-commerce-app/backend/seeder/seedProducts/photos/comfrey.png').pipe(
//             bucket.openUploadStream('comfrey.png')).on('error', function(error) {
//             console.log('Error:-', error);
//         }).on('finish', function() {
//             console.log('File Inserted!!');
//             process.exit(0);
//         });
//     }
// });
//
// exports.uploadPhoto = async function (req, res) {
//   const url = req.protocol + '://' + req.get('host')
//   User.findByIdAndUpdate(req.userId, {profileImg: url + '/public/' + req.file.filename}, function (err, user) {
//       if(err){
//         console.log(err)
//       } else {
//         console.log("Updated User : ", user);
//             res.status(200).send(user);
//         }
//       });
//     };

var mongodb = require('mongodb')
var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
var url = 'mongodb://127.0.0.1:27017/ECA_db';


MongoClient.connect(url, function(err, client) {

  var dbName = 'ECA_db';

  var db = client.db(dbName);

    if (err) {
        console.log('Sorry unable to connect to MongoDB Error:', err);
    } else {
        var bucket = new mongodb.GridFSBucket(db, {
            chunkSizeBytes: 1024,
            bucketName: 'images'
        });

        fs.createReadStream('/Users/chriscable/Desktop/newprojects/five projects/e-commerce application/e-commerce-app/backend/seeder/seedProducts/photos/comfrey.png').pipe(
            bucket.openUploadStream('comfrey.png')).on('error', function(error) {
            console.log('Error:-', error);
        }).on('finish', function() {
            console.log('File Inserted!!');
            process.exit(0);
        });
    }
});

exports.uploadPhoto = async function (req, res) {
  const url = req.protocol + '://' + req.get('host')
  User.findByIdAndUpdate(req.userId, {profileImg: url + '/public/' + req.file.filename}, function (err, user) {
      if(err){
        console.log(err)
      } else {
        console.log("Updated User : ", user);
            res.status(200).send(user);
        }
      });
    };
