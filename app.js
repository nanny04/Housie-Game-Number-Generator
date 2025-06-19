let numbers = [];
for (let i = 1; i <= 90; i++) {
  numbers.push(i);
}
let history = [];

let Generate = document.querySelector(".generate");
let text = document.querySelector(".text");

Generate.addEventListener("click", function generate() {
  if (numbers.length === 0) {
    text.innerText = "Game Over!!";
    text.style.fontSize = '2rem'
    // alert('Game Over!!, start new game by reloading or click on restart button')
  } else {
    let length = numbers.length;
    let random = Math.floor(Math.random() * length);
    let printNo = numbers[random];
    text.innerText = printNo;
    history.push(printNo);
    numbers.splice(random, 1);
    let no = document.querySelector(".no" + printNo);
    no.style.backgroundColor = "#2B3467";
  }
  hisDiv.classList.remove("visible");
});
document.addEventListener('keydown', (e) => {
    if(e.code === 'Space'){
        e.preventDefault()
        Generate.click()
    }
})



let undo = document.querySelector(".undo");
undo.addEventListener("click", () => {
  if (history.length === 0) {
    text.innerText = " ";
  } else {
    let pop = history.pop();
    numbers.push(pop);
    if (history.length > 0) {
      text.innerText = history[history.length - 1];
    } else {
      text.innerText = " ";
    }
    document.querySelector(".no" + pop).style.backgroundColor = "#6A7EFC";
  }
});
document.addEventListener('keydown', (e) => {
    if(e.code === 'Backspace'){
        e.preventDefault()
        undo.click()
    }
})




let his = document.querySelector(".history");
let hisDiv = document.querySelector(".his");
let hisContent = document.querySelector(".content");

his.addEventListener("click", () => {
  hisDiv.classList.add("visible");
  hisContent.innerHTML = history.join("- ");

  let closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    hisDiv.classList.remove("visible");
  });
});



let restart = document.querySelector('.reset')
restart.addEventListener('click', () => {
    location.reload()
})