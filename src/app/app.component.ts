import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';
  selectedHeaderItem = 'recipes';
  @Output() recipeSelected2 = new EventEmitter<Recipe>();

  onHeaderItemSelection(item: string) {
    this.selectedHeaderItem = item;
  }

  selectedRecipe(recipe: Recipe) {
    this.recipeSelected2.emit(recipe);
  }
}
