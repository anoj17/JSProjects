const allBody = document.querySelector("body")

allBody.addEventListener("mousemove",(e) => {
 
    const xpos = e.offsetX;
    const ypos = e.offsetY

    const spanChild = document.createElement("span")

    const size = Math.random()*100;

    spanChild.style.width = size + "px";
    spanChild.style.height = size + "px";

    allBody.appendChild(spanChild)

    spanChild.style.left = xpos + "px";
    spanChild.style.top = ypos + "px";

    setTimeout(()=>{
        spanChild.remove()
    },3000)
    
});