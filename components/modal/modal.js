const blocker = document.querySelector('.blocker')
const closeModalButtons = document.querySelectorAll('.close-modal')
const toggleModalButtons = document.querySelectorAll('.toggle-modal-button')
const modals = document.querySelectorAll('.modal')
const buttons = document.querySelectorAll('.btn')
const overlay = document.querySelector('.overlay')
const addNewColumnButton = document.querySelector('.addNewColumnButton')
const createNewBoard = document.querySelector('.createNewBoard')
const inputsWrapper = document.querySelector('.inputs-wrapper')

let modalInputs = null
let errorMessage = null
let removeColumn = null

addNewColumnButton.addEventListener('click', (e) => {
  e.preventDefault()
})
const openModal = (modalId) => {
  const modal = document.getElementById(modalId)
  errorMessage = modal.querySelectorAll('.input-span')
  modalInputs = Array.from(modal.querySelectorAll('.modal-input'))
  removeColumn = modal.querySelector('close-btn')

  modal.classList.remove('hidden')
  blocker.classList.add('active')
  overlay.classList.remove('hidden')
  overlay.classList.add('flex')
  modal.style.zIndex = '100'
}
function addNewBoard(boardName, boardColumns) {
  // Create a new board object with dynamic columns
  const newBoard = {
    id: generateUniqueId(),
    name: boardName,
    columns: boardColumns.map((columnName) => ({
      name: columnName,
      tasks: [],
    })),
  }

  console.log(newBoard)
  console.log(boardData)
  // Add the new board to your application or perform any necessary actions
  // For example, you might have an array of boards:
  boardData.boards.push(newBoard)

  // Update your UI or trigger any necessary updates
  renderBoard()
}

createNewBoard.addEventListener('click', (e) => {
  e.preventDefault()

  if (!modalInputs.every((modalInput) => modalInput.value !== '')) {
    modalInputs.forEach((modalInput, index) => {
      if (modalInput.value === '') {
        modalInput.classList.add('error')
        errorMessage[index].classList.remove('hidden')
      } else {
        modalInput.classList.remove('error')
        errorMessage[index].classList.add('hidden')
      }
    })
  } else {
    const modalValues = modalInputs.map((modalInput) => modalInput.value)

    // Assuming modalValues[0] is the board name and the rest are column names
    const boardName = modalValues[0]
    const columnNames = modalValues.slice(1)

    // Call the addNewBoard function with the board name and column names
    addNewBoard(boardName, columnNames)

    // Reset modalInputs and errorMessage if needed
    modalInputs = null
    errorMessage = null

    // Close the modal
    closeModal('add-board-modal')
  }
})

// closeModal function to close modals
const closeModal = (modalId) => {
  const modal = document.getElementById(modalId)
  modal.classList.add('hidden')
  blocker.classList.remove('active')
  overlay.classList.add('hidden')
  modal.style.zIndex = '0'
  overlay.classList.remove('flex')
}

toggleModalButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const modalId = button.getAttribute('modal-id')
    openModal(modalId)
  })
})

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = button.parentElement.parentElement.id
    closeModal(modalId)
  })
})

blocker.addEventListener('click', () => {
  modals.forEach((modal) => {
    modal.classList.add('hidden')
  })
  blocker.classList.add('hidden')
  overlay.classList.add('hidden')
  overlay.classList.remove('flex')
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modals.forEach((modal) => {
      modal.classList.add('hidden')
      modal.style.zIndex = '0'
    })
    blocker.classList.remove('active')
    overlay.classList.add('hidden')
    overlay.classList.remove('flex')
  }
})
