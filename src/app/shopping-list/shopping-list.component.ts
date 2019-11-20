import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  selectedIngredientIndex: number;
  
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    
    this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => this.ingredients = ingredients
      )

    this.shoppingListService.ingredientSelected
      .subscribe(
        (index: number) => this.selectedIngredientIndex = index
      )
  }

  onIngredientSelected(index: number) {
    this.shoppingListService.setSelectedIngredient(index);
  }
}