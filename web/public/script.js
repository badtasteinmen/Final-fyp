// Dummy login credentials
const validEmail = "user@example.com";
const validPassword = "password123";

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Login Form Submission
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#container .sign-in form");
    const errorMessage = document.getElementById("error-message");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Validate credentials
            if (email === validEmail && password === validPassword) {
                // Redirect to index.html after successful login
                window.location.href = "index.html";
            } else {
                // Show error message for invalid credentials
                errorMessage.style.display = "block";
                errorMessage.textContent = "Invalid email or password.";
            }
        });
    }
});

// Logout Functionality
document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.querySelector("a.button[href='login.html']");
    if (logoutButton) {
        logoutButton.addEventListener("click", (e) => {
            e.preventDefault();
            // Redirect to login page
            window.location.href = "login.html";
        });
    }
});
