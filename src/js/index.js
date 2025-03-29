import Search from "./model/search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";
import Recipe from "./model/Recipe";
import { renderRecipe, clearRecipe } from "./view/recipeView";
import { highlightSelectedRecipe } from "./view/recipeView";
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
};
window.addEventListener("hashchange", controlRecipe);
window.addEventListener("load", controlRecipe);
