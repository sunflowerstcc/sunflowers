const mongoose = require(`mongoose`)

const PubliSchema = mongoose.Schema({
  nameuser: { type: String, require: true },
  token: { type: String, require: true },
  path: { type: String, require: true },
  desc: { type: String, require: true },
  date: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Publi', PubliSchema)
