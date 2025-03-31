import Search from "./model/search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";
import Recipe from "./model/Recipe";
import { renderRecipe, clearRecipe } from "./view/recipeView";
import { highlightSelectedRecipe } from "./view/recipeView";
import List from "./model/list";
import * as listView from "./view/listView";
import Likes from "./model/Like";
/**
 * Web application state
 * - Suchquery, Ergebnis
 * - Rezept
 * - Gefällter Rezept
 * - Rezeptzutaten
 */

const state = {};

// Search Controller
const searchController = async () => {
  // 1. Get the keyword from search bar
  const query = searchView.getInput();
  if (query) {
    // 2. Create new searching object
    state.search = new Search(query);
    // 3. Prepare UI for searching
    searchView.clearSearchQuery();
    searchView.clearSearchResult();
    renderLoader(elements.searchResultDiv);
    // 4. Do search
    await state.search.doSearch();
    // 5. Show the result on screen
    clearLoader();
    if (state.search.result != undefined) alert("Such echtes Essen");
    else searchView.renderRecipes(state.search.recipes);
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchController();
});
elements.pageButtons.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goto = parseInt(btn.dataset.goto);
    searchView.clearSearchResult();
    searchView.renderRecipes(state.search.recipes, goto);
  }
});

// Recipe Controller
const controlRecipe = async () => {
  // 1. Get ID from URL
  const id = window.location.hash.replace("#", "");
  if (id) {
    // 2. Create Recipe Model
    state.recipe = new Recipe(id);
    // 3. Prepare UI window
    clearRecipe();
    renderLoader(elements.recipeDiv);
    highlightSelectedRecipe(id);

    // 4. Get the Recipe
    await state.recipe.getRecipe();
    // 5. Calculate the time and amount of ingredients of recipe
    clearLoader();
    state.recipe.calcTime();
    state.recipe.calcPortion();
    // 6. Show the recipe in window
    renderRecipe(state.recipe);
  }
};
["hashchange", "load"].forEach((e) =>
  window.addEventListener(e, controlRecipe)
);

/**
 * Ingredient Controller
 */
const controlList = () => {
  // 1. Create ingredients Model
  state.list = new List();
  // 2. Clear the already showing ingredients from screen
  listView.clearItems();
  state.recipe.ingredients.forEach((n) => {
    // 3. Add to the Model the ingredients
    const item = state.list.addItem(n);
    // 4. Render the ingredients
    listView.renderItem(item);
  });
};

/**
 * Like Controller
 */
const controlLike = () => {
  // 1. Create Like model
  if (!state.likes) state.likes = new Likes();
  // 2. Get the id of the showing recipe
  const currentRecipeId = state.recipe.id;
  // 3. Check if the recipe liked
  if (state.likes.isLiked(currentRecipeId)) {
    // 4. If its liked, make it unlike
    state.likes.deleteLike(currentRecipeId);
  } else {
    // 5. If its not, make it liked
    state.likes.addLike(
      currentRecipeId,
      state.recipe.title,
      state.recipe.publisher,
      state.recipe.image_url
    );
  }
};

elements.recipeDiv.addEventListener("click", (e) => {
  if (e.target.matches(".recipe__btn, .recipe__btn *")) {
    controlList();
  } else if (e.target.matches(".recipe__love, .recipe__love *")) {
    controlLike();
  }
});

elements.shoppingList.addEventListener("click", (e) => {
  // Get data-itemid from clicked li element
  const id = e.target.closest(".shopping__item").dataset.itemid;
  // Delete the ingredient with this id from model
  state.list.deleteItem(id);
  // Delete the ingredient with this id from window
  listView.deleteItem(id);
});
