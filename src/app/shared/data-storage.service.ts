import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

import { AuthService } from '../auth/auth.service';

import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const token = this.authService.getToken();
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://udemy-ng-recipe-book-2d0cc.firebaseio.com/recipes.json?auth=' + token, recipes);
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get('https://udemy-ng-recipe-book-2d0cc.firebaseio.com/recipes.json?auth=' + token)
      .map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
