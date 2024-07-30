document.addEventListener('DOMContentLoaded', () => {
    // Select all submit review buttons
    const submitButtons = document.querySelectorAll('.submit-review');

    submitButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the closest book container to this button
            const bookContainer = this.closest('.book');
            
            // Get the textarea for review input
            const textarea = bookContainer.querySelector('textarea');
            const reviewText = textarea.value.trim();

            if (reviewText) {
                // Create a new review element
                const newReview = document.createElement('div');
                newReview.classList.add('review');
                newReview.innerHTML = `<p><strong>You:</strong> ${reviewText}</p>`;
                
                // Append the new review to the reviews section
                const reviewsSection = bookContainer.querySelector('.reviews');
                reviewsSection.insertBefore(newReview, reviewsSection.querySelector('textarea'));

                // Clear the textarea after submission
                textarea.value = '';
            } else {
                alert('Please enter a review before submitting.');
            }
        });
    }); 
});
