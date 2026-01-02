// currency-convertor API
const base_url = "https://2024-03-06.currency-api.pages.dev/v1/currencies";

const toggle = document.getElementById("mode");
const body = document.body;
const container1 = document.querySelector(".container1");
const containers = document.querySelector(".container");
const swapBtn = document.querySelector(".swap-btn");
const selects = document.querySelectorAll("select");
const toCurr = document.querySelector(".toCurr select");
const fromCurr = document.querySelector(".fromCurr select");
const msg = document.querySelector("#msg");
const updatedMsg = document.querySelector("#updated-msg");
const randMsg = document.querySelector(".box1-para");


// Populated dropdown
for( let select of selects){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if(select.name === "from" && currCode === "USD"){
            newOption.selected = true;
        }
        if(select.name === "to" && currCode === "INR"){
            newOption.selected = true;
        }

        select.append(newOption);
    }
}
// toggle btn
toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    container1.classList.toggle("color");
    containers.classList.toggle("color");
    swapBtn.classList.toggle("color");
});


