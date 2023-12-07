const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  pass: {
    type: String,
    require: true,
  },
  token: {
    type: String,
    require: true,
  },
  foto: {
    type: String,
    default: 'uploads/fotoperfil/user.png',
  },
})

module.exports = mongoose.model('User', UserSchema)
