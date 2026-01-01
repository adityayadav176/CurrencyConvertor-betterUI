const toggle = document.getElementById("mode");
const body = document.body;
const container1 = document.querySelector(".container1");
const containers = document.querySelector(".container");
const swapbtn = document.querySelector(".swap-btn");

toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    container1.classList.toggle("color");
    containers.classList.toggle("color");
    swapbtn.classList.toggle("color");
});


