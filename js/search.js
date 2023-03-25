const filterElement = document.querySelector(".search_input input ");

filterElement.addEventListener("input", filterCards);

function filterCards() {
  const value = filterElement.value.toLowerCase();

  if (value != " ") {
    for (let card of cards) {
      let title = card.querySelector("h2");
      let text = card.querySelector("p");

      // convert to lowercase
      title = title.textContent.toLowerCase();
      text = text.textContent.toLowerCase();

      if (!title.includes(value) && !text.includes(value)) {
        card.style.display = "none";
      } else {
        card.style.display = "flex";
      }
    }
  }
}
