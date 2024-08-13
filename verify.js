const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const enteredEmail = emailInput.value.trim();
  const enteredPassword = passwordInput.value.trim();

  // Simulate user credentials (replace with server-side verification)
  const validEmail = 'Nagaraj@gmail.com';
  const validPassword = '20032003';

  if (enteredEmail === validEmail && enteredPassword === validPassword) {
    // Login successful
    const rememberMe = document.getElementById('rememberMe').checked;

    if (rememberMe) {
      // Store login state in local storage (implement securely)
      localStorage.setItem('isLoggedIn', true);
      // Implement logic for persistent login (e.g., JWT or server-side session management)
    }

    window.location.href = 'https://nagportfolio.netlify.app';  // Redirect to target page
  } else {
    // Login failed
    errorMessage.textContent = 'Invalid email or password.';
    errorMessage.style.color = 'red';
  }
});
