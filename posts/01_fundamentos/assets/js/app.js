


const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

const colors = ["green", "yellow", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn1');
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    //get random number between 0 and 3

    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

function getRandomNumber() {
    return Math.random();
}