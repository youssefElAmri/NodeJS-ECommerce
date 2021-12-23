const express = require('express');
const Produit = require('../models/produit');
const Router = express.Router();
const multer = require('multer');

//Ajout
Router.post('/ajoutproduit', (req, res) => {

        console.log(req.body);

        let ProduitFromPostman = req.body;

        let produit = new Produit(ProduitFromPostman);

        produit.save().then(
            (data) => {
                res.send(data);
            },
            (error) => {
                res.send(error);
            }
        )

    })
    //GetAll
Router.get('/getall', (req, res) => {
        Produit.find().then(
            (getall) => {
                res.send(getall);
            },
            (error) => {
                res.send(error);
            }
        )
    })
    //GetById

Router.get('/getbyid/:id', (req, res) => {

        let id = req.params.id;
        Produit.findOne({ _id: id }).then(

            (getbyid) => {
                res.send(getbyid);
            },
            (error) => {
                res.send(error);
            }

        )

    })
    //delete
Router.delete('/deleteproduit/:id', (req, res) => {
    let id = req.params.id;
    Produit.findByIdAndDelete({ _id: id }).then(
        (deleted) => {
            res.send(deleted);
        },
        (error) => {
            res.send(error);
        }
    )
});
//update

Router.put('/updated/:id', (req, res) => {

    let id = req.params.id;
    let p = req.body;

    Produit.findByIdAndUpdate({ _id: id }, {
        $set: { titre: p.titre, description: p.description },
        prix: p.prix,
        image: p.image
    }).then(
        (data) => {
            res.send(data);
        },
        (error) => {
            res.send(data);
        }

    )

});


module.exports = Router;