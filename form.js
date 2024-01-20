console.clear();

const cardsContainer = document.querySelector(".login")
const cardsContainerInner = 
cardsContainer.querySelector(".login");
const cards = 
Array.from(document.querySelectorAll(".card"));
const overlay = document.querySelector(".overlay");
const applyOverlayMask = (e) =>{
    const overlayEl = e.currentTarget;
    const x = e.pageX - cardsContainer.offsetleft;
    const y = e.pageY - cardsContainer.offsetTop;
}
