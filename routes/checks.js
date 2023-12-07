const User = require('../models/User')

async function checkEmail(email) {
  try {
    const data = await User.find({ email: email })
    return data
  } catch (err) {
    return err
  }
}

async function Login(email, pass) {
  try {
    const data = await User.find({ email: email, pass: pass })
    if (data.length == 0) {
      return { message: 'email or password incorrect' }
    }
    return data
  } catch (err) {
    return err
  }
}

module.exports = { checkEmail, Login }
