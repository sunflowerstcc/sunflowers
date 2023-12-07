const express = require('express')
const app = express()
const port = 3010;
const cors = require('cors')
const session = require('express-session');
const mongoose = require('mongoose')
const routerCad = require('./routes/routeCad.js')
const routerFoto = require('./routes/routeFotos.js')
const mapa = require('./routes/mapa.js')
const central = require('./routes/central.js')
const configeral = require('./routes/configeral.js')
const editarperfil = require('./routes/editarperfil.js')
const cadastrar = require('./routes/cadastrar.js')
const login = require('./routes/login.js')
const foto = require('./routes/foto.js')
const confiperfil = require('./routes/confiperfil.js')
const handlebars = require("express-handlebars");
const path = require("path");

//Sessões

app.use(session({
  secret: 'chaveextremamentesecreta',
  resave: true,
  saveUninitialized: true
}));

//Body Parser

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors())

//Handlebars

app.engine('handlebars', handlebars.engine({
  defaultLayout: 'main',
  layoutsDir: './views/layouts'
}));
app.set('view engine', 'handlebars');

//Path

app.use(express.static(path.join(__dirname, "/public")))
app.use('/uploads', express.static('./uploads'))

//Rotas
app.use('/login', routerCad)
app.use('/fotos', routerFoto)
app.use('/mapa', mapa)
app.use('/central', central)
app.use('/configeral', configeral)
app.use('/editarperfil', editarperfil)
app.use('/cadastrar', cadastrar)
app.use('/login', login)
app.use('/foto', foto)
app.use('/confiperfil', confiperfil)

app.get('/', (req, res) => {
  res.render(__dirname + "/views/user/index", {title: "Inicial"})
})

module.exports = session;


mongoose.Promise = global.Promise;

const uri = 'mongodb+srv://sunflowers:KnhNYPv3CK9CjFLZ@sunflowers.jli8hs2.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri).then(() => {
  console.log("Banco de dados conectado com sucesso!");
}).catch((err) => {
  console.log("Erro ao se conectar com o banco de dados: " + err);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
