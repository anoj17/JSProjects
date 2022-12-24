const button = document.querySelector(".btn")

const crosses = document.querySelector(".cross")

const bodies = document.querySelector(".container")

const pop = document.querySelector(".popup")

button.addEventListener("click",() =>{
    bodies.classList.add("action");
    pop.classList.remove('action');
})

crosses.addEventListener("click",()=>{
    bodies.classList.remove("action");
    pop.classList.add('action');
})