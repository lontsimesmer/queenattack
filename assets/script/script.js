const select = document.querySelectorAll('.cell')
const alert = document.querySelector('.alert')
const alerts = document.querySelector('.alerterror')
const attack = document.querySelector('#check')
attack.addEventListener('click', checkAttack)
let notSelected = 0
let selectedCell = []

function selectPosition () {
  let id = this.getAttribute('id')

  let selectedIndex = selectedCell.indexOf(id)

  if (selectedIndex >= 0) {
    this.style.border = '5px solid #cd5c5c'
    notSelected--
    return;
  } else if (notSelected < 2) {
    this.style.border = '5px solid #556b2f'
    selectedCell.push(id)
    notSelected++
  } else {
    alerts.textContent = 'Oups! You can only make two moves.'
    alert.textContent = ''
  }
  return;
}

for (let i = 0; i < select.length; i++) {
  select[i].addEventListener('click', selectPosition, false)
}

function attackFunction () {
  if (selectedCell.length !== 2) {
    alerts.textContent = 'You have to make two moves please, try again!'
    alert.textContent = ''
  } else {
    const position1 = selectedCell[0]
    const position2 = selectedCell[1]

    const cell11 = position1.split('', position1)[0]
    const cell12 = position1.split('', position1)[1]

    const cell21 = position2.split('', position2)[0]
    const cell22 = position2.split('', position2)[1]

    // horizontal check
    if (cell11 === cell21) {
      return true
    }

    // vertical check
    if (cell12 === cell22) {
      return true
    }

    // diagonal check
    if (cell11 - cell12 === cell21 - cell22) {
      return true
    }

    const positionRightLeft = Math.abs(parseInt(position1) - parseInt(position2))

    const moduleRightLeft = (positionRightLeft % 9 === 0) ? true : false

    if (moduleRightLeft) {
      return true
    }
    alerts.textContent = 'Queen cannot be attacked!'
    alert.textContent = ''
  }
}

function checkAttack () {
  const attack = attackFunction()
  if (attack) {
    alert.textContent = 'Queen has been attacked!!!'
    alerts.textContent = ''
  }
  alerts.style.display = 'block'
  return;
}
