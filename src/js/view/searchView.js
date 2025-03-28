import { elements } from "./base";

const renderRecipe = (recipe) => {
  const markup = `
                <li>
                    <a class="results__link" href="#${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${recipe.title}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>`;
  // Zu ul hinzufügen
  elements.searchResultList.insertAdjacentHTML("beforeend", markup);
};
export const clearSearchQuery = () => {
  elements.searchInput.value = "";
};
export const clearSearchResult = () => {
  elements.searchResultList.innerHTML = "";
  elements.pageButtons.innerHTML = "";
};
export const getInput = () => elements.searchInput.value;
export const renderRecipes = (recipes, currentPage = 1, resultPerPage = 10) => {
  // Alle rezepten per 10 zerlegen und render
  const start = (currentPage - 1) * resultPerPage;
  const end = currentPage * resultPerPage;
  recipes.slice(start, end).forEach(renderRecipe);
  // render die Buttons von Seiten
  const totalPages = Math.ceil(recipes.length / resultPerPage);
  renderButtons(currentPage, totalPages);
};

// type ===> prev, next
const createButton = (
  page,
  type,
  direction
) => `<button class="btn-inline results__btn--${type}" data-goto=${page}>
  <svg class="search__icon">
      <use href="img/icons.svg#icon-triangle-${direction}"></use>
  </svg>
  <span>Seite ${page}</span>
  </button>`;

const renderButtons = (currentPage, totalPages) => {
  let buttons;
  if (currentPage === 1 && totalPages > 1) {
    // Erste Seite. Nur Button von 2. Seite freigeschaltet werden sollte
    buttons = createButton(2, "next", "right");
  } else if (currentPage < totalPages) {
    // vorherige und nächste Seite zeigen
    buttons = createButton(currentPage - 1, "prev", "left");
    buttons += createButton(currentPage + 1, "next", "right");
  } else if (currentPage === totalPages) {
    // Letzte Seite. Nur vorherige Seite wird gezeigt
    buttons = createButton(currentPage - 1, "prev", "left");
  }

  elements.pageButtons.insertAdjacentHTML("afterbegin", buttons);
};
