document.addEventListener("DOMContentLoaded", function () {
  // تحميل الهيدر
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;

      // تفعيل زر التبرع (بعد إدراج الهيدر)
      activateDonateButton();
    });

  // تحميل الفوتر
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("footer").innerHTML = data));

  // تفعيل زر التبرع إن كان موجوداً مباشرة داخل الصفحة (مثل index.html)
  activateDonateButton();
});

// 🔹 زر العودة للأعلى
window.addEventListener("scroll", function () {
  var backToTop = document.getElementById("backToTop");
  if (backToTop) {
    if (window.pageYOffset > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  }
});

// 🔹 دالة تفعيل زر التبرع سواء كان من داخل الهيدر أو الصفحة مباشرة
function activateDonateButton() {
  const donateBtn = document.getElementById("go-donate");
  if (donateBtn) {
    donateBtn.addEventListener("click", function () {
      window.open("donate.html", "_blank");
    });
  }
}
