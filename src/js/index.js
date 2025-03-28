import Search from "./model/search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";
/**
 * Web application state
 * - Suchquery, Ergebnis
 * - Rezept
 * - Gefällter Rezept
 * - Rezeptzutaten
 */

const state = {};

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
