// constants for query selector
const customColorBtn = document.getElementById('customColorBtn1');
const randomColorBtn = document.getElementById('randomColorBtn2');
const imageSelect = document.getElementById('imageSelect');
const studentId = document.getElementById('myStudentId');
const Colourvalue01 = document.getElementById('Colourvalue');
const body = document.body;

// function to change bg color from user input and add student id
function changeCustomColor() {
    const userInput = prompt("Enter a number between 0 and 100:");
    const number = parseInt(userInput);

    if (number >= 0 && number <= 100) {
        if (number < 20) {
            body.style.backgroundColor = "green";
        } else if (number < 40) {
            body.style.backgroundColor = "blue";
        } else if (number < 60) {
            body.style.backgroundColor = "orange";
        } else if (number < 80) {
            body.style.backgroundColor = "purple";
        } else {
            body.style.backgroundColor = "yellow";
        }
        studentId.textContent = " Student NUmber:2005210835";
        Colourvalue01.textContent = `Your Colour VAlue ${number}`;
        
    } else {
        alert("Please enter a number between 0 and 100.");
    }

}

// function to change bg color from random no.
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    if (randomNumber < 20) {
        body.style.backgroundColor = "green";
    } else if (randomNumber < 40) {
        body.style.backgroundColor = "blue";
    } else if (randomNumber < 60) {
        body.style.backgroundColor = "orange";
    } else if (randomNumber < 80) {
        body.style.backgroundColor = "purple";
    } else {
        body.style.backgroundColor = "yellow";
    }
    studentId.textContent = "Student Number :200520835";
    Colourvalue01.textContent = `Random Color: ${randomNumber}`;
    

}

// function to generate options for select list
const imageSources = [
    './img/img1.jpg',
    './img/img2.jpg',
    './img/img3.jpg',
    './img/img4.jpg',
    './img/img5.jpg'
];

// Get the select element and the image element
const imageSelect01 = document.getElementById('imageSelect');
const imageElement = document.getElementById('images');

function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    while (imageSelect01.firstChild) {
        imageSelect01.removeChild(imageSelect01.firstChild);
    }

    imageSources.forEach((src, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = `img ${index + 1}`;
        imageSelect01.appendChild(option);
    });
    
   
}

// function to change image
function changeImage() {
    const selectedIndex = imageSelect01.value;
    if (selectedIndex >= 0 && selectedIndex < imageSources.length) {
        const selectedImageSrc = imageSources[selectedIndex];
        imageElement.src = selectedImageSrc;
        imageElement.alt = `img ${selectedIndex + 1}`;
    }

}

function addOption(src, index) {
    const option = document.createElement('option');
    option.value = index;
    option.text = `img ${index + 1}`;
    imageSelect01.appendChild(option);
}

// event listeners for on click event of buttons and select
customColorBtn.addEventListener('click', changeCustomColor);
randomColorBtn.addEventListener('click', changeRandomColor);

// event listeners for on change event of select
imageSelect.addEventListener('change', changeImage);

// Initialize the select list options
addList();