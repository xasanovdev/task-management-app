"use strict";
const sidebarRevealer=document.querySelector(".sidebar-revealer")
const sidebar=document.querySelector('.sidebar')
const hideSidebar=document.querySelector('.hideSidebar')

sidebarRevealer.addEventListener('click', toggleSidebar())
function toggleSidebar(){
  sidebarRevealer.classList.add('-translate-x-full')
  sidebar.classList.add('translate-x-full')
  sidebarRevealer.classList.add('hidden')
}
toggleSidebar()
hideSidebar.addEventListener('click' ,()=>{
sidebar.classList.add('-translate-x-full');
sidebarRevealer.classList.add('translate-x-full')

})

const createdBoards=['platform',]

// Show number of created boards
const numberOfCreatedBoards=document.querySelector('.numberOfCreatedBoards');
numberOfCreatedBoards.textContent=`All boards (${createdBoards.length})`;
//

const currentBoard=document.querySelector('.currentBoard')
// currentBoard.innerHTML=
