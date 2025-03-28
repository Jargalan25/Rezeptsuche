import Search from "./model/search";
import { elements } from "./view/base";
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
    // 4. Do search
    await state.search.doSearch();
    // 5. Show the result on screen
    if (state.search.result != undefined) alert("Such echtes Essen");
    else searchView.renderRecipes(state.search.recipes);
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchController();
});
