var User = require('../models/userModel');
var Product = require('../models/productModel');

exports.findAllUsers = async function (req, res) {
    var users = await User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    }).catch(err)
};

exports.findUser = async function (req, res) {
    var user = await User.findById(req.query.userID, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(user);
    }).catch(err)
};

exports.uploadProduct = async function (req, res) {
    var product = await Product.create({
                        name: req.body.name,
                        // image: {
                        //     type: String
                        // },
                        price: req.body.price,
                        description: req.body.description,
                        sellerID: req.query.userID
          }, function (err, product) {
        if (err) return res.status(500).send("There was a problem uploading the product.");
        res.status(200).send(product);
    }).catch(err)
};

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

// exports.sendMessage = async function(req, res){
//   Mail.create({
//           content: req.body.content,
//           date: req.body.date,
//           authorID: req.body.authorID,
//           authorName: req.body.authorName,
//           receiverID: req.query.userID
//       },
//       function (err, mail) {
//         console.log("this is: " + mail._id)
//           User.findByIdAndUpdate(req.query.userID, { $push: {"mailBox": mail._id} }, function (err, user) {
//               if(err){
//                 console.log(err)
//               } else {
//                 console.log("Updated User : ", user);
//                     res.status(200).send(user);
//                 }
//               });
//       });
// };
//
// exports.deleteMessages = async function(req, res){
//   User.findByIdAndUpdate(req.query.userID, { $set: {"mailBox": []} }, function (err, user) {
//       if(err){
//         console.log(err)
//       } else {
//         console.log("Updated User : ", user);
//             res.status(200).send(user);
//         }
//       });
// };
