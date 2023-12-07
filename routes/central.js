const express = require('express')
const router = express.Router()
const mongoose = require(`mongoose`)
const session = ("../app")
require("../models/Denuncia")
const Denuncia = mongoose.model('denuncia')

router.get('/', (req, res) => {
    res.render(__dirname + "/../views/user/central", {title: "Central", layout: "central"})
  })

router.post('/denuncia', (req, res) => {
  const content = req.body.conte;

  newDenuncia = {
    content: content,
    date: new Date()
  }
  console.log(newDenuncia);

  new Denuncia(newDenuncia).save().then(() => {
    console.log("Denúncia registrada com sucesso.");
    res.status(200).redirect("/central")
  }).catch((err) => {
    console.log("Houve um erro ao registrar a denúncia: ", err)
  })


})

module.exports = router;