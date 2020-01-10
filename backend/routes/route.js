const express = require('express');
const app = express();
const meanRoute = express.Router();

//Require model in our route module
let meanModel = require('../models/model');


meanRoute.route('/add').post(function(req, res){
    let crud = new meanModel(req.body);
    crud.save()
    .then(crud => {
        res.status(200).json({'crud': 'Fields added to the database succesfully'});
    })
    .catch(err => {
        res.status(400).send("Unable to save to the database");
    });
});

// To get the data
meanRoute.route('/').get(function (req, res) {
    meanModel.find(function (err, data){
        if(err){
            console.log(err);
        }
        else {
            res.json(data);
        }
    });
});

// TO Define edit route
meanRoute.route('/edit/:id').get(function (req, res){
    let id = req.params.id;
    meanModel.findById(id, function (err,data){
        res.json(data);
    });
});

//Defined Update route
meanRoute.route('/update/:id').post(function (req, res){
    meanModel.findById(req.params.id, function(err, meanModel){
        if (!meanModel)
        res.status(404).send("Records not found");
        else{
            meanModel.name= req.body.name;
            meanModel.price= req.body.price;
            meanModel.comment= req.body.comment;

            meanModel.save().then(meanModel => {
                res.json('Update complete');
            })
            .catch(err => {
                res.status(400).send("Unable to update the database");
            });         
        }
    });
});


// TO delete a particular data
meanRoute.route('/delete/:id').get(function (req, res) {
meanModel.findByIdAndRemove({_id: req.params.id}, function(err, blog){
    if(err) res.json(err);
    else res.json('Successfull removed')
});
});


module.exports = meanRoute;