import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti with ketchup',
      'Yummy Spaghetti',
      'https://previews.123rf.com/images/olegganko/olegganko1212/olegganko121200133/16984983-spaghetti-with-ketchup-in-a-bowl-with-a-fork.jpg'
    ),
    new Recipe(
      'Spaghetti with ketchup 2',
      'Yummy Spaghetti',
      'https://previews.123rf.com/images/olegganko/olegganko1212/olegganko121200133/16984983-spaghetti-with-ketchup-in-a-bowl-with-a-fork.jpg'
    ),
  ];

  getRecipes() {
    return [...this.recipes];
  }
}