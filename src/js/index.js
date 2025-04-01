import Search from "./model/search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";
import Recipe from "./model/Recipe";
import { renderRecipe, clearRecipe } from "./view/recipeView";
import { highlightSelectedRecipe } from "./view/recipeView";
import List from "./model/list";
import * as listView from "./view/listView";
import Likes from "./model/Like";
import * as likesView from "./view/likesView";
/**
 * Web application state
 * - Suchquery, Ergebnis
 * - Rezept
 * - Gefällter Rezept
 * - Rezeptzutaten
 */

const state = {};
likesView.toggleLikeMenu(0);

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
  // 2. Create Like model
  if (!state.likes) state.likes = new Likes();
  if (id) {
    // 3. Create Recipe Model
    state.recipe = new Recipe(id);
    // 4. Prepare UI window
    clearRecipe();
    renderLoader(elements.recipeDiv);
    highlightSelectedRecipe(id);

    // 5. Get the Recipe
    await state.recipe.getRecipe();
    // 6. Calculate the time and amount of ingredients of recipe
    clearLoader();
    state.recipe.calcTime();
    state.recipe.calcPortion();
    // 7. Show the recipe in window
    renderRecipe(state.recipe, state.likes.isLiked(id));
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
  // 1. Get the id of the showing recipe
  const currentRecipeId = state.recipe.id;
  // 2. Check if the recipe liked
  if (state.likes.isLiked(currentRecipeId)) {
    // 3. If its liked, make it unlike
    state.likes.deleteLike(currentRecipeId);
    // Stopping liked state
    likesView.toggleLikeButton(false);
    // Delete item from liked list
    likesView.deleteLikes(currentRecipeId);
  } else {
    // 4. If its not, make it liked
    const newLike = state.likes.addLike(
      currentRecipeId,
      state.recipe.title,
      state.recipe.publisher,
      state.recipe.image_url
    );
    // Add recipe to list of likes
    likesView.renderLike(newLike);
    // Make a state liked
    likesView.toggleLikeButton(true);
  }
  likesView.toggleLikeMenu(state.likes.getNumberOfLikes());
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
