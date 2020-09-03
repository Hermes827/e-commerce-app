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

exports.editUser = async function (req, res) {
  const url = req.protocol + '://' + req.get('host')
  console.log(req.query.userID)
  User.findByIdAndUpdate(req.query.userID, {profileImg: url + '/public/' + req.file.filename}, function (err, user) {
      if(err){
        console.log(err)
      } else {
        console.log("Updated User : ", user);
            res.status(200).send(user);
        }
      });
    };


exports.uploadProduct = async function (req, res) {
    var url = req.protocol + '://' + req.get('host')
    var product = await Product.create({
                        name: req.body.name,
                        image: url + '/public/' + req.file.filename,
                        price: req.body.price,
                        description: req.body.description,
                        sellerID: req.body.sellerID
          }, function(err, product){
            if(err){return res.status(500).send("There was a problem uploading the product.")}
            res.status(200).send(product);
            User.findByIdAndUpdate(req.body.sellerID, {$push: {"products": product._id}}, function(err, user){
              if(err){
                console.log(err)
              } else {
                console.log(user)
              }
            })
          })
        };

exports.addToCart = function (req, res) {
    User.findByIdAndUpdate(req.body.userID, {$addToSet: {"shoppingCart": req.body.productID}}, function(err, data){
    if(err){return res.status(500).send("There was a problem adding the product to the cart.")}
    res.status(200).send(data);
  })
};

exports.purgeCart = async function (req, res) {
  await User.findByIdAndUpdate(req.body.userID, {$set: {"shoppingCart": []}}, function(err, data){
    if(err){return res.status(500).send("There was a problem adding the product to the cart.")}
    res.status(200).send(data);
  })
  }

exports.purgeProducts = function (req, res) {
  console.log(req.query.sellerID)
  User.findByIdAndUpdate(req.query.sellerID, {$set: {"products": []}}, function(err, user){
    if(err){
      console.log(err)
    } else {
      console.log(user)
      res.status(200).send(user);
    }
  })
}

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
