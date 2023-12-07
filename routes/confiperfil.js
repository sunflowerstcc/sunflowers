const express = require('express')
const router = express.Router()
const session = ("../app")


router.get('/', (req, res) => {
  const session = req.session;
  if(session.token){
    res.render(__dirname + "/../views/user/confiperfil", {title: "Confiperfil", layout: "confiperfil"})
  }else{
    res.redirect("/")
  }

  })

module.exports = router;