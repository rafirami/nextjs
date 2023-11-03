// Gets the Mobile Nav icon by its ID
let bars = document.getElementById("bars");
let closeMenus = document.getElementById("closeMenus");
// Gets the Mobile Nav container
let mobileMenu = document.getElementById("mobileMenu");
// Displays the Mobile Nav when clicked and changes the Nav Icon from three bars to an 'X'
bars.addEventListener("click", function () {
  mobileMenu.classList.add("show");
  mobileMenu.classList.remove("hidden");
  bars.classList.add("hidden");
  closeMenus.classList.remove("hidden")
  closeMenus.classList.add("md:hidden");
});
//close mobe menus
closeMenus.addEventListener("click", function () {
  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("show");
  bars.classList.add("md:hidden");
  bars.classList.remove("hidden")
  closeMenus.classList.add("hidden");
}); 