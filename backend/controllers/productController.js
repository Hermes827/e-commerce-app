var Product = require('../models/productModel');

exports.findAllProducts = async function (req, res) {
    var products = await Product.find({}, function (err, products) {
        if (err) return res.status(500).send("There was a problem finding the products.");
        res.status(200).send(products);
    })
};

exports.findProduct = async function (req, res) {
    var product = await Product.findById(req.query.productID, function (err, product) {
        if (err) return res.status(500).send("There was a problem finding the products.");
        res.status(200).send(product);
    })
};

exports.findProductByName = async function (req, res) {
    var product = await Product.find({"name": req.query.searchTerm}, function (err, product) {
        if (err) return res.status(500).send("There was a problem finding the products.");
        res.status(200).send(product);
    })
};

exports.createProduct = async function (req, res) {
    var product = await Product.create({
                        name: req.body.name,
                        image: req.body.image,
                        price: req.body.price,
                        description: req.body.description,
                        sellerID: req.body.sellerID
          }, function (err, product) {
        if (err) return res.status(500).send("There was a problem creating the product");
        res.status(200).send(product);
    })
};

exports.deleteProducts = async function(req, res){
  Product.remove({}, function (err, products) {
      if (err) return res.status(500).send("There was a problem finding the products.");
      res.status(200).send("Deleted all products");
  })
};

// exports.createProduct = async function (req, res) {
//     var product = await Product.findById(req.query.productID, function (err, product) {
//         if (err) return res.status(500).send("There was a problem finding the products.");
//         res.status(200).send(product);
//     });
// };

// exports.uploadPhoto = async function (req, res) {
//   const url = req.protocol + '://' + req.get('host')
//   Product.findByIdAndUpdate(req.productId, {profileImg: url + '/public/' + req.file.filename}, function (err, product) {
//       if(err){
//         console.log(err)
//       } else {
//         console.log("Updated Product : ", product);
//             res.status(200).send(product);
//         }
//       });
//     };

// exports.sendMessage = async function(req, res){
//   Mail.create({
//           content: req.body.content,
//           date: req.body.date,
//           authorID: req.body.authorID,
//           authorName: req.body.authorName,
//           receiverID: req.query.productID
//       },
//       function (err, mail) {
//         console.log("this is: " + mail._id)
//           Product.findByIdAndUpdate(req.query.productID, { $push: {"mailBox": mail._id} }, function (err, product) {
//               if(err){
//                 console.log(err)
//               } else {
//                 console.log("Updated Product : ", product);
//                     res.status(200).send(product);
//                 }
//               });
//       });
// };
//
// exports.deleteMessages = async function(req, res){
//   Product.findByIdAndUpdate(req.query.productID, { $set: {"mailBox": []} }, function (err, product) {
//       if(err){
//         console.log(err)
//       } else {
//         console.log("Updated Product : ", product);
//             res.status(200).send(product);
//         }
//       });
// };
