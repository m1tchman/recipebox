(function(){
	angular
		.module('RecipeApp', ['ngRoute', 'toastr']);

	angular
		.module('RecipeApp')
		.config(function($routeProvider) {
			$routeProvider
				.when('/home',{
					templateUrl:'partials/home.html',
					controller: 'HomeCtrl as ctrl'
  				})
  				.when('/RecipeList',{
  					templateUrl:'partials/RecipeList.html',
  					controller:'RecipeListCtrl as ctrl',
  					resolve:{
						recipe:function(recipeSrv){
							return recipeSrv.getRecipes();
						}
					}
				})
				.when('/recipes/:recipeid',{
					templateUrl:'partials/RecipeCard.html',
					controller:'RecipeCtrl as ctrl',
					resolve: {
						oneRecipe:function(recipeSrv, $route){
							return recipeSrv.getRecipe($route.current.params.recipeid)
						}
					}
				})
				.when('/addNew',{
					templateUrl:'partials/blankRecipecard.html',
					controller:'blankRecipecardCtrl as ctrl'
				})

				.when('/recipes/edit/:recipeid',{
					templateUrl:'partials/EditRecipe.html',
					controller: 'EditRecipeCtrl as ctrl',
					resolve: {
						oneRecipe:function(recipeSrv, $route){
							return recipeSrv.getRecipe($route.current.params.recipeid)
						}
					}
				})

				.otherwise({
					redirectTo:'/home'
				})
		})
})();

