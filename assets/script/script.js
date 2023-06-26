const select = document.querySelectorAll(".cell");
const alert = document.querySelector(".alert");
const alerts = document.querySelector(".alerterror");
const attack = document.querySelector("#check");
attack.addEventListener("click", checkAttack);
let notSelected = 0;
let selectedCell = [];

function selectPosition() {
  let id = this.getAttribute("id");

  let selectedIndex = selectedCell.indexOf(id);

  if (selectedIndex >= 0) {
    this.style.border = "5px solid #cd5c5c";
    notSelected--;
    return;
  } else if (notSelected < 2) {
    this.style.border = "5px solid #556b2f";
    selectedCell.push(id);
    notSelected++;
  } else {
    alerts.textContent = "Oups! You can only make two moves.";
    alert.textContent = "";
  }
  return;
}

for (let i = 0; i < select.length; i++) {
  select[i].addEventListener("click", selectPosition, false);
}

function attackFunction() {
  if (selectedCell.length !== 2) {
    alerts.textContent = "You have to make two moves please, try again!";
    alert.textContent = "";
  } else {
    let position1 = selectedCell[0];
    let position2 = selectedCell[1];

    let cell1 = position1.split("", position1)[0];
    let cell2 = position1.split("", position1)[1];

    let cell11 = position2.split("", position2)[0];
    let cell12 = position2.split("", position2)[1];

    //horizontal check
    if (cell1 === cell11) {
      return true;
    }

    //vertical check
    if (cell2 === cell12) {
      return true;
    }

    //diagonal check (left to right)
    if (cell1 - cell2 === cell11 - cell12) {
      return true;
    }

    let positionRightLeft = Math.abs(parseInt(position1) - parseInt(position2));

    let moduleRightLeft = positionRightLeft % 9 === 0 ? true : false;

    if (moduleRightLeft) {
      return true;
    }
    alerts.textContent = "Queen cannot be attacked!";
    alert.textContent = "";
  }
}

function checkAttack() {
  let attack = attackFunction();
  if (attack) {
    alert.textContent = "Queen has been attacked!!!";
    alerts.textContent = "";
  }
  alerts.style.display = "block";
  return;
}
