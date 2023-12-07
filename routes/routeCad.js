const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { checkEmail, Login } = require('./checks')
const { randomUUID } = require('crypto')

router.post('/', async (req, res) => {
  const email = req.body.email
  try {
    const data = await checkEmail(email)
    if (data.length == 0) {
      res.json({ message: 'email ja ultilizado' })
    }
    res.json(data)
  } catch (err) {
    res.json(err)
  }
})

router.post('/login', async (req, res) => {
  const { email, pass } = req.body

  try {
    const hasEmail = await checkEmail(email)

    if (hasEmail.length == 0) {
      res.json({ message: `you dont have a cont` })
    }
    const data = await Login(email, pass)
    res.json(data)
  } catch (err) {
    res.json(err)
  }
})

router.post('/cad', async (req, res) => {
  const { name, email, pass } = req.body
  try {
    const data = await checkEmail(email)
    if (data.length == 0) {
      const user = new User({
        name: name,
        email: email,
        pass: pass,
        token: randomUUID(),
      })
      user
        .save()
        .then((data) => {
          res.json(data)
        })
        .catch((err) => {
          res.status(200).json({ message: err })
        })
    } else {
      res.status(500).json({ message: 'email ja ultilizado' })
    }
  } catch (err) {
    res.json(err)
  }
})

router.post('/denuncia', (req, res) => {
  const { userDenunciado, motivo, user } = req.body
  res.json(
    `usuario denunciado ${userDenunciado} por ${user} pelo motivo: ${motivo} ` +
      user
  )
})

module.exports = router
