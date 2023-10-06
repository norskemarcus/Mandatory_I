
const signInButton = document.getElementById('signInModalButton');
signInButton.addEventListener('click', handleSignIn);

const signOutButton = document.getElementById('signOutButton');
signOutButton.addEventListener('click', handleSignOut);


$('#signInModal').on('hidden.bs.modal', function () {
   document.getElementById('email').value = '';
   document.getElementById('password').value = '';
   
  const modalMessageDiv = document.getElementById('modalMessageDiv');
  if (modalMessageDiv) {
    showMessage('reset', '', 'modalMessageDiv', true); 
}
});


function handleSignIn() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // dummy logic for demonstration
  if (email === "test1@gmail.com" && password === "test1234") {

    showMessage('success', 'Login successful!', 'modalMessageDiv');
    console.log('Login successful!');
    updateStatus('Logged in as: ' + email);
    document.getElementById('signInButton').style.display = 'none'; 
    document.getElementById('loggedInStatus').style.display = 'block'; 
    
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
  document.getElementById('loggedInStatus').style.display = 'block'; 
}


function handleSignOut() {
  //  sign-out logic 
  //  clear the user's session or token
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



function calculateDaysUntil(targetDate) {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

// måneder i JavaScript er 0-indekseret, så november er 10
const currentDate = new Date();
const dec1Date = new Date(currentDate.getFullYear(), 11, 1); 
const christmasDate = new Date(currentDate.getFullYear(), 11, 24); 

const daysUntilDec1 = calculateDaysUntil(dec1Date);

document.getElementById('countdown-to-dec1').textContent = `Dage til 1. december: ${daysUntilDec1}`;

const daysUntilChristmas = calculateDaysUntil(christmasDate);
document.getElementById('countdown-to-christmas').textContent = `Dage til julaften: ${daysUntilChristmas}`;
