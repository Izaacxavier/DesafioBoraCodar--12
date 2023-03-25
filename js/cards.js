const cards = document.querySelectorAll('.card')
const dropzone = document.querySelectorAll('.dropzone')
const boards = document.querySelectorAll('.board')


cards.forEach( card =>{
    card.addEventListener("dragstart", function(){
        // console.log("Card is drag")
        dropzone.forEach( dropzone => {
            dropzone.classList.add("dragenter")
        })
        this.classList.add("is_drag")
    })
    card.addEventListener("dragover", function(){
        // console.log("Card is dragover ")
       
    })
    card.addEventListener("dragend", function(){
        // console.log("card is drop")
        dropzone.forEach( dropzone => {
            dropzone.classList.remove("dragenter")
            
        })
    })
})
dropzone.forEach(dropzone =>{
    dropzone.addEventListener('dragenter', function(){
        console.log("entrou zona")
        

    })
    dropzone.addEventListener('dragover', function(){
        console.log("esta na zona")
        this.classList.add("is_over")
        
        const cardDrag = document.querySelector(".is_drag")
        this.appendChild(cardDrag)
    })
    dropzone.addEventListener('dragleave', function(){
        console.log("saiu da zona")
        this.classList.remove("is_over")
    })
    dropzone.addEventListener('drop', function(){
        console.log("soltou zona")
        this.classList.remove("is_over")
    })
})

