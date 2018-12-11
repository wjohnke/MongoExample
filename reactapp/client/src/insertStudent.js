

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

var data={};

MongoClient.connect(url, function(err,db) {
	if(err) throw err;
	var dbo = db.db("exploration2");
	if(data!=null){
		dbo.collection("students").insertOne(data, function(err, res) {
			if (err) throw err;
			console.log("Student Inserted");
			db.close();
		});
	}	
	
});


function onSubmit(){

	data= {
	"firstName": $('#firstName').val(),
	"lastName":$('#lastName').val(),
	"studentId":$('#studentId').val(),
	"pawprint":$('#pawprint').val(),
	"address1":$('#address1').val(),
	"address2":$('#address2').val(),
	"city":$('#city').val(),
	"state":$('#state').val(),
	"country":$('#country').val(),
	"zip":$('#zip').val(),
	"dob":$('#dob').val(),
	"dateApplied":new Date(),
	"major":$('#major').val(),
	"interests":$('#interests').val()
	};

}

