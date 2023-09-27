// event listener to the Sign In button
const signInButton = document.getElementById('signInModalButton');
signInButton.addEventListener('click', handleSignIn);

// event listener to the Sign Out button
const signOutButton = document.getElementById('signOutButton');
signOutButton.addEventListener('click', handleSignOut);


// Event listener to detect when the modal is hidden
$('#signInModal').on('hidden.bs.modal', function () {
   document.getElementById('email').value = '';
   document.getElementById('password').value = '';
   
  // Clear the modal message when the modal is hidden
  const modalMessageDiv = document.getElementById('modalMessageDiv');
  if (modalMessageDiv) {
    showMessage('reset', '', 'modalMessageDiv', true); 
}
});


function handleSignIn() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Perform authentication (dummy logic for demonstration)
  if (email === "test1@gmail.com" && password === "test1234") {

    showMessage('success', 'Login successful!', 'modalMessageDiv');
    console.log('Login successful!');
    updateStatus('Logged in as: ' + email);
    document.getElementById('signInButton').style.display = 'none'; // Hide Sign In button
    document.getElementById('loggedInStatus').style.display = 'block'; // Show status and Sign Out button
    
     // Hide the modal after successful login
     $('#signInModal').modal('hide');
  } else {
    showMessage('error', 'Invalid email or password. Please try again.', 'modalMessageDiv');
    console.log('Invalid email or password');
  }
}

function showMessage(type, message, targetElementId, reset = false) {
  const messageDiv = document.getElementById(targetElementId);

  if (!messageDiv) {
    console.error(`Element with ID '${targetElementId}' not found.`);
    return;
  }


  if (reset) {
    messageDiv.style.backgroundColor = '';
    messageDiv.style.borderColor = '';
    messageDiv.style.color = '';
    messageDiv.textContent = '';
  } else {
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
}


function updateStatus(statusText) {
  const statusElement = document.getElementById('status');
  statusElement.textContent = statusText;
  document.getElementById('loggedInStatus').style.display = 'block'; // Display the status div
}


function handleSignOut() {
  // Implement sign-out logic here
  // This is where you would clear the user's session or token
  document.getElementById('signInButton').style.display = 'block'; 
  document.getElementById('loggedInStatus').style.display = 'none'; 

 const statusElement = document.getElementById('status');
  if (statusElement) {
    showMessage('reset', '', 'status', true);
  }

  const modalMessageDiv = document.getElementById('modalMessageDiv');
  if (modalMessageDiv) {
    showMessage('reset', '', 'modalMessageDiv', true); 
  }
}


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