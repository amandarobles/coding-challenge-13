// Task 2: Employee Cards Dynamic Addition
let cnt = 0; //ensuring unique element ids
function createElement(name, position) { //writing function that uses createElement
    const employeeContatiner = document.getElementById("employeeContainer"); //finding employeeContainer by id
    let card = document.createElement("div"); //building an employee card
    card.setAttribute("class", "employeeCard"); //setting attributes using setAttribute
    card.setAttribute("id", `employee${cnt}`);
    card.innerHTML = `<h3>${name}</h3><p>${position}</p>`; //adding heading for employee's name/ a paragraph for employee's position
}
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