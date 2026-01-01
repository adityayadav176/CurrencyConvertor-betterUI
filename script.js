const toggle = document.getElementById("mode");
const body = document.body;
const container1 = document.querySelector(".container1");
const containers = document.querySelector(".container");
const input = document.querySelector("#EnterData");
const select = document.querySelector("select");
const convertorPara = document.querySelector("#convertor-para");
const updatedPara = document.querySelector("#updated-date");
const refreshBtn = document.querySelector("#refreshBtn");
const swapBtn = document.querySelector(".swap-btn");
const fromCurr = document.querySelector(".box");


toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    container1.classList.toggle("color");
    containers.classList.toggle("color");
});


