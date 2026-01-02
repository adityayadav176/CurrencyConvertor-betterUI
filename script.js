const toggle = document.getElementById("mode");
const body = document.body;
const container1 = document.querySelector(".container1");
const containers = document.querySelector(".container");
const swapBtn = document.querySelector(".swap-btn");

// select all dropdown
const selects = document.querySelectorAll("select");

// select all coutry
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


toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    container1.classList.toggle("color");
    containers.classList.toggle("color");
    swapBtn.classList.toggle("color");
});


