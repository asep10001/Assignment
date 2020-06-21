var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
	
});

app.get("/speak/:animals", function(req, res){
	var animalName = req.params.animals.toLowerCase();
	var says = {
		pig : "'Oink'",
		cow: "'Moo'",
		dog: "'Woof Woof!'",
		cat: "'I hate u hooman'",
		goldFish: "..."
		
	};
	var say = says[animalName];
	res.send("The " + animalName + " says " + say);

});

app.get("/repeat/:sentence/:numbers", function(req, res){
	var sentence = req.params.sentence;
	var num = Number(req.params.numbers);
	var result=" ";
	
	for(var i = 0; i<num; i++){
		result += " " + sentence;
	};
		res.send(result);
});

app.get("*", function(req, res){
	res.send("Sorry, page not found... What are you doing with your life?");
});
	
app.listen(3000, function(){
	console.log("Server is listening on port 3000!");
});