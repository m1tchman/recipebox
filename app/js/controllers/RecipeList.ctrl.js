(function(){
	angular
		.module('RecipeApp')
		.controller('RecipeListCtrl', RecipeListCtrl)

function RecipeListCtrl($location,recipeSrv,recipe) {


		var recipelVm = this;
	  /*Load all of the Recipes from the RecipeService*/
	  	recipelVm.recipe = recipe //recipeSrv.getRecipes();
	  	console.log(recipelVm.recipe);
	  	recipelVm.sortOptions = [
		    {label: 'Name', sortField: 'Name', reverse: false},
		    {label: 'FoodCat', sortField: "Food Category", reverse: true}
		]
	  
	  	recipelVm.curPage = 0;
	  	recipelVm.recipePerPage = 8;
	  	recipelVm.numPages = Math.ceil(recipelVm.recipe.length / recipelVm.recipePerPage);

	  	//function binding
	  	recipelVm.goToRecipe = goToRecipe;
	  	recipelVm.StartEntry = StartEntry;

	  	function goToRecipe(recipe){
	  		$location.path('/recipes/'+recipe._id);
	  	};

	  	function StartEntry(){
			$location.path('/addNew');
		}
	}
})();


