document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const infoBox = document.querySelector('.info-box');

    slider.addEventListener('click', function(event) {
        // Toggle the paused class
        this.classList.toggle('paused');
        
        // Show or hide the info box
        if (infoBox.style.display === 'none' || infoBox.style.display === '') {
            infoBox.style.display = 'block';
        } else {
            infoBox.style.display = 'none';
        }
        
        // Check if the clicked element is an image item
        if (event.target.closest('.item')) {
            const info = event.target.closest('.item').getAttribute('data-info');
            console.log('Info:', info); // Log info for debugging
            infoBox.textContent = info; // Set the text content
        } else {
            infoBox.textContent = ''; // Clear text if no item is clicked
        }
    });
});
