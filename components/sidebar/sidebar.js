// "use strict";

// document.addEventListener("DOMContentLoaded", function () {

// const sidebarRevealer = document.querySelector(".sidebar-revealer");
// const hideSidebar = document.querySelector(".sidebar-hider");
// const blocker = document.querySelector(".blocker");

// sidebarRevealer.addEventListener("click", toggleSidebar());
// function toggleSidebar() {
//    sidebarRevealer.classList.toggle("md:-translate-x-full");
//    sidebar.classList.toggle("md:translate-x-full");
//    // sidebarRevealer.classList.add('md:hidden')
// }
// toggleSidebar();
// hideSidebar.addEventListener("click", () => {
//    sidebar.classList.toggle("md:-translate-x-full");
//    sidebarRevealer.classList.toggle("md:translate-x-full");
// });
//    const sidebarOpenerIcon = document.querySelector(".sidebarOpenerIcon");
//    const sidebar = document.querySelector(".sidebar");

//    sidebarOpenerIcon.addEventListener("click", function () {
//       sidebarOpenerIcon.classList.toggle("rotate-180");
//       blocker.classList.toggle("active");
//       sidebar.classList.toggle("hidden");
//       sidebar.classList.toggle("absolute");
//       sidebar.classList.toggle("top-4");
//       sidebar.classList.toggle("left-14");
//       sidebar.classList.toggle("rounded");
//       hideSidebar.classList.toggle('hidden')
//    });
// });
// //
// window.addEventListener("resize", function () {
//    // If the window width is greater than or equal to 768px, hide the sidebar
//    if (window.innerWidth >= 768) {
//       sidebar.classList.toggle("hidden");
//       blocker.classList.remove("active");
//       sidebar.classList.remove('absolute')
//       sidebar.classList.remove('rounded')
//       hideSidebar.classList.remove('hidden')
//    }
// });

// // const sidebarRevealerIcon=document.querySelector('.sidebarOpenerIcon');

// // sidebarRevealerIcon.addEventListener('click',()=>{
// //   sidebarRevealerIcon.classList.toggle('-rotate-180')
// //   sidebar.classList.remove('hidden')
// //   sidebar.classList.toggle('absolute')
// //   sidebar.classList.toggle('top-4')
// //   sidebar.classList.toggle('left-14')
// //   sidebar.classList.toggle('rounded')
// // blocker.classList.toggle('active')
// //   hideSidebar.classList.toggle('hidden')

// // })
// blocker.addEventListener("click", () => {
//   document.body.classList.remove("block");
//   sidebarOpenerIcon.classList.remove("rotate-0");
//    blocker.classList.remove("active");
//    sidebar.classList.toggle("hidden");
//    sidebar.classList.remove("rounded");
// });

// const createdBoards = ["platform"];

// // Show number of created boards
// const numberOfCreatedBoards = document.querySelector(".numberOfCreatedBoards");
// numberOfCreatedBoards.textContent = `All boards (${createdBoards.length})`;
// //

// const currentBoard = document.querySelector(".currentBoard");
// // currentBoard.innerHTML=

// document.querySelector(".theme-toggler").addEventListener("click", function () {
//    const whiteSquare = document.querySelector(".theme-toggler .bg-white");
//    whiteSquare.classList.toggle("translate-x-4");
// });

//
//
"use strict";

document.addEventListener("DOMContentLoaded", function () {

   const sidebarRevealer = document.querySelector(".sidebar-revealer");
   const hideSidebar = document.querySelector(".sidebar-hider");
   const blocker = document.querySelector(".blocker");
   const sidebar = document.querySelector(".sidebar");
   const sidebarOpenerIcon = document.querySelector(".sidebarOpenerIcon");

   sidebarRevealer.addEventListener("click", toggleSidebar);

   function toggleSidebar() {
      sidebarRevealer.classList.toggle("md:-translate-x-full");
      sidebar.classList.toggle("md:translate-x-full");
   }

   hideSidebar.addEventListener("click", () => {
      sidebar.classList.toggle("md:-translate-x-full");
      sidebarRevealer.classList.toggle("md:translate-x-full");
   });

   sidebarOpenerIcon.addEventListener("click", function () {
      sidebarOpenerIcon.classList.toggle("rotate-180");
      blocker.classList.toggle("active");
      sidebar.classList.toggle("hidden");
      sidebar.classList.toggle("absolute");
      sidebar.classList.toggle("top-4");
      sidebar.classList.toggle("left-14");
      sidebar.classList.toggle("rounded");
      hideSidebar.classList.toggle('hidden');
   });

   window.addEventListener("resize", function () {
      // If the window width is greater than or equal to 768px, hide the sidebar
      if (window.innerWidth >= 768) {
         sidebar.classList.toggle("hidden");
         blocker.classList.remove("active");
         sidebar.classList.remove('absolute');
         sidebar.classList.remove('rounded');
         hideSidebar.classList.remove('hidden');
      }
   });

   blocker.addEventListener("click", () => {
      document.body.classList.remove("block");
      sidebarOpenerIcon.classList.remove("rotate-0");
      blocker.classList.remove("active");
      sidebar.classList.toggle("hidden");
      sidebar.classList.toggle("rounded");
   });

   const createdBoards = ["platform"];

   // Show number of created boards
   const numberOfCreatedBoards = document.querySelector(".numberOfCreatedBoards");
   numberOfCreatedBoards.textContent = `All boards (${createdBoards.length})`;
   //

   const currentBoard = document.querySelector(".currentBoard");

   document.querySelector(".theme-toggler").addEventListener("click", function () {
      const whiteSquare = document.querySelector(".theme-toggler .bg-white");
      whiteSquare.classList.toggle("translate-x-4");
   });

});
