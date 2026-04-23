// Toggle the mobile navigation menu
function myFunction() {
  // Get the element that contains the nav links
  var x = document.getElementById("myLinks");

  // If the menu is currently visible, hide it
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  // Otherwise, show it
  else {
    x.style.display = "block";
  }
}
