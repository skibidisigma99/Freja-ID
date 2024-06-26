// password.js
function checkPassword() {
    const enteredPassword = document.getElementById('password-input').value;
    const correctPassword = 'your_password'; // Replace with your desired password

    if (enteredPassword === correctPassword) {
        localStorage.setItem('authenticated', 'true');
        window.location.href = 'index.html'; // Redirect to your main app page
    } else {
        alert('Incorrect password. Please try again.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('authenticated') !== 'true') {
        window.location.href = 'password.html'; // Redirect to password page if not authenticated
    }
});
