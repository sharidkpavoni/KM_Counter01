// Selectors
const confirmBtn = document.getElementById('confirm-btn');
const inputBox = document.querySelector('.km-input');
const kmNumber = document.querySelector('.km-number');
// Setting initial autonomy
var totalAutonomy = 0;
kmNumber.innerHTML = totalAutonomy;
// Event Listeners
confirmBtn.addEventListener('click', increaseAutonomy);

// Functions

// Calculate extra autonomy and update total autonomy
function increaseAutonomy(e) {
    // Getting the LITRES introduced by the user
    var litres = inputBox.value;
    // Calculating the car's extra AUTONOMY
    var extraAutonomy = litres*10.5;
    /* Test */
    console.log("Extra autonomy: " + extraAutonomy);
    totalAutonomy += extraAutonomy;
    updateAutonomy();
}

// Update current total autonomy
function updateAutonomy() {
    kmNumber.innerHTML = totalAutonomy;
}
// Save the current autonomy to local storage
/* function saveAutonomy() {
    let autonomy;
    if (localStorage.getItem("autonomy") === null) {
        autonomy = [];
    } else {
        autonomy = JSON.parse(localStorage.getItem("autonomy"));
    }
} */