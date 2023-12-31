
  
  // Function to create and append the sidebar
  function createSidebar() {
    const sidebarHTML = /*html*/ `
    <!-- Sidebar -->
    <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div class="position-sticky">
        <!-- Mobile menu icon -->
        <a href="javascript:void(0);" class="icon" id="mobileMenuIcon">
          <i class="fa fa-bars"></i>
        </a>  
        <!-- Sidebar menu (visible on larger screens) -->
        <ul class="nav flex-column d-none d-md-block mt-3">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="section1Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Introduktion
            </a>
            <ul class="dropdown-menu" aria-labelledby="section1Dropdown">
              <li><a class="dropdown-item" href="/klient-server">Klient-server-modellen</a></li>
              <li><a class="dropdown-item" href="/variabler">Variabler og Scope</a></li>
              <li><a class="dropdown-item" href="/datatyper">Datatyper</a></li>
              <li><a class="dropdown-item" href="/datastrukturer">Datastrukturer</a></li>
              <li><a class="dropdown-item" href="/clean-code">Clean Code</a></li>
        
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="section2Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              JavaScript 
            </a>
            <ul class="dropdown-menu" aria-labelledby="section2Dropdown">
              <li><a class="dropdown-item" href="/funktioner">Funktioner</a></li>
              <li><a class="dropdown-item" href="/callback-arrow">Arrow og callback-funktioner</a></li>
              <li><a class="dropdown-item" href="/fetch">Fetch</a></li>
              <li><a class="dropdown-item" href="/async-await">Async/Await</a></li>
              <li><a class="dropdown-item" href="/event-loop">Event Loop</a></li>
              <li><a class="dropdown-item" href="/callbacks-vs-promises-vs-async-await">Callbacks vs. Promises vs. Async/Await</a></li>
            
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="section3Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Node.js
            </a>
            <ul class="dropdown-menu" aria-labelledby="section3Dropdown">
              <li><a class="dropdown-item" href="/node">Node.js</a></li>
              <li><a class="dropdown-item" href="/nodemon">Nodemon</a></li>
              <li><a class="dropdown-item" href="/package-managers-npm">Package Managers (npm)</a></li>
              <li><a class="dropdown-item" href="/package-json-og-meta-information">Package.json og meta information</a></li>
              <li><a class="dropdown-item" href="/entry-point-package-json">Entry Point (package.json)</a></li>
              <li><a class="dropdown-item" href="/require-og-import">Require og Import</a></li>
              <li><a class="dropdown-item" href="/es-modules">ES Modules</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="section4Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Express
            </a>
            <ul class="dropdown-menu" aria-labelledby="section4Dropdown">
              <li><a class="dropdown-item" href="/express">Express.js</a></li>
              <li><a class="dropdown-item" href="/installere-express">Installere Express</a></li>
              <li><a class="dropdown-item" href="/lave-en-express-app">Lave en Express App</a></li>
              <li><a class="dropdown-item" href="/middleware">Middleware</a></li>
              <li><a class="dropdown-item" href="/semantic-versioning">Semantic Versioning</a></li>
              <li><a class="dropdown-item" href="/gitignore">Gitignore</a></li>
            </ul>
          </li>
         
            <ul class="dropdown-menu" aria-labelledby="section5Dropdown">
            
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="section6Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Frontend
            </a>
            <ul class="dropdown-menu" aria-labelledby="section6Dropdown">
              <li><a class="dropdown-item" href="/html">HTML</a></li>
              <li><a class="dropdown-item" href="/css">CSS</a></li>
              <li><a class="dropdown-item" href="/javascript-for-frontend">JavaScript for frontend</a></li>
              <li><a class="dropdown-item" href="/document-object-model-dom">Document Object Model (DOM)</a></li>
              <li><a class="dropdown-item" href="/innerhtml-og-cross-site-scripting">InnerHTML og Cross-Site Scripting</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="section7Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Deployment/library
            </a>
            <ul class="dropdown-menu" aria-labelledby="section7Dropdown">
              <li><a class="dropdown-item" href="/vercel">Vercel</a></li>
              <li><a class="dropdown-item" href="/highlight">Highlight</a></li>
              <li><a class="dropdown-item" href="/inline-vs-external-css">Inline vs. External CSS</a></li>
              <li><a class="dropdown-item" href="/circular-dependency">Circular Dependency</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="section8Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Extra
            </a>
            <ul class="dropdown-menu" aria-labelledby="section8Dropdown">
              <li><a class="dropdown-item" href="/in-depth-research-on-a-chosen-topic">In-Depth Research on a Chosen Topic</a></li>
              <li><a class="dropdown-item" href="/learning-something-new-and-documenting-it">Learning Something New and Documenting It</a></li>
            </ul>
          </li>
       
        </ul>

    `;
  

    // Find the placeholder element and replace its content with the sidebar HTML
    const sidebarPlaceholder = document.getElementById("sidebar-placeholder");
    sidebarPlaceholder.innerHTML = sidebarHTML;

  }

// Call the function to create the sidebar
createSidebar();


