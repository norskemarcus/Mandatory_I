

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


const scrollToTopButton = document.getElementById('scrollToTopButton');

scrollToTopButton.addEventListener('click', scrollToTop);

// Show the button when the user scrolls down a certain amount
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 100) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});



// Her forsøger jeg at få html op ved fejl route...

// const urlParams = new URLSearchParams(window.location.search);
// const message = urlParams.get('message');

// if (message) {
//   alert(decodeURIComponent(message));
// }