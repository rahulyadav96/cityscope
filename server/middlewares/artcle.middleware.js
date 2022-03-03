const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../images/articleImages"))
    },
    filename: function (req, file, cb) {
      const uniqueprefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueprefix + '-' + file.originalname )
    }
  })

const fileFilter = (req, file, cb)=> {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  if(file.mimetype == "image/jpeg" || file.mimetype == "image/png"){

      // To accept the file pass `true`, like so:
      cb(null, true)

  }else{
      // To reject this file pass `false`, like so:
      cb(null, false)

  }

}
  

module.exports = multer({
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize: 1024*1024*2
    }
})