// initialize the count as 0
let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el")

// listen for clicks on the increment button
function increment() {
  // increment the count variable when the button is clicked
  count += 1;

  // change the count-el in the html to reflect the new count
  countEl.innerText = count;
}

// Create a function save() which logs out the count when it's called
function save() {
    let countStr = count + " - "
    // saveEl.innerText += countStr
    saveEl.textContent += countStr
    countEl.innerText = 0
    count = 0;
}

console.log("Let's count people on the subway!")

