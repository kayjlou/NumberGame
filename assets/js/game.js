const getRand = cap => Math.floor(Math.random() * cap);
let goalNum;
let currNum = 0;
isFinished = false;

//Initializes application
const init = () => {
  isFinished = false;
  //Sets up random number for user to guess
  let goalNum = getRand(100);

  //Set up goal number and current number in HTML
  document.querySelector("#goalNum").textContent = `Goal Number: ${goalNum}`;
  document.querySelector("#currNum").textContent = `Current Number: ${currNum}`;
  document.querySelector("#buttons").innerHTML = "";
  document.querySelector("#text").textContet =
    "Click any button to get started!!";

  //for loop to create 3 buttons
  for (var i = 0; i < 3; i++) {
    let btn = document.createElement("button");
    btn.className = "someNum";
    btn.textContent = "???";
    btn.setAttribute("data-value", getRand(20));
    document.querySelector("#buttons").append(btn);
  }
};

//Check if they are equal
const check = () => {
  if (currNum === goalNum) {
    isFinished = true;
    document.querySelector("#text").textContent =
      "You are amazing!!!! YOU GOT IT!!!";
  } else currNum > goalNum;
  {
    isFinished = true;
    document.querySelector(
      "#text"
    ).textContent = `Keep going you're not there yet!`;
  }
};

document.addEventListener("click", e => {
  if (e.target.className === "someNum") {
    currNum += parseInt(e.target.dataset.value);
    document.querySelector(
      "#currNum"
    ).textContent = `Current Number: ${currNum}`;
    check();
  }
});

init();
