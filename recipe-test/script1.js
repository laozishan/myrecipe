const card4 = document.querySelectorAll(".card4");
const thatis = document.getElementById("thatis");
let ingredients;

card4.forEach((card) => {
  card.addEventListener("click", () => {
    console.log("clicked");
    if (!thatis.classList.contains("fade-in")) {
      thatis.classList.add("fade-in");
      thatis.style.display = "flex";
      thatis.scrollIntoView({ behavior: "smooth" });
    }
    let selectedIngredients;
    if (card.classList.contains("selected")) {
      card.classList.remove("selected");
      card.querySelector('input[type="checkbox"]').checked = false;
    } else {
      card.classList.add("selected");
      card.querySelector('input[type="checkbox"]').checked = true;
    }

    selectedIngredients = document.querySelectorAll(
      'input[name="food"]:checked'
    );
    ingredients = Array.from(selectedIngredients).map(
      (ingredient) => ingredient.value
    );
    console.log(ingredients);
  });
});
