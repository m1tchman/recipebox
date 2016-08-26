'use strict';
(function(){
	angular
		.module('RecipeApp')
		.controller('RecipeCtrl', RecipeCtrl);

	function RecipeCtrl(recipeSrv, $routeParams, oneRecipe, $http, $location) {

			var RecipeVm = this;

			RecipeVm.recipe = oneRecipe;

			RecipeVm.RecipeDetails = RecipeDetails;

			RecipeVm.deleteRecipe = deleteRecipe;

			RecipeVm.BrowseList = BrowseList;

			RecipeVm.StartEntry = StartEntry;

			function RecipeDetails() {
				app.put('/:_id',function(req,res){
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
				})
			}

			function deleteRecipe() {
		        	  $http.delete('/routes/recipes/'+RecipeVm.recipe._id,RecipeVm.recipe),
							window.location.href="#/RecipeList";
			}

			function BrowseList(){
				$location.path('/RecipeList')
			};

			function StartEntry(){
				$location.path('/addNew');
			}
		}	
})();








