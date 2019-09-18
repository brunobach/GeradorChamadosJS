const mongoose = require('mongoose');
require("dotenv").config()

mongoose.connect('mongodb+srv://dbUser:dbPass@clusterbruno-hbzd9.mongodb.net/test?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB está conectado'))
    .catch(err => console.error(err));
