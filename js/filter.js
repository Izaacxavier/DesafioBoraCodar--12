const inputCheck = document.querySelectorAll(".checkbox");
const toDo = document.querySelector("#to_do_board");
const inProgress = document.querySelector("#in_progress_board");
const done = document.querySelector("#done_board");
const filterBtn = document.querySelector(".filter_btn");
const btnOpened = document.querySelector(".btn_opened");
const body = document.querySelector("body");
const navbar = document.querySelectorAll(".navbar li")

console.log(inputCheck);

filterBtn.addEventListener("click", function () {
  btnOpened.classList.toggle("visible");
});
body.addEventListener("click", function (e) {
  if (!filterBtn.contains(e.target)) {
    btnOpened.classList.remove("visible");
  }
});

inputCheck.forEach((input) => {
  input.addEventListener("click", function (e) {
    console.log(e.target.id);

    if (e.target.id == "todo") {
      inProgress.classList.toggle("invisible");
      done.classList.toggle("invisible");
    }
    if (e.target.id == "inProgress") {
      toDo.classList.toggle("invisible");
      done.classList.toggle("invisible");
    }
    if (e.target.id == "done") {
      toDo.classList.toggle("invisible");
      inProgress.classList.toggle("invisible");
    }
    if (e.target.id == "todos") {
      toDo.classList.remove("invisible");
      inProgress.classList.remove("invisible");
      done.classList.remove("invisible");
    }
  });
});


// nav_bar 
navbar.forEach( el => {
    el.addEventListener('click', function(){

        navbar.forEach(el => {
            el.classList.remove('click');
          });

       this.classList.add("click")
    })
})

// LocalStorage
const inputTitle = document.querySelector(".input_title")

inputTitle.value = localStorage.title

function saveTitle(){
    const titleValue = inputTitle.value
    console.log(titleValue)
    //set storage
    localStorage.setItem('title', titleValue)
}
document.onchange = saveTitle;


