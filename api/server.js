console.log ("Mitchman is in the house!")
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var Recipe = require('./models/Recipe')
mongoose.connect('mongodb://localhost/data/db/');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});

app.use(bodyParser.json({}));
app.use(express.static(__dirname + './../app/'));

//DEFINE MODELS
var Recipe = require('./models/Recipe')

//DEFINE ROUTES
var recipe_routes = require('./routes/recipes');
var init_routes = require('./routes/init');

app.use('/routes/recipes',recipe_routes);
app.use('/routes/init',init_routes);

app.listen(80, function() {
  console.log('listening on 80')
});

app.get('/', function (req, res){
  res.sendFile('index.html')
});








// var newRecipe = new Recipe(
//     {
//         Name: "Veggie Stir Fry",
//         User: "Mitch",
//  		FoodCat: "Veggie",
//  		Ingredients:[{
//             "QTY": "1",
//             "Measure": "cup",
//             "Ingredient": "Celery",
//             "Note": "Sliced"},
//             {
//             "QTY": "1",
//             "Measure": "cup",
//             "Ingredient": "Mushrooms",
//             "Note": "Sliced"},
//             {
//             "QTY": "1",
//             "Measure": "cup",
//             "Ingredient": "Zucchini",
//             "Note": "Sliced"}
// 		],
// 		Directions: [
// 			{
//       		"Direction": "Add 2 TBSP Sesame Oil to Wok on Low-Medium heat"},
//       	]
//   	});

// newRecipe.save(function(err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Recipe Added!')
//     }
//  })
  