const multer = require('multer')
const path = require('path')

module.exports = (multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './uploads/fotoperfil')
        },
        filename: function (req, file, cb) {
          cb(null, 'fp-' + Date.now() + '-' + path.extname(file.originalname))
        }
      }),
      fileFilter: (req, file, cb) => {
        const extImg=['image/png','image/jpg', 'image/jpeg'].find
        (formatoAceito => formatoAceito == file.mimetype);
        if(extImg){
            return cb(null, true)
        }
        return cb(null, false)
      }
}))
 
  
