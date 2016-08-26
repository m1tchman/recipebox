var express = require('express');
var router = express.Router();
var Recipes = require('./../models/Recipe');

router.get('/',function(req,res){
	models.Recipes.findAll()
	.then(function(recipes){
		if(recipes.length == 0){
			//no recipes exist, therefore
			for(var i = 0;i<RECIPE_DATA.length;i++){
				models.Recipes.create(RECIPE_DATA[i])
				.then(function(recipe){
					//check if this was the last recipe loaded
					if(i== RECIPE_DATA.length){
						res.send('All Recipe data has been loaded');
					}
				})
			}	
		}
		else{
			res.send('Recipe Data already loaded');
		}
	})
});

var RECIPE_DATA = [{
      "Name": "Chicken Cacciatore",
      "User": "Mitchman",
      "FoodCat": "Dinner",
      "Ingredients": [{
            "QTY": "1",
            "Measure": "cup",
            "Ingredient": "Green Pepper",
            "Note": "Diced"},
            {
            "QTY": "28",
            "Measure": "fl. oz",
            "Ingredient": "Roma Tomatoes",
            "Note": "Diced"}
      ],
      "Directions": [
      		{"Direction": "Add 1 TBSP Olive Oil to frypan"},
                  {"Direction": "Add Diced Onions & Green Pepper"}
      ]
}]
module.exports = router;