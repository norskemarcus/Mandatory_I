
// Dette er frontend

// Prevent cross site scripting if using innerHTML

function escapeHTML(string) {
  if (!string) return '';

  return string.replaceAll(`&`, '&amp;').replaceAll(`>`, '&gt;').replaceAll(`<`, '&lt;').replaceAll(`"`, '&quot;').replaceAll(`/`, '&#039;');
}
 


// Use Highlight.js to Highlight Code:
// Assuming `code` contains the code snippet you want to highlight
//const highlightedCode = hljs.highlight('javascript', code).value;


// sidebar.js

// Function to create and append the sidebar
function createSidebar() {
  const sidebarHTML = /*html*/ `
  <!-- Sidebar -->
  <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div class="position-sticky">
          <ul class="nav flex-column">
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="section1Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Introduktion
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="section1Dropdown">
                      <li><a class="dropdown-item" href="#">Klient-server-modellen</a></li>
                      <li><a class="dropdown-item" href="#">Variabler og Scope</a></li>
                      <li><a class="dropdown-item" href="#">Datatyper</a></li>
                      <li><a class="dropdown-item" href="#">Datastrukturer</a></li>
                  </ul>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="section2Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      JavaScript 
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="section2Dropdown">
                      <li><a class="dropdown-item" href="#">Konkatinering og Type Coercion</a></li>
                      <li><a class="dropdown-item" href="#">Funktioner</a></li>
                      <li><a class="dropdown-item" href="#">Callback funktioner</a></li>
                      <li><a class="dropdown-item" href="#">Call Stack og Hoisting</a></li>
                      <li><a class="dropdown-item" href="#">Clean Code</a></li>
                      <li><a class="dropdown-item" href="#">Kode konventioner</a></li>
                      <li><a class="dropdown-item" href="#">ESLint</a></li>
                  </ul>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="section3Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Node.js
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="section3Dropdown">
                      <li><a class="dropdown-item" href="#">Introduktion til Node.js</a></li>
                      <li><a class="dropdown-item" href="#">Bruge Node.js</a></li>
                      <li><a class="dropdown-item" href="#">Nodemon</a></li>
                      <li><a class="dropdown-item" href="#">Package Managers (npm)</a></li>
                      <li><a class="dropdown-item" href="#">Package.json og meta information</a></li>
                      <li><a class="dropdown-item" href="#">Entry Point (package.json)</a></li>
                      <li><a class="dropdown-item" href="#">Require og Import</a></li>
                      <li><a class="dropdown-item" href="#">ES Modules</a></li>
                  </ul>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="section4Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Express
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="section4Dropdown">
                      <li><a class="dropdown-item" href="#">Intro til Express.js</a></li>
                      <li><a class="dropdown-item" href="#">Installere Express</a></li>
                      <li><a class="dropdown-item" href="#">Lave en Express App</a></li>
                      <li><a class="dropdown-item" href="#">Routing</a></li>
                      <li><a class="dropdown-item" href="#">Middleware</a></li>
                      <li><a class="dropdown-item" href="#">REST API Design</a></li>
                      <li><a class="dropdown-item" href="#">Request og Response Objects</a></li>
                      <li><a class="dropdown-item" href="#">Semantic Versioning</a></li>
                      <li><a class="dropdown-item" href="#">Gitignore</a></li>
                  </ul>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="section5Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Asynkront js
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="section5Dropdown">
                      <li><a class="dropdown-item" href="fetch.html">Fetch</a></li>
                      <li><a class="dropdown-item" href="#">Async/Await</a></li>
                      <li><a class="dropdown-item" href="#">Event Loop</a></li>
                      <li><a class="dropdown-item" href="#">Callbacks vs. Promises vs. Async/Await</a></li>
                  </ul>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="section6Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Frontend
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="section6Dropdown">
                      <li><a class="dropdown-item" href="#">HTML</a></li>
                      <li><a class="dropdown-item" href="#">CSS</a></li>
                      <li><a class="dropdown-item" href="#">JavaScript for frontend</a></li>
                      <li><a class="dropdown-item" href="#">Document Object Model (DOM)</a></li>
                      <li><a class="dropdown-item" href="#">InnerHTML og Cross-Site Scripting</a></li>
                  </ul>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="section7Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Deployment/library
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="section7Dropdown">
                      <li><a class="dropdown-item" href="#">Vercel</a></li>
                      <li><a class="dropdown-item" href="#">Highlight</a></li>
                      <li><a class="dropdown-item" href="#">Inline vs. External CSS</a></li>
                      <li><a class="dropdown-item" href="#">Circular Dependency</a></li>
                  </ul>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="section8Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Extra
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="section8Dropdown">
                      <li><a class="dropdown-item" href="#">In-Depth Research on a Chosen Topic</a></li>
                      <li><a class="dropdown-item" href="#">Learning Something New and Documenting It</a></li>
                  </ul>
              </li>
              <li><hr class="dropdown-divider"></li>
              <a class="nav-link dropdown-toggle" href="#" id="adminSection" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Admin
              </a>
          </ul>
      </div>
  </nav>
  `;

  // Find the placeholder element and replace its content with the sidebar HTML
  const sidebarPlaceholder = document.getElementById("sidebar-placeholder");
  sidebarPlaceholder.innerHTML = sidebarHTML;
}

// Call the function to create the sidebar
createSidebar();








// dropdown menus with js
/* document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
      const submenu = dropdown.querySelector('.submenu');
      const span = dropdown.querySelector('span');

      span.addEventListener('click', () => {
          submenu.classList.toggle('active');
      });
  });
});
 */