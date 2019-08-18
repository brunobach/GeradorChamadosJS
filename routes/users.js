const express = require('express')
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('users/logar');
});

router.get('/registrar', (req, res) => {
    res.render('users/registrar');
});
module.exports = router;