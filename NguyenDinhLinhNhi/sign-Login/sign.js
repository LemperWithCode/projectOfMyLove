// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    const lastName = document.getElementById('firstname').value;
    const name = document.getElementById('lastname').value;
    const username = document.getElementById('UserName').value; // Thay đổi phoneNumber thành username
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (password.length > 16 || password.length < 6) {
        document.getElementById('password').value = ''; // Clear the password field
        alert('Password must be between 6 and 16 characters');
        return;
    }

    if (username.length < 8) {
        alert('Username must be at least 8 characters long');
        return;
    }

    if (localStorage.getItem(username)) {
        alert('This username is already in use');
        return;
    } else if(localStorage.getItem(name)){
        alert('This name is already in use')
    }

    const userInfo = {
        lastName: lastName,
        name: name,
        username: username, 
        email: email,
        password: password
    };

    localStorage.setItem(username, JSON.stringify(userInfo));

    // Redirect to another page after successful registration
    window.location.href = '../home/home.html';
}

// Attach the handleSubmit function to the form's submit event
document.querySelector('form').addEventListener('submit', handleSubmit);
