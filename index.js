const btnEl = document.querySelector(".btn")

btnEl.addEventListener("mouseover", (event) =>{
const x =  console.log(event.pageY - btnEl.offsetLeft);
const y =  console.log(event.pageY - btnEl.offsetTop);

btnEl.computedStyleMap.setProperty("--xPos", x "px");
btnEl.computedStyleMap.setProperty("--yPos", y "px");


});