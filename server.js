const express = require("express");
const fs = require('fs');

const app = express();
const port = 8009;

app.get("/load", function(req,res){

	fs.readFile("person.txt", function(err,data) {

		res.send(JSON.Parse(data));
	});

});

app.post("/save", function(req,res){
	console.log(req.body);
	fs.writeFile("person.txt", JSON.stringify( { name: req.body, age: req.body } )  , function(err) {
		if(err) {
			console.error(err);
			return console.log(err);
		}
		console.log("The file was saved!");
	}); 
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
