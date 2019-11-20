import { Ingredient } from '../shared/ingredient.module';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ 
  providedIn: 'root' 
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientSelected = new EventEmitter<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  private selectedIngredient: number;

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit([...this.ingredients]);
  }

  deleteIngredient() {
    if (this.selectedIngredient !== undefined) {
      this.ingredients.splice(this.selectedIngredient, 1);
      this.ingredientsChanged.emit([...this.ingredients]);
    } 
  }

  setSelectedIngredient(ingredientIndex: number) {
    this.selectedIngredient = ingredientIndex;
    this.ingredientSelected.emit(ingredientIndex);
  }
}