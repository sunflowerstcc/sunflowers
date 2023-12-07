const express = require('express')
const router = express.Router()
const uploadFP = require('../middlelwares/uploadImg')
const uploadFt = require('../middlelwares/uploadFt')
const Publi = require('../models/Publi')
const User = require('../models/User')
const fs = require(`fs`)

router.post('/img-perfil', uploadFt.single('image'), async (req, res) => {
  const { token } = req.body
  let lastImg

  if (req.file) {
    if (lastImg !== `uploads/fotoperfil/user.png`) {
      fs.unlink(`./${lastImg}`, (err) => {
        if (err) throw err
        //console.log(`Arquivo deletado`)
      })
    }

    await User.updateOne({ token: token }, { $set: { foto: req.file.path } })
    return res.json('imagem de perfil alterado ' + token)
  }
  return res.status(400).json({
    erro: true,
    mensagem: 'erro ao realizar o upload',
  })
})

router.post(`/token`, async (req, res) => {
  const { token } = req.body
  console.log(token)
  try {
    const data = await User.find({ token: token }, { foto: 1, _id: 0 })
    console.log(data)
    return res.json(data)
  } catch (error) {
    return res.json(error)
  }
})

router.post('/up-postagem', uploadFP.single('image'), async (req, res) => {
  const { token, nameUser, desc } = req.body
  console.log(req.file.filename)
  console.log(req.file.path)

  if (req.file) {
    const publi = new Publi({
      nameUser: nameUser,
      token: token,
      path: req.file.path,
      desc: desc,
    })
    publi
      .save()
      .then((data) => {})
      .catch((err) => {
        res.status(200).json({ message: err })
      })
    return res.json('upload ralizado com sucesso por ' + nameUser)
  }
  return res.status(400).json({
    erro: true,
    mensagem: 'erro ao realizar o upload',
  })
})

module.exports = router
