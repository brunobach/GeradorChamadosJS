const mongoose = require('mongoose')
require("dotenv").config()
const { Schema } = mongoose

const NoteSchema = new Schema({
    CNPJ: {type: String, required: true},
    incidente: {type: String, required: true},
    date: {type:Date, default: Date.now}
})

module.exports = mongoose.model('Note', NoteSchema)
