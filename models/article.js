const mongoose = require('mongoose');

let Article = mongoose.model('article', {
    titre: String,
    contenu: String,
    page: Number,
    image: String
})

module.exports = Article;