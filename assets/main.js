const dropdownButton = document.getElementById('dropdownButton');
const fullScreenDropdown = document.getElementById('fullScreenDropdown');

// Open the dropdown
dropdownButton.addEventListener('click', () => {
    fullScreenDropdown.classList.toggle('hidden');
});

// Optional: Close the dropdown if user clicks outside
window.addEventListener('click', function(event) {
    if (!dropdownButton.contains(event.target) && !fullScreenDropdown.contains(event.target)) {
        fullScreenDropdown.classList.add('hidden');
    }
});

