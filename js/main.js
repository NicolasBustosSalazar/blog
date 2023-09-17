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

const post = document.getElementById("dialog");
const boton = document.getElementById("NEW");

boton.addEventListener("click", () => {
  post.showModal();
});

const guardar = document.getElementById("guardar");

guardar.addEventListener("click", () => {
  let divElement = document.createElement("div");
  let post_name = document.getElementById("input").value;
  let post_descrp = document.getElementById("descrip").value;
  let post_photo = document.getElementById("photo").value;
  //console.log(post_name + " hello world");
  divElement.classList.add("card");
  // divElement.classList.add("show");
  let post =
    `
        <div class="post_header">
          <img class="post_icon" src="` +
    post_photo +
    `" />
          <span class="post_title">` +
    post_name +
    `</span>
        </div>
        <p>` +
    post_descrp +
    `
        </p>`;
  divElement.insertAdjacentHTML("beforeend", post);

  let prime = document.getElementById("prime");
  prime.appendChild(divElement);
  const hiddenElements = document.querySelectorAll(".card");

  hiddenElements.forEach((el) => observer.observe(el));
});
