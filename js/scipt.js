document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("header").innerHTML = data));

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("footer").innerHTML = data));
});
// زر العودة للأعلى
window.addEventListener("scroll", function () {
  var backToTop = document.getElementById("backToTop");
  if (window.pageYOffset > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
