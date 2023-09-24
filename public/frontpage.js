



function handleSignIn() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Perform authentication (dummy logic for demonstration)
  if (email === 'test@example.com' && password === 'test') {
      showMessage('success', 'Login successful!');
  } else {
      showMessage('error', 'Invalid email or password. Please try again.');
  }
}

// Function to display messages in the message div
function showMessage(type, message) {
  const messageDiv = document.getElementById('messageDiv');
  messageDiv.textContent = message;

  if (type === 'success') {
      messageDiv.style.backgroundColor = '#d4edda';
      messageDiv.style.borderColor = '#c3e6cb';
      messageDiv.style.color = '#155724';
  } else if (type === 'error') {
      messageDiv.style.backgroundColor = '#f8d7da';
      messageDiv.style.borderColor = '#f5c6cb';
      messageDiv.style.color = '#721c24';
  }

  messageDiv.style.display = 'block'; 
}

// Add a click event listener to the Sign In button
const signInButton = document.getElementById('signInButton');
signInButton.addEventListener('click', handleSignIn);



/* 

const mobileMenuIcon = document.getElementById("mobileMenuIcon");
mobileMenuIcon.addEventListener("click", toggleMobileMenu);

// Function to toggle the mobile menu
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("show");
}


function generateMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.innerHTML = ""; // Clear the existing content

  // Clone and append each main menu item to the mobile menu
  const mainMenuItems = document.querySelectorAll(".nav-item.dropdown");
  mainMenuItems.forEach((menuItem) => {
    const mobileMenuItem = menuItem.cloneNode(true);
    mobileMenuItem.classList.add("mobile-menu-item");
    mobileMenu.appendChild(mobileMenuItem);
  });
} */