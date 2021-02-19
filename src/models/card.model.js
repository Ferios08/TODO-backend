'user strict';
var pool = require('../../config/db.config');

//card object create
var card = function(card){
    this.task     = card.task;
    this.created_at     = new Date();

};
card.create = function (newCard, result) {    
    pool.query("INSERT INTO cards set ?", newCard, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
card.findById = function (id, result) {
    pool.query("Select * from cards where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
card.findAll = function (result) {
    pool.query("Select * from cards", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('cards : ', res);  
            result(null, res);
        }
    });   
};
card.update = function(id, card, result){
  pool.query("UPDATE cards SET task=?, WHERE id = ?", [card.task, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
card.delete = function(id, result){
     pool.query("DELETE FROM cards WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= card;