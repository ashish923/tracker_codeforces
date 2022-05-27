$(document).ready(function() {
  $("#mobile-menu,.navbar-brand").addClass("animate__animated animate__zoomIn");
  $("#user-handle").addClass("animate__animated animate__zoomInUp");
});


document.getElementById("home").onclick = function() {
  document.getElementById("user-handle").style.display = "block";
  document.getElementById("compare-handle").style.display = "none";

}

document.getElementById("compare").onclick = function() {
  document.getElementById("compare-handle").style.display = "block";
  document.getElementById("user-handle").style.display = "none";
}
