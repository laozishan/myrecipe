const cards = document.querySelectorAll(".card");
const nextBtn1 = document.getElementById("next-btn-1");
const step2 = document.getElementById("step-2");
const step3 = document.getElementById("step-3");
const step4 = document.getElementById("step-4");
const dietNo = document.getElementById("diet-no");
const dietYes = document.getElementById("diet-yes");
const step3option = document.getElementById("step3option");
const step4option = document.getElementById("step4option");
const intoleranceNo = document.getElementById("intolerance-no");
const intoleranceYes = document.getElementById("intolerance-yes");
const getRecipe = document.getElementById("get-recipe");
const toggleRandom = document.getElementById("toggle-random");
const card4 = document.querySelectorAll(".card4");
const thatis = document.getElementById("thatis");
const tailor = document.getElementById("tailor");

let card1;
let food;
let preference;
let intolerance;
let card2;
let ingredients;

// step 1 Choose food
cards.forEach((card) => {
  card.addEventListener("click", () => {
    console.log("clicked");
    const selectedCard = document.querySelector(".selected");
    if (selectedCard) {
      selectedCard.classList.remove("selected");
      selectedCard.querySelector('input[type="checkbox"]').checked = false;
    }
    card.classList.add("selected");
    card.querySelector('input[type="checkbox"]').checked = true;

    food = document.querySelector('input[name="food"]:checked').value;
    console.log(food);
    step2.classList.add("fade-in");
    step2.style.display = "block";
    step2.scrollIntoView({ behavior: "smooth" });
  });
});

card4.forEach((card) => {
  card.addEventListener("click", () => {
    console.log("clicked");
    let selectedIngredients;
    if (card.classList.contains("selected4")) {
      card.classList.remove("selected4");
      card.querySelector('input[type="checkbox"]').checked = false;
    } else {
      card.classList.add("selected4");
      card.querySelector('input[type="checkbox"]').checked = true;
    }

    selectedIngredients = document.querySelectorAll(
      'input[name="ingredient"]:checked'
    );
    ingredients = Array.from(selectedIngredients).map(
      (ingredient) => ingredient.value
    );
    console.log(ingredients);
  });
});

thatis.addEventListener("click", () => {
  thatis.classList.add("transformed");
  step3.classList.add("fade-in");
  step3.style.display = "block";
  step3.scrollIntoView({ behavior: "smooth" });
});

dietNo.addEventListener("click", () => {
  console.log("Diet no");
  dietYes.classList.add("rush-out");
  dietYes.style.pointerEvents = "none";

  dietNo.style.transform = "translateX(50%)";
  dietNo.classList.add("transformed");

  step4.classList.add("fade-in");
  step4.style.display = "block";
  step4.scrollIntoView({ behavior: "smooth" });
});

intoleranceNo.addEventListener("click", () => {
  console.log("intolerance no");
  intoleranceYes.classList.add("rush-out");
  intoleranceYes.style.pointerEvents = "none";

  intoleranceNo.style.transform = "translateX(50%)";
  intoleranceNo.classList.add("transformed");
});

let isContentAdded = false;
dietYes.addEventListener("click", () => {
  console.log("Diet yes");
  dietNo.classList.add("rush-out");
  dietNo.style.pointerEvents = "none";

  dietYes.style.transform = "translateX(-50%)";
  dietYes.classList.add("transformed");
  step3option.style.display = "flex";

  if (!isContentAdded) {
    step3option.innerHTML += `  <div class="card1">
              <p>Vegetarian</p>
              <input type="checkbox" name="preference" value="vegetarian" class="card-checkbox" />
            </div>
            <div class="card1">
              <p>Vegan</p>
              <input
                type="checkbox"
                name="preference"
                value="vegan"
                class="card-checkbox"
              />
            </div>

            <div class="card1">
              <p>Ovo vegetarian</p>
              <input
                type="checkbox"
                name="preference"
                value="ovo+vegetarian"
                class="card-checkbox"
              />
            </div>
      
            <div class="card1">
              <p>Lacto vegetarian</p>
              <input
                type="checkbox"
                name="preference"
                value="lacto+vegetarian"
                class="card-checkbox"
              />
            </div>

            <div class="card1">
              <p>Pescetarian</p>
              <input type="checkbox" name="preference" value="pescetarian" class="card-checkbox" />
            </div>
      
            <div class="card1">
              <p>Primal</p>
              <input
                type="checkbox"
                name="preference"
                value="primal"
                class="card-checkbox"
              />
            </div>`;
    isContentAdded = true;
  }

  card1 = document.querySelectorAll(".card1");
  console.log(card1);

  step3option.scrollIntoView({ behavior: "smooth" });
  card1.forEach((card) => {
    card.addEventListener("click", () => {
      console.log("clicked");
      const selectedCard = document.querySelector(".selected1");
      console.log(selectedCard);
      if (selectedCard) {
        selectedCard.classList.remove("selected1");
        selectedCard.querySelector('input[type="checkbox"]').checked = false;
      }
      card.classList.add("selected1");
      card.querySelector('input[type="checkbox"]').checked = true;

      preference = document.querySelector(
        'input[name="preference"]:checked'
      ).value;
      console.log(preference);
      step4.classList.add("fade-in");
      step4.style.display = "block";
      step4.scrollIntoView({ behavior: "smooth" });
    });
  });
});

let isContentAdded1 = false;
intoleranceYes.addEventListener("click", () => {
  console.log("intolerance yes");
  intoleranceNo.classList.add("rush-out");
  intoleranceNo.style.pointerEvents = "none";

  intoleranceYes.style.transform = "translateX(-50%)";
  intoleranceYes.classList.add("transformed");
  step4option.style.display = "flex";

  if (!isContentAdded1) {
    step4option.innerHTML += `            <div class="card2">
    <p style="font-size: 80px">🥛</p>

    <p>Dairy</p>

    <input
      type="checkbox"
      name="intolerance"
      value="dairy"
      class="card-checkbox"
    />

  </div>


  <div class="card2">
    <p style="font-size: 80px">🍳</p>

    <p>Egg</p>

    <input
      type="checkbox"
      name="intolerance"
      value="egg"
      class="card-checkbox"
    />

  </div>

  <div class="card2">
    <p style="font-size: 80px">🌾</p>

    <p>Gluten</p>

    <input
      type="checkbox"
      name="intolerance"
      value="gluten"
      class="card-checkbox"
    />

  </div>


  <div class="card2">
    <p style="font-size: 80px">🥜</p>

    <p>Peanut</p>

    <input
      type="checkbox"
      name="intolerance"
      value="peanut"
      class="card-checkbox"
    />

  </div>

  <div class="card2">
    <p style="font-size: 80px">🍤</p>

    <p>Seafood</p>

    <input
      type="checkbox"
      name="intolerance"
      value="seafood"
      class="card-checkbox"
    />

  </div>

  <div class="card2">
    <p style="font-size: 80px">🫘</p>

    <p>Soy</p>

    <input
      type="checkbox"
      name="intolerance"
      value="soy"
      class="card-checkbox"
    />

  </div>`;
    isContentAdded1 = true;
  }
  card2 = document.querySelectorAll(".card2");
  console.log(card2);

  step4option.scrollIntoView({ behavior: "smooth" });
  card2.forEach((card) => {
    let selectedIntolerances;
    card.addEventListener("click", () => {
      console.log("clicked");
      if (!getRecipe.classList.contains("fade-in")) {
        getRecipe.classList.add("fade-in");
        getRecipe.style.display = "flex";
        getRecipe.scrollIntoView({ behavior: "smooth" });
      }

      if (card.classList.contains("selected2")) {
        card.classList.remove("selected2");
        card.querySelector('input[type="checkbox"]').checked = false;
      } else {
        card.classList.add("selected2");
        card.querySelector('input[type="checkbox"]').checked = true;
      }

      selectedIntolerances = document.querySelectorAll(
        'input[name="intolerance"]:checked'
      );
      intolerance = Array.from(selectedIntolerances).map(
        (intolerance) => intolerance.value
      );
      console.log(intolerance);
    });
  });
});

async function displayRecipes() {
  let url =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=" +
    food;
  let intoleranceStr;
  let ingredienceStr;

  if (preference) {
    url += "&diet=" + preference;
  }

  if (intolerance) {
    intoleranceStr = intolerance.join(",");
    url += "&intolerances=" + intoleranceStr;
  }

  if (ingredients) {
    ingredienceStr = ingredients.join(",");
    url += "&includeIngredients=" + ingredienceStr;
  }

  url += "&number=30";
  console.log(url);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "41a6aa1a39msh53e22e2ef650df9p13cb59jsn62f9362161d5",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Failed to fetch recipes.");
    }

    const data = await response.json();
    const recipes = data.results;
    console.log(recipes);

    const recipeContainer = document.getElementById("recipe");

    // Clear previous results
    recipeContainer.innerHTML = "";

    recipes.forEach((recipe) => {
      const { title, image, id } = recipe;
      console.log(title, image, id);

      const card = document.createElement("div");
      card.classList.add("card3");

      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");

      const recipeImage = document.createElement("img");
      recipeImage.src = image;
      recipeImage.alt = title;
      recipeImage.style.maxWidth = "280px";
      recipeImage.style.maxHeight = "280px";
      imageContainer.appendChild(recipeImage);

      const recipeTitle = document.createElement("p");
      recipeTitle.textContent = title;

      const hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.value = id;

      const recipeLink = document.createElement("a");
      recipeLink.href = `detail.html?id=${id}`;
      recipeLink.target = "_blank";

      card.appendChild(imageContainer);
      card.appendChild(recipeTitle);
      card.appendChild(hiddenInput);
      card.appendChild(recipeLink);

      toggleRandom.style.display = "flex";
      tailor.style.display = "flex";

      recipeContainer.appendChild(card);
      tailor.scrollIntoView({ behavior: "smooth" });

      card.addEventListener("click", (event) => {
        event.preventDefault();
        window.open(`detail.html?id=${id}`, "_blank");
      });
    });
  } catch (error) {
    console.error(error);
  }
}

intoleranceNo.addEventListener("click", displayRecipes);
getRecipe.addEventListener("click", displayRecipes);
