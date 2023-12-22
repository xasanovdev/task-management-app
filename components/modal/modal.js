const blocker = document.querySelector('.blocker')
const closeModalButtons = document.querySelectorAll('.close-modal')
const toggleModalButtons = document.querySelectorAll('.toggle-modal-button')
const modals = document.querySelectorAll('.modal')
const modalInputs = document.querySelectorAll('.modal-input')
const buttons = document.querySelectorAll('.btn')
const overlay = document.querySelector(".overlay")

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault()
  })
  modalInputs.forEach((modalInput) => {
    if (modalInput.value.trim() === '') {
      modalInput.classList.add('focus:border-danger-color')
    } else {
      console.log('asf')
      modalInput.classList.remove('focus:border-danger-color')
    }
  })
})

console.log(modalInputs)
const openModal = (modalId) => {
  const modal = document.getElementById(modalId)
  document.body.classList.add('active')
  modal.classList.remove('hidden')
  blocker.classList.add('active')
  overlay.classList.remove('hidden')
  overlay.classList.add('flex')
  modal.style.zIndex = "100"
}
const removeActiveModals = (modalInput) => {
  if (modalInput.value.trim() === '') {
    modalInput.classList.add('focus:border-danger-color')
  } else {
    modalInput.classList.remove('focus:border-danger-color')
  }
}

modalInputs.forEach((modalInput) => {
  modalInput.addEventListener('input', () => {
    removeActiveModals(modalInput)
    console.log(modalInput)
  })
})

// closeModal function to close modals
const closeModal = (modalId) => {
  const modal = document.getElementById(modalId)
  document.body.classList.remove('active')
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
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modals.forEach((modal) => {
      modal.classList.add('hidden')
    })
    blocker.classList.add('hidden')
  }
})
