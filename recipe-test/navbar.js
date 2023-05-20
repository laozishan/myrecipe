var searchInput = document.getElementById("search-input");
var enterButton = document.getElementById("enter-button");

searchInput.addEventListener("input", function () {
  if (searchInput.value.trim() !== "") {
    enterButton.style.display = "block";
  } else {
    enterButton.style.display = "none";
  }
});

enterButton.addEventListener("click", function () {
  const keyword = searchInput.value;
  const url = `searchresult.html?keyword=${encodeURIComponent(keyword)}`;
  window.location.href = url;
});
