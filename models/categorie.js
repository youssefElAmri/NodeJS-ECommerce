const mongoose = require('mongoose');

let Categorie = mongoose.model('categorie', {
    nom: String,
    description: String,
})

module.exports = Categorie;