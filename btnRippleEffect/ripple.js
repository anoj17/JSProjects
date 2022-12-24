const btnRipple = document.querySelector(".btn")

btnRipple.addEventListener("mouseover",(e) => {
    const x = (e.pageX - btnRipple.offsetLeft);
    const y = (e.pageY - btnRipple.offsetTop);

    btnRipple.style.setProperty("--xPos", x + "px")
    btnRipple.style.setProperty("--yPos", y + "px")
});