// Task 2: Employee Cards Dynamic Addition
function addEmployeeCard(name, position) { //writing function that uses createElement
    const card = document.createElement('div'); //building an employee card
    card.setAttribute('class', 'employeeCard'); //setting attributes using setAttribute
    const heading = document.createElement('h3'); //name as heading
    heading.textContent = name;
    const paragraph = document.createElement('h3'); //position as paragraph
    paragraph.textContent = position;
    const removeButton = document.createElement('button'); //creating remove button
    removeButton.textContent = 'Remove';
    const editButton = document.createElement('button'); // Task 5 -creating edit button
    editButton.textContent = 'Edit'; 
    
    card.appendChild(heading); //appending elements to the card
    card.appendChild(paragraph);
    card.appendChild(editButton);
    card.appendChild(removeButton);

    document.getElementById('employeeContainer').appendChild(card); //appending card to employee container

    removeButton.addEventListener('click', function(event) { //removing functionality
        console.log('Remove button has been clicked'); //task 4- attaching click event listener
        event.stopPropagation(); //using stopPropagation to prevent bubbling
        card.remove();
    });
    editButton.addEventListener('click', function (){ //Task 5- adding event listener to support ticket
        const nameInput = document.createElement('input'); //pre-populating input fields
        nameInput.value = heading.textContent;
        const positionInput = document.createElement('input');
        positionInput.value = paragraph.textContent;
        const saveButton = document.createElement ('button');
        saveButton.textContent = 'Save'; //providing mechanism updating ticket with new values
        card.appendChild(positionInput); //input reverted back to static texg

        card.innerHTML = ''; //appending new functions
        card.appendChild(nameInput);
        card.appendChild(position);
        card.appendChild(saveButton);
        card.appendChild(removeButton);

        saveButton.addEventListener('click', function() { //saving button listener
            heading.textContent = nameInput.value;
            paragraph.textContent = positionInput.value;

            card.innerHTML = '';
            card.appendChild(heading);
            card.appendChild(paragraph);
            card.appendChild(editButton);
            card.appendChild(removeButton); //event listener for save button and inner text appending
        });
    });
}

//Test data Task 2
addEmployeeCard("John Doe", "Forensics Analyst"); //calling function to add a new employee card to dashboard
addEmployeeCard("Liam Schnieder", "Head Forensics Analyst");
addEmployeeCard("Dave Cuomo", "Law Enforcement Detective");

// Task 3: Bulk Update on Employee Cards
function bulkUpdateEmployeeCards() {
const cards = document.querySelectorAll('.employeeCard'); //using document.querySelectorAll to select all elements with employee card class
const cardArray = Array.from(cards); //converting NodeList into an array using Array.from
cardArray.forEach(card => { //using array method to update card's style
    card.style.backgroundColor = "lightslategray"; //changing backgroun color
    card.style.border = "2px solid black"; //adding a border
}); }
bulkUpdateEmployeeCards(); //activating bulk update function