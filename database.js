const mongoose = require('mongoose');
require("dotenv").config()

mongoose.connect('process.env.DB_URI', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB está conectado'))
    .catch(err => console.error(err));
