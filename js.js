let bar = document.getElementById("bar");
let front = document.getElementById("front-color");
let back = document.getElementById("bg-color");
let text = document.getElementById("text");

let maxHealth = document.getElementById("maxhealth").value;
let currHealth = maxHealth;



function calculatePercent() {
    let percent = currHealth / maxHealth;
    if(percent > 0) return (currHealth / maxHealth) * 100;
    else {
        currHealth = 0;
        return 0;
    }
}

function updateBar() {
    front.style.width = calculatePercent() + "%";
    back.style.width = calculatePercent() + "%";
}

function updateText() {
    text.textContent = currHealth + "/" + maxHealth + " (" + calculatePercent().toFixed(2) + "%)";
}
updateText();



//dividers
function makeDividers() {
    let dividers_amount = maxHealth / 100;
    let dividers_containter = document.getElementById("dividers");
    while (dividers_containter.firstChild) {
        dividers_containter.removeChild(dividers_containter .lastChild);
    }
    let dividers = [];
    let space = 100 / dividers_amount;

    for(let i = 0; i < dividers_amount; i++) {
        let divider = document.createElement("div");
        divider.className = "divider";
        dividers.push(divider);
        if((i+1) % 10 == 0) { divider.style.height = "100%"; }
        divider.style.left = ((i+1) * space + "%");
        dividers_containter.appendChild(divider);
    }
}
makeDividers();



document.getElementById("maxhealth").addEventListener("input", () =>  {
    maxHealth = document.getElementById("maxhealth").value;
    currHealth = maxHealth;
    
    makeDividers()
    updateText();
    updateBar();
})

bar.addEventListener("click", () => {
    let dmg = document.getElementById("damage").value;
    currHealth -= dmg;

    updateBar();
    updateText();
})

document.getElementById("healthcolor").addEventListener("change", () => {
    front.style.backgroundColor = document.getElementById("healthcolor").value;
})

document.getElementById("healthbgcolor").addEventListener("change", () => {
    back.style.backgroundColor = document.getElementById("healthbgcolor").value;
})