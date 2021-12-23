const express = require('express');
const mongoose = require('./database/connect');
const bodyparser = require('body-parser');

const produitAPI = require('./routes/produit');

let app = express();
app.use(bodyParser.json());

app.use('/produit', produitAPI)

app.listen(8000, () => {
    //CallBack function démarre à l'instant ou le serveur se déclenche 

    console.log(`Server started on port 8000`);
});