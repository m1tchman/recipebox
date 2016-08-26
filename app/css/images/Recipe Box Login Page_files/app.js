(function(){
	angular
		.module('RecipeApp', ['ngRoute']);

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
  					controller:'RecipeListCtrl as ctrl'
				})
				.when('/recipe/:recipeid',{
					templateUrl:'partials/RecipeCard.html',
					controller:'RecipeCardCtrl as ctrl'
				})
				.when('/addNew',{
					templateUrl:'partials/blankRecipecard.html',
					controller:'blankRecipecardCtrl as ctrl'
				})
				.otherwise({
					redirectTo:'/home'
				})
		})


// 	var Name  = frm.find('input[name="Recipe"]').val();
// 	var user  = frm.find('input[name="Chef"]').val();
// 	var FoodCat = frm.find('input[name="author"]').val();
// 	var Ingredients = frm.find('input[{ingredients}]').val();
// 	var Directions = frm.find('input[{directions]}').val();


})();

