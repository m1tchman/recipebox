'use strict';
(function(){
	angular
		.module('RecipeApp')
		.controller('blankRecipecardCtrl', blankRecipecardCtrl);

		function blankRecipecardCtrl($http, toastr, $location) {
			
			var blankcardVm = this;

			blankcardVm.addIngredient=addIngredient;
			blankcardVm.removeIngredient=removeIngredient;
			blankcardVm.Ingredients=[{Qty:'', Measure: '', Ingredient: '', Note:''}];
			
			blankcardVm.addDirection=addDirection;
			blankcardVm.removeDirection=removeDirection;
			blankcardVm.Directions=[{Direction: ''}];

			blankcardVm.BrowseList=BrowseList;

			blankcardVm.Recipes=[]

			blankcardVm.SaveRecipe=SaveRecipe;

				var Ingredients = []
				var Directions = []
				var Recipes = []


			function addIngredient() {
				blankcardVm.Ingredients.push({Qty:'' , Measure: '', Ingredient: '', Note:''})
			};

			function addDirection() {
				blankcardVm.Directions.push({Direction:''})
			};

			function removeIngredient(index) {
					blankcardVm.Ingredients.splice(index, 1)
			};

			function removeDirection(index) {
    				blankcardVm.Directions.splice(index, 1)
			};

			function BrowseList(){
				$location.path('/RecipeList')
			};
			
			function SaveRecipe() {//this is binding the input fields from the html page to this controller page (using ctrl. in the html page and blankcardVm on this ctrl page)
					if (blankcardVm.Name == undefined) {
						toastr.success("Please enter a Recipe Name");
					}
		
					else if (blankcardVm.User == undefined || blankcardVm.User == "") {
						toastr.success("Please enter a Chef's Name");
					}

					else if (blankcardVm.FoodCat == undefined) {
						toastr.success("Please assign a Category");
					}

					else if (blankcardVm.Ingredients[0].Qty == "" || blankcardVm.Ingredients[0].Ingredient == "") {
						toastr.success("Please include at least one Ingredient");
					}

					else if (blankcardVm.Directions[0].Direction == "") {
						toastr.success("Please include at least one Direction");
					}

					else {

				var __Recipe = {//this is a temp object we are creating that can be used over and over when we save new recipes to the db
					Name:blankcardVm.Name,
					Image:blankcardVm.Image,
					User:blankcardVm.User,
					FoodCat:blankcardVm.FoodCat,
					Ingredients:blankcardVm.Ingredients,
					Directions:blankcardVm.Directions,
				}
						console.log(__Recipe)
						blankcardVm.Recipes.push(__Recipe)//This creates the entire Recipe object

						}

						$http.post('/routes/recipes', __Recipe)//this is not actually posting to the server
							.success(function(data, status, headers) {
							window.location.href="#/RecipeList";
				
				})
			}
	}
})();

