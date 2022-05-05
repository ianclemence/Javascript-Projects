//chrome://extensions/
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

// // 1. Turn the myLeads string into an array (when in markdown format)
// myLeads = JSON.parse(myLeads)
// // 2. Push a new value to the array
// myLeads.push("www.lead2.com")
// // 3. Turn the array into a string again
// myLeads = JSON.stringify(myLeads)
// // 4. Console.log the string using typeof to verify it's a string
// console.log(typeof myLeads)

// localStorage.setItem("myLeads", "www.ianclemence.com")
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()

// get the leads from localStorage (in array form)
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a href=' " + leads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"
        
        // Template string sample
        listItems += `
        <li>
            <a href='${leads[i]}' target='_blank'>
                ${leads[i]} 
            </a>
        </li>`
    }    
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // Save the myLeads array to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


// const tabs = [
//     {url: "https://www.linkedin.com/en/ian-clemence"}
// ]

tabBtn.addEventListener("click", function () {
    // Grab the url of the current tab
    chrome.tabs.query({
        active: true,
        currentWindow: true,
    }, function (tabs) {
        let activeTab = tabs[0]
        myLeads.push(activeTab.url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})






