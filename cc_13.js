// Task 2: Employee Cards Dynamic Addition
let cnt = 0; //ensuring unique element ids
function createElement(name, position) { //writing function that uses createElement
    const employeeContainer = document.getElementById("employeeContainer"); //finding employeeContainer by id
    let card = document.createElement("div"); //building an employee card
    card.setAttribute("class", "employeeCard"); //setting attributes using setAttribute
    card.setAttribute("id", `employee${cnt}`);
    card.innerHTML = `<h3>${name}</h3><p>${position}</p>`; //adding heading for employee's name/ a paragraph for employee's position
}
// Task 4: Implementing Removal of Employee Cards with Event Bubbling
card.addEventListener("click", ()=> {console.log(`Clicked ${card.id} -${name}`)}) //adding event listener to card that logs message
deleteBtn = document.createElement("button"); // "remove" button for deleting card
deleteBtn.textContent = "Remove employee"; //adding button text
deleteBtn.addEventListener("click", (event) =>{ //adding event listener to button
    employeeContainer.removeChild(card) //removeChild card from employeeContainer
    event.stopPropagation(); //using stopPropagation () in "remove" button's event handler to prevent event from bubbling up
});

// Task 5: Incline Editing for Employee Cards
editBtn = document.createElement("button"); //creating a "Edit Information" button
editBtn.textContent = "Edit information"; //adding text
editBtn.addEventListener("click", (event) => { 
    svBtn = document.createElement("button"); //creating a "Save Information" button
    svBtn.textContent = "Save information"; //adding text
    card.replaceChild(svBtn, card.children[2]); //appending save button to the card
    card.children[1].outerHTML += `<input value= "${name}"><input value = "${position}">`
    svBtn.addEventListener("click", (event) => { //adding event listener to employee card's edit button that swaps content with input fields
        card.children[0].textContent = card.children[2].value //updating content of h3 tag to match value of first input
        card.children[1].textContent = card.children[3].value //updating content of p tag to match value of second input
        event.stopPropagation();
    });
    event.stopPropagation();
});
card.appendChild(editBtn);
card.appendChild(deleteBtn); //appending remove button to card
employeeContainer.appendChild(card); //appending employee card to "employeeContainer" using appendChild
cnt += 1; //updating counter

//Test data Task 2
createElement("John Doe", "Forensics Analyst"); //calling function to add a new employee card to dashboard
createElement("Liam Schnieder", "Head Forensics Analyst");
createElement("Dave Cuomo", "Law Enforcement Detective");

// Task 3: Bulk Update on Employee Cards
const employeeCardNodeList = document.querySelectorAll(".employeeCard"); //using document.querySelectorAll to select all elements with employee card class
const employeeCardArray = Array.from(employeeCardNodeList); //converting NodeList into an array using Array.from
employeeCardArray.forEach(card => { //using array method to update card's style
    card.style.backgroundColor = "lightslategray"; //changing backgroun color
    card.style.border = "2px solid black"; //adding a border
});