document.addEventListener('DOMContentLoaded', () => {
    // Handle "Baca Selengkapnya" button click
    const readMoreButtons = document.querySelectorAll('.readMore');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Fitur ini belum tersedia. Silakan kembali lagi!');
        });
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formMessage = document.getElementById('formMessage');
        formMessage.textContent = 'Pesan Anda telah terkirim! Terima kasih!';
        contactForm.reset(); // Reset the form fields
    });
});
