const mongoose = require('mongoose');

let Produit = mongoose.model('produit', {
    titre: String,
    description: String,
    prix: Number,
    image: String
})

module.exports = Produit;