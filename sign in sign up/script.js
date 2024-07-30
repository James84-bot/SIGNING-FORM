document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    function toggleForm(side) {
        console.log('Function called with side:', side);
        const signUpForm = document.getElementById('signUpForm');
        const signInForm = document.getElementById('signInForm');

        if (side === 'signUp') {
            signUpForm.style.display = 'flex';
            signInForm.style.display = 'none';
        } else if (side === 'signIn') {
            signInForm.style.display = 'flex';
            signUpForm.style.display = 'none';
        }
    }

    function submitForm(side) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let emailField;

        if (side === 'signUp') {
            emailField = document.getElementById('signUpEmail');
        } else if (side === 'signIn') {
            emailField = document.getElementById('signInEmail');
        }

        if (emailField && !emailRegex.test(emailField.value)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert(`${side} form submitted.`);
    }

    function forgotPassword() {
        alert('Forgotten password functionality not implemented yet.');
    }

    // Expose functions to the global scope
    window.toggleForm = toggleForm;
    window.submitForm = submitForm;
    window.forgotPassword = forgotPassword;
});
