// currency-convertor API
const base_url = "https://2024-03-06.currency-api.pages.dev/v1/currencies";

const toggle = document.getElementById("mode");
const body = document.body;
const container1 = document.querySelector(".container1");
const containers = document.querySelector(".container");
const swapBtn = document.querySelector(".swap-btn");


const amountInput = document.querySelector("#fromCurr"); // input
const resultText = document.querySelector("#toCurr");    // result <p>

const selects = document.querySelectorAll("select");
const fromCurr = selects[0]; // first select
const toCurr = selects[1];   // second select

const msg = document.querySelector("#msg");
const updatedMsg = document.querySelector("#updated-msg");
const randMsg = document.querySelector(".box1-para");

// API called

const getExchangeRate = async () => {
    let amount = amountInput.value;

    if (amount <= 0) {
        amount = "";
        amountInput.value = "";
    }

    const from = fromCurr.value.toLowerCase();
    const to = toCurr.value.toLowerCase();

    try {
        const URL = `${base_url}/${from}.json`;
        const response = await fetch(URL);
        const data = await response.json();

        const rate = data[from][to];
        const finalAmount = (amount * rate).toFixed(2);

        // Update UI
        resultText.innerText = finalAmount;
        msg.innerText = `1 ${from.toUpperCase()} = ${rate} ${to.toUpperCase()}`;
        updatedMsg.innerText = `Last Updated : ${new Date().toLocaleTimeString()}`;

        updateQuickCards(rate);

    } catch (error) {
        console.error(error);
        msg.innerText = "Failed to load exchange rate";
    }
};
// convert cards
function updateQuickCards(rate) {
    const cards = document.querySelectorAll(".container");
    const amounts = [100, 500, 1000];

    cards.forEach((card, index) => {
        card.querySelector(".currency-rate").innerText = amounts[index];
        card.querySelector(".currency-name").innerText = fromCurr.value;

        card.querySelector(".bottomCurrRate").innerText =
            (amounts[index] * rate).toFixed(0);

        card.querySelector(".bottomCurrName").innerText = toCurr.value;
    });
}


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
// swapBtn
swapBtn.addEventListener("click", () => {
    const temp = fromCurr.value;
    fromCurr.value = toCurr.value;
    toCurr.value = temp;

    getExchangeRate();
});
//events
amountInput.addEventListener("input", getExchangeRate);
fromCurr.addEventListener("change", getExchangeRate);
toCurr.addEventListener("change", getExchangeRate);

document.querySelector("#refreshBtn").addEventListener("click", getExchangeRate);

//intial load

window.addEventListener("load", () => {
    amountInput.value = 1;
    getExchangeRate();
});




