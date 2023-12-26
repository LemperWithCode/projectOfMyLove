

// Function to handle login form submission
function handleLogin(event) {
    event.preventDefault();
  
    const username = document.getElementById('user').value;
    const password = document.getElementById('password').value;
  
    const userInfo = JSON.parse(localStorage.getItem(username));
  
    if (!userInfo) {
      alert('Username not found. Please register first.');
      return;
    }
  
    if (userInfo.password !== password) {
      alert('Incorrect password. Please try again.');
      return;
    }
  
    // Successful login - Redirect to dashboard
    window.location.href = '../home/home.html'; 
  }
  
  // Attach the handleLogin function to the form's submit event
  document.querySelector('form').addEventListener('submit', handleLogin);
  