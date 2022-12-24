const x = Math.ceil (Math.random() * 10)
const y = Math.ceil (Math.random() * 10)

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

const headQn = document.getElementById("head")
headQn.innerHTML = `What is ${x} multiply by ${y}`

const submitBtn = document.querySelector("#submit")

const totalScore = document.getElementById("score")

totalScore.innerHTML = `score :${score}`

const multiple = x * y

const formAnswer = document.getElementById("form")
const inputAns = document.getElementById("answer")

formAnswer.addEventListener('submit', () => {
    const answer = +inputAns.value

    if(answer==multiple){
        score++;
        updateFunction()
    }
    else{
        score--;
        updateFunction()
    }

    function updateFunction() {
        localStorage.setItem('score', JSON.stringify(score))
    }
});

