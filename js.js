//getting the variables
let bar = document.getElementById("bar");
let front = document.getElementById("front-color");
let back = document.getElementById("bg-color");
let text = document.getElementById("text");

let maxHealth = document.getElementById("maxhealth").value;
let currHealth = maxHealth;


/**
 * calculate current percent of health.
 * @returns value as a percent btwn 0 - 100
 */
function calculatePercent() {
    let percent = currHealth / maxHealth;
    if(percent > 0) return (currHealth / maxHealth) * 100;
    else {
        currHealth = 0;
        return 0;
    }
}

/**
 * updates the style of front and back bars.
 */
function updateBar() {
    front.style.width = calculatePercent() + "%";
    back.style.width = calculatePercent() + "%";
}

/**
 * updates the text content of the health bar.
 */
function updateText() {
    text.textContent = currHealth + "/" + maxHealth + " (" + calculatePercent().toFixed(2) + "%)";
}
updateText();

/**
 * make dividers on the health bar itself
 */
function makeDividers() {
    //the amount of the dividers needed
    let dividers_amount = maxHealth / 100;
    //gets the divider containter
    let dividers_containter = document.getElementById("dividers");
    //calculate the space needed for every divider
    let space = 100 / dividers_amount;
    //empty dividers containter 
    while (dividers_containter.firstChild)
        dividers_containter.removeChild(dividers_containter .lastChild);

    for(let i = 0; i < dividers_amount; i++) {
        //create div element
        let divider = document.createElement("div");
        //give div element a class
        divider.className = "divider";
        //if the div element is 10th change it's style
        if((i+1) % 10 == 0) { divider.style.height = "100%"; }
        //give left style to the element
        divider.style.left = ((i+1) * space + "%");
        //append element to the divider containter
        dividers_containter.appendChild(divider);
    }
}
makeDividers();


//what happens when the maxhealth input is updated
document.getElementById("maxhealth").addEventListener("input", () =>  {
    maxHealth = document.getElementById("maxhealth").value;
    currHealth = maxHealth;
    
    makeDividers()
    updateText();
    updateBar();
})

//when the bar is clicked
bar.addEventListener("click", () => {
    let dmg = document.getElementById("damage").value;
    currHealth -= dmg;

    updateBar();
    updateText();
})

//when the user changes front color
document.getElementById("healthcolor").addEventListener("change", () => {
    front.style.backgroundColor = document.getElementById("healthcolor").value;
})

//when the user changes the accent color
document.getElementById("healthbgcolor").addEventListener("change", () => {
    back.style.backgroundColor = document.getElementById("healthbgcolor").value;
})