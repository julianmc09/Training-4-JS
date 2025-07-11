// Click event for the save button, so that it captures the name and age from the form
document.getElementById("saveButton").addEventListener("click", () => {
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    // conditional to verify that the entered data is valid
    if (!nameInput || !ageInput) {
        console.error("Input elements not found");
        return;
    }

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    // conditional where changes are saved to local storage
    if (name && !isNaN(age)) {
        localStorage.setItem("userName", name);
        localStorage.setItem("userAge", age);
        displayData();
    } else {
        alert("Please enter valid name and age.");
    }   

});

// Function to display data from local storage in the "output" element
function displayData() {
    const name = localStorage.getItem("userName");
    const age = localStorage.getItem("userAge");
    const outputDiv = document.getElementById("output");

    if (name && age){
        outputDiv.textContent = `Hello ${name}, you are ${age} years old.`;
    }else{
        outputDiv.textContent = "No data available.";
    }
}

// When the page loads, it displays the stored data.
window.onload = displayData;


// counter to know how many times the user has interacted with the page
if (!sessionStorage.getItem("interactionCount")) {
    sessionStorage.setItem("interactionCount", 0);
}

// function to update the counter
function updateInteractionCount() {
    let count = parseInt(sessionStorage.getItem("interactionCount"));
    count++;
    sessionStorage.setItem("interactionCount", count);
    console.log(`Interaction count: ${count}`);
}

// Click events added to the counter
document.getElementById("saveButton").addEventListener("click", updateInteractionCount);
document.getElementById("clearButton").addEventListener("click", updateInteractionCount);


// option to clear page content by deleting information from local storage
document.getElementById("clearButton").addEventListener("click", () => {
    localStorage.clear();
    displayData();
});
