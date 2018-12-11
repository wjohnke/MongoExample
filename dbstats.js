
var mongo = require('mongodb');
var assert = require('assert');

var MongoClient = mongo.MongoClient;
var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, (err, db) => {
    
    assert.equal(null, err);
    
    db.stats((err, stats) => {

        assert.equal(null, err);
        
        console.dir(stats);
        
        db.close();
    })       
});

