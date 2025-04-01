import { elements } from "./base";
const renderSpices = (spices) => `
<li class="recipe__item">
    <svg class="recipe__icon">
        <use href="img/icons.svg#icon-check"></use>
    </svg>
    <div class="recipe__ingredient">
        ${spices}
    </div>
</li>`;

export const highlightSelectedRecipe = (id) => {
  const arr = Array.from(document.querySelectorAll(".results__link"));
  arr.forEach((el) => el.classList.remove("results__link--active"));
  const domObj = document.querySelector(`a[href*="${id}"]`);
  if (domObj) domObj.classList.add("results__link--active");
};

export const renderRecipe = (recipe, isLiked) => {
  // Show recipe on window
  const html = `<figure class="recipe__fig">
  <img src="${recipe.image_url}" alt="${recipe.title}" class="recipe__img">
  <h1 class="recipe__title">
      <span>${recipe.title}</span>
  </h1>
</figure>
<div class="recipe__details">
  <div class="recipe__info">
      <svg class="recipe__info-icon">
          <use href="img/icons.svg#icon-stopwatch"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${
        recipe.time
      }</span>
      <span class="recipe__info-text"> Minuten </span>
  </div>
  <div class="recipe__info">
      <svg class="recipe__info-icon">
          <use href="img/icons.svg#icon-man"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${
        recipe.portion
      }</span>
      <span class="recipe__info-text"> Portionen</span>

      <div class="recipe__info-buttons">
          <button class="btn-tiny">
              <svg>
                  <use href="img/icons.svg#icon-circle-with-minus"></use>
              </svg>
          </button>
          <button class="btn-tiny">
              <svg>
                  <use href="img/icons.svg#icon-circle-with-plus"></use>
              </svg>
          </button>
      </div>

  </div>
  <button class="recipe__love">
      <svg class="header__likes">
          <use href="img/icons.svg#icon-heart${
            isLiked ? "" : "-outlined"
          }"></use>
      </svg>
  </button>
</div>



<div class="recipe__ingredients">
  <ul class="recipe__ingredient-list">
        ${recipe.ingredients.map((el) => renderSpices(el)).join(" ")}
      <li class="recipe__item">
          <svg class="recipe__icon">
              <use href="img/icons.svg#icon-check"></use>
          </svg>
          <div class="recipe__count">1000</div>
          <div class="recipe__ingredient">
              <span class="recipe__unit">g</span>
              pasta
          </div>
      </li>

      

      <li class="recipe__item">
          <svg class="recipe__icon">
              <use href="img/icons.svg#icon-check"></use>
          </svg>
          <div class="recipe__count">1</div>
          <div class="recipe__ingredient">
              <span class="recipe__unit"></span>
              can of tomatoes, whole or crushed
          </div>
      </li>

  </ul>

  <button class="btn-small recipe__btn">
      <svg class="search__icon">
          <use href="img/icons.svg#icon-shopping-cart"></use>
      </svg>
      <span>Warenkorb Hinzufügen</span>
  </button>
</div>

<div class="recipe__directions">
  <h2 class="heading-2">Wie kann man vorbereiten</h2>
  <p class="recipe__directions-text">
      Rezept zubereitet und eingereicht von
      <span class="recipe__by">${
        recipe.publisher
      }</span>. Die Rezeptanleitung finden Sie auf unserer Website.
  </p>
  <a class="btn-small recipe__btn" href="${recipe.source_url}" target="_blank">
      <span>SIEHE ANLEITUNG</span>
      <svg class="search__icon">
          <use href="img/icons.svg#icon-triangle-right"></use>
      </svg>

  </a>
</div>`;
  elements.recipeDiv.insertAdjacentHTML("afterbegin", html);
};
export const clearRecipe = () => {
  // Clear the showing recipe
  elements.recipeDiv.innerHTML = "";
};
