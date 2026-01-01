const toggle = document.getElementById("mode");
const body = document.body;
const container1 = document.querySelector(".container1");
const containers = document.querySelector(".container");
const input = document.querySelector("#EnterData");
const select = document.querySelector("select");
const convertorpara = document.querySelector("#convertor-para");
const updatedpara = document.querySelector("#updated-date");
const refreshbtn = document.querySelector("#refreshBtn");
const swapbtn = document.querySelector(".swap-btn");
const fromCurr = document.querySelector(".box");


toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    container1.classList.toggle("color");
    containers.classList.toggle("color");
});


