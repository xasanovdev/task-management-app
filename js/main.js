<<<<<<< HEAD
import { createItem, readItems, updateItem, deleteItem } from "./crud.js";

const THEME_TOGGLER_BUTTON = ".theme-toggler";
=======
const THEME_TOGGLER_BUTTON = '.theme-toggler'
>>>>>>> 9eb66821b53a47d2e3a38a36335efd83d2e937a6

const localSTheme = localStorage.getItem('theme')
let themeToSet = localSTheme

if (!localSTheme) {
  themeToSet = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

document.documentElement.setAttribute('data-theme', themeToSet)

function init() {
  const elThemeTogglerButton = document.querySelector(THEME_TOGGLER_BUTTON)

  function switchTheme() {
    const elRoot = document.documentElement
    let dataTheme = elRoot.getAttribute('data-theme')

    let newTheme = dataTheme === 'light' ? 'dark' : 'light'

    elRoot.setAttribute('data-theme', newTheme)

    localStorage.setItem('theme', newTheme)
  }

  if (elThemeTogglerButton) {
    elThemeTogglerButton.addEventListener('click', switchTheme)
  }
}

<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", init);


console.log(createItem({ id: 3, name: "Item 3" }), 'create');
console.log(readItems(), 'read');

=======
document.addEventListener('DOMContentLoaded', init)
>>>>>>> 9eb66821b53a47d2e3a38a36335efd83d2e937a6
