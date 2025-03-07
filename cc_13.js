// Task 2: Employee Cards Dynamic Addition
let cnt = 0; //ensuring unique element ids
function createElement(name, position) { //writing function that uses createElement
    const employeeContatiner = document.getElementById("employeeContainer"); //finding employeeContainer by id
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