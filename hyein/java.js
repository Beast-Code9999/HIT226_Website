document.addEventListener('DOMContentLoaded', () => {
    // Find all like buttons
    const likeButtons = document.querySelectorAll('.card__like');

    // Attach click event listeners to each like button
    likeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Find the like count span within the clicked like button
            const likeCountSpan = button.querySelector('.like-count');
            // Parse the current like count to an integer and increment it
            const currentCount = parseInt(likeCountSpan.textContent, 10);
            likeCountSpan.textContent = currentCount + 1;

            // Prevent the event from propagating to the card click event
            event.stopPropagation();
        });
    });

    // Find all cards
    const cards = document.querySelectorAll('.card');

    // Attach click event listeners to each card
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Toggle the clicked class on the card
            card.classList.toggle('clicked');
        });
    });
});