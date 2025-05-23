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
 * - Search query, Result
 * - Recipy
 * - Liked recipes
 * - Recipe ingredients
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

/**
 * Recipe Controller
 */
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
    renderRecipe(state.recipe, state.likes.isLiked(id));
  }
};

["hashchange", "load"].forEach((e) =>
  window.addEventListener(e, controlRecipe)
);

window.addEventListener("load", (e) => {
  // Create Like model when site first runs
  if (!state.likes) state.likes = new Likes();
  // Checks whether liked list is empty or not
  likesView.toggleLikeMenu(state.likes.getNumberOfLikes());
  // If theres liked recipes, adding them to local storage
  state.likes.likes.forEach((like) => likesView.renderLike(like));
});

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

    // 4. Stopping liked state
    likesView.toggleLikeButton(false);

    // 5. Delete item from liked list
    likesView.deleteLikes(currentRecipeId);
  } else {
    // 6. If its not, make it liked
    const newLike = state.likes.addLike(
      currentRecipeId,
      state.recipe.title,
      state.recipe.publisher,
      state.recipe.image_url
    );

    // 7. Add recipe to list of likes
    likesView.renderLike(newLike);

    // 8. Make a state liked
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
