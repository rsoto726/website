document.addEventListener("DOMContentLoaded", function() {
    // Music Control
    const audio = document.getElementById('background-music');
    const toggleBtn = document.getElementById('music-toggle');

    // Retrieve the audio state from localStorage (if available)
    const musicState = localStorage.getItem('musicState') || 'playing';
    if (musicState === 'paused') {
        audio.pause();
        toggleBtn.textContent = 'Play Music';
    } else {
        audio.play();
        toggleBtn.textContent = 'Pause Music';
    }

    // Add event listener to the toggle button
    toggleBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            localStorage.setItem('musicState', 'playing'); // Save the state to localStorage
            toggleBtn.textContent = 'Pause Music';
        } else {
            audio.pause();
            localStorage.setItem('musicState', 'paused'); // Save the state to localStorage
            toggleBtn.textContent = 'Play Music';
        }
    });

    // Form Handling (just client-side validation for now)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission for now
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // For demonstration purposes, log the data to the console
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Here you could send the form data to a server if needed
        alert('Form submitted successfully!');

        // Reset the form after submission
        contactForm.reset();
    });
});
