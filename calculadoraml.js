var express = require('express');
var app = express();

app.get('/add/:num1/:num2', function(req, res){

	var num1 = parseFloat(req.params.num1);
	var num2 = parseFloat(req.params.num2);
	var soma = num1 + num2;

    res.json({"soma" : soma});
    
});

app.get('/div/:num1/:num2', function(req, res){

	var num1 = parseFloat(req.params.num1);
	var num2 = parseFloat(req.params.num2);
	var divisao = num1 / num2;

    res.json({"divisão" : divisao});
    
});


app.get('/mult/:num1/:num2', function(req, res){

	var num1 = parseFloat(req.params.num1);
	var num2 = parseFloat(req.params.num2);
	var mult = num1 * num2;

    res.json({"Multiplicação" : mult});
    
});

app.get('/sub/:num1/:num2', function(req, res){

	var num1 = parseFloat(req.params.num1);
	var num2 = parseFloat(req.params.num2);
	var sub = num1 - num2;

    res.json({"subtração" : sub});
    
});



app.listen(3000);