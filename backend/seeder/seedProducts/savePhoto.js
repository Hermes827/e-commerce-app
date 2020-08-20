var multer = require('multer')
var { v4: uuidv4 } = require('uuid');
uuidv4()
var DIR = './photos1/';

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
      console.log(file)
        const fileName = file.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

const upload = (file) => {
  multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        // if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
          }
    //     } else {
    //         cb(null, false);
    //         // return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    // }
});
}


upload('Users/chriscable/Desktop/newprojects/five projects/e-commerce application/e-commerce-app/backend/seeder/seedProducts/photos/comfrey.png')
