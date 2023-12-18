const blocker = document.querySelector('.blocker')
const closeModalButtons = document.querySelectorAll('.close-modal')
const toggleModalButtons = document.querySelectorAll(".toggle-modal-button")
const modals = document.querySelectorAll(".modal")

const openModal = (modalId) => {
  const modal = document.getElementById(modalId)
  document.body.classList.add('active')
  modal.classList.remove('hidden')
  blocker.classList.remove('hidden')
}

// closeModal function to close modals
const closeModal = (modalId) => {
  const modal = document.getElementById(modalId)
  document.body.classList.remove('active')
  modal.classList.add('hidden')
  blocker.classList.add('hidden')
}

toggleModalButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const modalId = button.getAttribute('modal-id')
    openModal(modalId)
  })
})

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = button.parentElement.id
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
