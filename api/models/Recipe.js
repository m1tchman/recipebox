var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema.
var RecipeSchema = new Schema({
  Name: {
    type: String,
    required: true,
    unique: true
  },
  User: {
    type: String,
    required: true
  },
    FoodCat: { 
    type: String, 
    required: false
  },
  Image: {
    type: String,
    required: false
  },
  Ingredients: {
    type: Array,
    required: true
  },
  Directions: {
    type: Array,
    required: true
  },
  created_at: Date,
  updated_at: Date
});
// Create a model using schema.
var Recipe = mongoose.model('Recipe', RecipeSchema);

// Make this available to our Node applications.
module.exports = Recipe;