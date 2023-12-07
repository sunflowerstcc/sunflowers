const { randomUUID } = require('crypto')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/User')
const User = mongoose.model('User')

router.get('/', (req, res) => {
    res.render(__dirname + "/../views/user/cadastrar", {title: "Cadastrar", layout: "cadastrar"})
  })

router.post('/', (req, res) => {
  
  const name = req.body.name;
  const email = req.body.email;
  const pass = req.body.password;

  const newUser = {
    name: name,
    email: email,
    pass: pass,
    token: randomUUID(),
  }
  new User(newUser).save().then(() => {
    console.log("Usuário cadastrado com sucesso.");
    res.redirect("/login")
  }).catch((err) => {
    console.log("Houve um erro ao cadastrar o usuário: ", err)
  })

})

module.exports = router;