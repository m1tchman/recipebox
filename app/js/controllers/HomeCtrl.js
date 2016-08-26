(function(){
	angular
		.module('RecipeApp')
		.controller('HomeCtrl', HomeCtrl)

	function HomeCtrl($location) {
		var HomeVm = this;

		HomeVm.StartEntry=StartEntry;
		HomeVm.BrowseList=BrowseList;

		function StartEntry(){
			$location.path('/addNew');

		}
		function BrowseList(){
			$location.path('/RecipeList');
		}
	}

})();

