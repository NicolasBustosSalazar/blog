const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".card");

hiddenElements.forEach((el) => observer.observe(el));

const newPost_btn = document.getElementById("NEW");

newPost_btn.addEventListener("click", function (e) {
  const name = prompt("nombre?");
});
