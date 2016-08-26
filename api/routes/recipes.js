// define our Recipe routes
var router = require('express').Router();
var Recipe = require('./../models/Recipe');

 // /routes/recipes/
router.get('/',function(req,res){
	Recipe.find({}, function(err, Recipes) {
    if (err) {
        console.log(err);
    } else {
        //returns an array of objects
        res.send(Recipes)
    }
	})
});

router.get('/:recipeid',function(req,res){
	console.log(req.params);
	Recipe.find({"_id":req.params.recipeid}, function(err, Recipe) {
	    if (err) {
	        console.log(err);
	    } else {
	    	//returns the details of ONE recipe only by its ID above
	        res.send(Recipe);
	    }
	}
)});

router.post('/',function(req,res){ //this is actually saving to database.  this location here is just a server
	// add recipe (from req body) to database

	var newRecipe = Recipe(req.body);
		newRecipe.save(function(err, recipe){
			if(err){
				console.log(err);
				res.status(400)
				   .json({err:err})
			}
			else{
				res.json(recipe)
			}
		})
});

router.put('/:objectId',function(req,res){
	var __recipe = req.body;
	var update = {
			Name:__recipe.Name,
			Image:__recipe.Image,
			User:__recipe.User,
			FoodCat:__recipe.FoodCat,
			Ingredients:__recipe.Ingredients,
			Directions:__recipe.Directions,
		}

	var query = {"_id":req.params.objectId}
	Recipe.update(query,update,{},function(err,recipe){
		if(err){
			console.log(err);
			res.status(400)
			   .json({err:err})
		}
		else{
			res.json(recipe);
		}
	});
});

router.delete('/:objectId',function(req,res){
		Recipe.findOne({"_id":req.params.objectId},function(err,recipe){
			recipe.remove(function(err){
			if(err){
				console.log(err);
				res.status(400)
				   .json({err:err})
			}
			else{
				res.json({deleted:true})
			}
		})
	})
})

module.exports = router;