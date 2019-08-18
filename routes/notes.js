const express = require('express')
const router = express.Router();
const Note = require('../models/chamados')

router.get('/chamados/add', (req,res)=>{
    res.render('chamados/new.hbs')
})

router.post('/chamados/new', async (req,res) =>{
    const {CNPJ, incidente} = req.body
    const errors = []
    if(!CNPJ){
        errors.push({text: 'Por favor insira um CNPJ'})
    }
    
    if(!incidente){
        errors.push({text: 'Por favor insira um incidente'})
    }
    if(errors.length >0){
        res.render('chamados/new', {
            errors,
            CNPJ,
            incidente
        })
    }else{
        const newNote = new Note({CNPJ, incidente})
       await newNote.save()
       res.redirect('/chamados')
    
    }

})

router.get('/chamados', async (req, res) => {
    const notes = await Note.find().sort({date: 'desc'})
    res.render('chamados/all-chamados', {notes})
});


router.get('/gerar', (req, res) => {
    res.render('chamados/gerar');
});


module.exports = router;