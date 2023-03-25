const btnCloseModal = document.querySelector(".btn_close_modal");
const modal = document.querySelector(".new_card_container");
const btnOpenModal = document.querySelector(".btn_add");

function closeModal() {
  modal.style.display = "none";
}
function openModal() {
  modal.style.display = "flex";
}
btnCloseModal.addEventListener("click", closeModal);
btnOpenModal.addEventListener("click", openModal);

// Create NewCard

const newTitle = document.querySelector("#title_new_card");
const description = document.querySelector("#description");
const category = document.querySelector("#category");
const btnAddNewCard = document.querySelector(".btn_add_card");
const dropZoneCard = document.querySelector(".dropzone");


function createNewCard() {
    let new_title = newTitle.value;
    const new_description = description.value;
    const new_category = category.value;
    // Criando uma nova div para o card
    const newcard = document.createElement("div");

    // Adiciona a classes card a div criada
    newcard.classList.add("card");
    // adicionando atributo 
    newcard.setAttribute("draggable", "true")
    // Adiciona o conteúdo aa div
    newcard.innerHTML = `
   <div class="card" draggable="true">
     <div class="card_content">
        <h2>${new_title}🧑‍💻</h2>
            <p>${new_description}</p>
            <div class="tags">
                <span>rocketseat</span>
                <span>${new_category}</span>
            </div>
        </div>
    </div>
   `;
    // adicionando o card na div
    dropZoneCard.appendChild(newcard);

    // limpando inputs
    document.querySelector("#title_new_card").value = "";
    document.querySelector("#description").value = "";
  }
  
  


btnAddNewCard.addEventListener("click", function () {
        createNewCard();
        closeModal();
});
