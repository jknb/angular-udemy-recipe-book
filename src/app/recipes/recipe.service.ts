import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti with ketchup',
      'Yummy Spaghetti',
      'https://previews.123rf.com/images/olegganko/olegganko1212/olegganko121200133/16984983-spaghetti-with-ketchup-in-a-bowl-with-a-fork.jpg',
      [
        new Ingredient('Spaghetti', 1),
        new Ingredient('Ketchup', 1)
      ]
      ),
    new Recipe(
      'Pizza',
      'Italian Pizza mamma mia!',
      'https://cdn.popmenu.com/image/upload/c_limit,f_auto,h_1440,q_auto,w_1440/twave3pm189b1ezmkrkq.jpg',
      [
        new Ingredient('Cheese', 2),
        new Ingredient('Ham', 2),
        new Ingredient('Tomato', 1),
        new Ingredient('Wheat', 1)
      ]
      ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
  }
}