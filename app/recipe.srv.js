(function(){
    
    angular
        .module('RecipeApp')
        .service('recipeSrv', RecipeService);

    function RecipeService($http) {
        var self = this;
          self.recipe;

        //bind the functions to Service
        self.getRecipes = getRecipes;
        self.getRecipe = getRecipe;

        function getRecipes(){
          if(!self.recipes){
            //if we don't have any Recipes
            return $http.get('/routes/recipes')
                    .then(function(res){
                        console.log(res);
                        self.recipes = res.data;
                        return res.data;
                    });
          }
          return self.recipes;
        };

        function getRecipe(id){
          return $http.get('/routes/recipes/'+id)
                    .then(function(res){
                        console.log(res);
                        self.recipe = res.data[0];
                        return res.data[0];
                    });
        };
    }
})();
