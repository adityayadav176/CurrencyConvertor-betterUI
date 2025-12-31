const toggle = document.getElementById("mode");
const body = document.body;
const container1 = document.querySelector(".container1");

toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    container1.classList.toggle("color");
});
