var mongo = require('mongodb');
var assert = require('assert');

var MongoClient = mongo.MongoClient;
var url = 'mongodb://localhost:27017/testdb';

MongoClient.connect(url, (err, db) => {
    
    assert.equal(null, err);
           
    db.listCollections().toArray((err, collections) => {
        
        assert.equal(err, null);

        console.dir(collections);
        
        db.close();
    });
});
