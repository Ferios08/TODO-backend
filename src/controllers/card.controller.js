'use strict';

const Card = require('../models/card.model');

exports.findAll = function (req, res) {
    Card.findAll(function (err, Card) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', Card);
        res.send(Card);
    });
};


exports.create = function (req, res) {
    const new_Card = new Card(req.body);

    //handles null error 
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Card.create(new_Card, function (err, Card) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Card added successfully!", data: Card });
        });
    }
};


exports.findById = function (req, res) {
    Card.findById(req.params.id, function (err, Card) {
        if (err)
            res.send(err);
        res.json(Card);
    });
};


exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Card.update(req.params.id, new Card(req.body), function (err, Card) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Card successfully updated' });
        });
    }

};


exports.delete = function (req, res) {
    Card.delete(req.params.id, function (err, Card) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Card successfully deleted' });
    });
};