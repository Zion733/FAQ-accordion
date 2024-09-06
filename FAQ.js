document.addEventListener('DOMContentLoaded', function() {
    const faqHeaders = document.querySelectorAll('.faq-header');

    faqHeaders.forEach(header => {
        // Function to toggle content visibility
        const toggleContent = () => {
            const icon = header.querySelector('.faq-icon');
            const content = header.nextElementSibling;
            const isExpanded = content.classList.contains('show');

            // Update the icon based on current state
            icon.src = isExpanded ? './assets/images/icon-plus.svg' : './assets/images/icon-minus.svg';
            icon.alt = isExpanded ? 'Expand' : 'Collapse';

            // Toggle content visibility
            if (isExpanded) {
                content.classList.remove('show');
            } else {
                content.classList.add('show');
            }
        };

        // Add event listener to header and its child elements
        header.addEventListener('click', toggleContent);

        // Ensure the <h3> element within the header also triggers the toggle
        const title = header.querySelector('.faq-title');
        title.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent triggering the parent click event
            toggleContent();
        });
    });
});

