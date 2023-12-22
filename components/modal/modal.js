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

addNewColumnButton.addEventListener('click', (e) => {
  e.preventDefault()
  addNewColumnToInputs() // Add an initial empty column input
})

// Event delegation to handle close-btn clicks
inputsWrapper.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-btn')) {
    e.preventDefault()
    const columnWrapper = e.target.closest('.relative')

    // Ensure there is at least one column remaining
    if (inputsWrapper.childElementCount > 3) {
      columnWrapper.remove()
    }
  }
})

function addNewColumnToInputs() {
  const columnInputHtml = generateColumnInput('')
  inputsWrapper.insertAdjacentHTML('beforeend', columnInputHtml)

  // Clear modalInputs array
  modalInputs = []
  errorMessage = []

  errorMessage = inputsWrapper.querySelector('.input-span')

  // Collect values from all input elements
  const inputElements = inputsWrapper.querySelectorAll('.modal-input')
  inputElements.forEach((input) => {
    modalInputs.push(input.value)
  })

  renderBoard()
  console.log(modalInputs)
}

function generateColumnInput(columnInput) {
  return `
    <div class="relative flex gap-4 w-full">
      <input
        class="modal-input block bg-transparent w-full px-4 py-2 rounded text-color outline-none cursor-pointer font-medium text-[13px] leading-[23px] border border-input-color focus:border-primary-color active:transition duration-200 active:ease-in"
        type="text"
        placeholder="e.g. Take coffee break"
        value="${columnInput}"
      />
      <button
        type="button"
        class="button icon-close border-transparent bg-transparent duration-200 hover:text-danger-color close-btn"
      >
      </button>
      <span
        class="input-span hidden absolute top-2 right-12 text-[#ea5555] font-medium leading-[23px] not-italic font-plus-jakarta-sans text-[13px]"
        >Can’t be empty</span
      >
    </div>
  `
}

function openModal(modalId) {
  const modal = document.getElementById(modalId)
  modalInputs = Array.from(modal.querySelectorAll('.modal-input'))
  errorMessage = Array.from(modal.querySelectorAll('.input-span'))
  removeColumn = modal.querySelector('.close-btn') // Add the dot here

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

  // Update modalInputs with the latest values
  modalInputs = Array.from(inputsWrapper.querySelectorAll('.modal-input'))
  errorMessage = Array.from(inputsWrapper.querySelectorAll('.input-span'))
  let hasError = false // Flag to track if there is any error

  // Validate boardName (assuming it is the first input element)
  const boardNameInput = modalInputs[0]
  const boardNameErrorMessage = errorMessage[0]

  if (boardNameInput.value === '') {
    boardNameInput.classList.add('error')
    boardNameErrorMessage.classList.remove('hidden')
    hasError = true // Set the flag to true if there is an error
  } else {
    boardNameInput.classList.remove('error')
    boardNameErrorMessage.classList.add('hidden')
  }

  // Validate column names
  for (let index = 1; index < modalInputs.length; index++) {
    const modalInput = modalInputs[index]
    const currentErrorMessage = errorMessage[index]

    if (modalInput.value === '') {
      modalInput.classList.add('error')
      currentErrorMessage.classList.remove('hidden')
      hasError = true // Set the flag to true if there is an error
    } else {
      modalInput.classList.remove('error')
      currentErrorMessage.classList.add('hidden')
    }
  }

  if (!hasError) {
    // Call the addNewBoard function with the board name and column names
    addNewBoard(
      boardNameInput.value,
      modalInputs.slice(1).map((input) => input.value),
    )

    // Reset modalInputs and errorMessage
    modalInputs = errorMessage = null

    renderBoard()
    // Close the modal
    closeModal('add-board-modal')
  }
})




// closeModal function to close modals
// closeModal function to close modals
const closeModal = (modalId) => {
  const modal = document.getElementById(modalId)
  modal.classList.add('hidden')
  blocker.classList.remove('active')
  overlay.classList.add('hidden')
  modal.style.zIndex = '0'
  overlay.classList.remove('flex')

  // Reset modalInputs and errorMessage
  modalInputs = null
  errorMessage = null
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
