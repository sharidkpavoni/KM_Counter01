// Selectors
const addKmButton = document.getElementById('button1');
const kmCounter = document.querySelector('.km-counter')
// Event Listeners
addKmButton.addEventListener('click',switchToAddKmScreen);


// Functions
function switchToAddKmScreen(event) {
    kmCounter.classList.toggle('switched1');
}