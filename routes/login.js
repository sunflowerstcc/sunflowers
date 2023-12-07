const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/User')
const User = mongoose.model('User')
const session = ("../app")

router.get('/', (req, res) => {
    res.render(__dirname + "/../views/user/login", {title: "Login", layout: "login", errStatus: 0})
  })

router.post('/val', async (req,res) => {
    
    const session = req.session;
    const email = req.body.email;
    const pass = req.body.password;
    const result = await User.findOne({email: email, pass: pass})

    if (result != null){

      session.token = {
        name: result.name,
        email: result.email,
        token: result.token,
        foto: result.foto,
        pass: result.pass
      }

      session.save((err) => {
        // console.log(err)
      });
      
      res.redirect("/")
    }else{
      res.render(__dirname + "/../views/user/login", {title: "Login", layout: "login", errStatus: 303})
    }
})

module.exports = router;