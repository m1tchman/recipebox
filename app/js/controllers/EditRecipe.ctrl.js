'use strict';
(function(){
	angular
		.module('RecipeApp')
		.controller('EditRecipeCtrl', EditRecipeCtrl);

	function EditRecipeCtrl(recipeSrv, $routeParams, oneRecipe, $http, toastr, $location) {

			var EditRecipeVm = this;

			EditRecipeVm.recipe = oneRecipe;

			EditRecipeVm.resaveRecipe = resaveRecipe;

			EditRecipeVm.addIngredient=addIngredient;
			EditRecipeVm.removeIngredient=removeIngredient;
			EditRecipeVm.Ingredients=[{Qty:'', Measure: '', Ingredient: '', Note:''}];
			
			EditRecipeVm.addDirection=addDirection;
			EditRecipeVm.removeDirection=removeDirection;
			EditRecipeVm.Directions=[{Direction: ''}];

			EditRecipeVm.BrowseList = BrowseList;


			function addIngredient() {
				EditRecipeVm.recipe.Ingredients.push({Qty:'' , Measure: '', Ingredient: '', Note:''})
			};

			function addDirection() {
				EditRecipeVm.recipe.Directions.push({Direction:''})
			};

			function removeIngredient(index) {
				EditRecipeVm.recipe.Ingredients.splice(index, 1)
			};

			function removeDirection(index) {
    			EditRecipeVm.recipe.Directions.splice(index, 1)
			};

			function resaveRecipe() {//this is binding the input fields from the html page to this controller page (using ctrl. in the html page and blankcardVm on this ctrl page)
						if (EditRecipeVm.recipe.Name == undefined) {
							console.log(EditRecipeVm.recipe.Name)
							toastr.success("Please enter a Recipe Name");
						}
			
						else if (EditRecipeVm.recipe.User == undefined || EditRecipeVm.User == "") {
							toastr.success("Please enter a Chef's Name");
						}

						else if (EditRecipeVm.recipe.FoodCat == undefined) {
							toastr.success("Please assign a Category");
						}

						else if (EditRecipeVm.recipe.Ingredients[0].Qty == "" || EditRecipeVm.recipe.Ingredients[0].Ingredient == "") {
							toastr.success("Please include at least one Ingredient");
						}

						else if (EditRecipeVm.recipe.Directions[0].Direction == "") {
							toastr.success("Please include at least one Direction");
						}

						else {

							}

							$http.put('/routes/recipes/'+EditRecipeVm.recipe._id, EditRecipeVm.recipe)//this is not actually posting to the server
								.success(function(data, status, headers) {
								window.location.href="#/RecipeList";
					
							})
			}

			function BrowseList(){
			$location.path('/RecipeList');
			
			}
		}
})();

