(function(){
	angular
		.module('RecipeApp')
		.controller('blankRecipecardCtrl', blankRecipecardCtrl);

		function blankRecipecardCtrl($scope) {

			var blankcardVm = this;

			blankcardVm.addIngredient=addIngredient;
			blankcardVm.removeIngredient=removeIngredient;
			blankcardVm.Ingredients=[{Qty:'' ,Measure: '', Ingredient: '', Note:''}];
			
			blankcardVm.addDirection=addDirection;
			blankcardVm.removeDirection=removeDirection;
			blankcardVm.Directions=[{Direction: ''}];

				var Recipes = []
				var Ingredients = []
				var Directions = []

			function addIngredient() {
				blankcardVm.Ingredients.push({Qty:'' , Measure: '', Ingredient: '', Note:''})
			};

			function addDirection() {
				blankcardVm.Directions.push({Direction:''})
			};

			function removeIngredient() {
				blankcardVm.Ingredients.splice({Qty:'' , Measure: '', Ingredient: '', Note:''})
			};

			function removeDirection() {
				blankcardVm.Directions.splice({Direction:''})
			};
		};
})()

