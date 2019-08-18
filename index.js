const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
var cors = require('cors');


  
//iniciar
const app = express();
require('./database');

//configuracoes
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDi: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//urls
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

//variaveis globais

//rotas
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));
//arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')));
//servidor
app.listen(app.get('port'), () => {
    console.log('servidor na porta ', app.get('port'))
});
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });