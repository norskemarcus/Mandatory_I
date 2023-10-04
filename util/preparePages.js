import {readPage, renderPage } from "./templateEngine.js"


const frontPage = readPage("./public/pages/frontpage/frontpage.html");
export const frontpagePage = renderPage(frontPage, {
  tabTitle:"Kodekilden",
  cssLinks: `<link rel="stylesheet" href="../assets/css/style_new.css">`
});

// 1._intro ==========================================================================

const clientServer = readPage("./public/pages/1._intro/klient_server.html");
export const clientServerPage = renderPage(clientServer, {
  tabTitle: "Klient-server-modellen",
  cssLinks: `<link rel="stylesheet" href="../assets/css/style_new.css">
  <link rel="stylesheet" href="./pages/1._intro/intro.css">`
});


const variablerScope = readPage("./public/pages/1._intro/variabler_scope.html");
export const variablerScopePage = renderPage(variablerScope, {
  tabTitle: "Variabler og scope",
  cssLinks: `<link rel="stylesheet" href="../assets/css/style_new.css">
  <link rel="stylesheet" href="./pages/1._intro/intro.css">
  <link rel="stylesheet" href="../hightlight/styles/atom-one-dark.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">`
});


const datatypes = readPage("./public/pages/1._intro/datatyper.html");
export const datatypesPage = renderPage(datatypes, {
  tabTitle: "Datatyper",
  cssLinks: `<link rel="stylesheet" href="../assets/css/style_new.css">
  <link rel="stylesheet" href="./pages/1._intro/intro.css">
  <link rel="stylesheet" href="../hightlight/styles/atom-one-dark.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">`
});


const datastructure = readPage("./public/pages/1._intro/datastrukturer.html");
export const datastructurePage = renderPage(datastructure, {
  tabTitle: "Datastrukturer",
  cssLinks: `<link rel="stylesheet" href="../assets/css/style_new.css">
  <link rel="stylesheet" href="./pages/1._intro/intro.css">
  <link rel="stylesheet" href="../hightlight/styles/atom-one-dark.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">`
});


const cleancode = readPage("./public/pages/1._intro/clean_code.html");
export const cleancodePage = renderPage(cleancode, {
  tabTitle: "Clean code",
  cssLinks: `<link rel="stylesheet" href="../assets/css/style_new.css">
  <link rel="stylesheet" href="./pages/1._intro/intro.css">`
});

// 2._javascript =============================================================

const functions = readPage("./public/pages/2._javascript/funktioner.html");
export const functionsPage = renderPage(functions, {
  tabTitle: "Funktioner",
  cssLinks: `<link rel="stylesheet" href="../assets/css/style_new.css">
  <link rel="stylesheet" href="./pages/2._javascript/javascript.css">
  <link rel="stylesheet" href="../hightlight/styles/atom-one-dark.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  `
});


const arrowCallback = readPage("./public/pages/2._javascript/callback_arrow.html");
export const arrowCallbackPage = renderPage(arrowCallback, {
  tabTitle: "Arrow og callback-funktioner",
  cssLinks: `<link rel="stylesheet" href="../assets/css/style_new.css">
  <link rel="stylesheet" href="./pages/2._javascript/javascript.css">
  <link rel="stylesheet" href="../hightlight/styles/atom-one-dark.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">`
});



const fetch = readPage("./public/pages/2._javascript/fetch.html");
export const fetchPage = renderPage(fetch, {
  tabTitle: "Fetch",
  cssLinks: `<link rel="stylesheet" href="../assets/css/style_new.css">
  <link rel="stylesheet" href="./pages/2._javascript/javascript.css">
  <link rel="stylesheet" href="../hightlight/styles/atom-one-dark.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">`
});


// Mangler: event loop og callbacks vs promises cs async await


// 3._node ==========================================================================


const node = readPage("./public/pages/3._node/node.html");
export const nodePage = renderPage(node, {
  tabTitle: "Node",
  cssLinks: `<link rel="stylesheet" href="../assets/css/style_new.css">
  <link rel="stylesheet" href="./pages/2._javascript/javascript.css">
  <link rel="stylesheet" href="../hightlight/styles/atom-one-dark.min.css">`
});


const nodemon = readPage("./public/pages/3._node/nodemon.html");
export const nodemonPage = renderPage(nodemon, {
  tabTitle: "Node",
  cssLinks: `<link rel="stylesheet" href="../assets/css/style_new.css">
  <link rel="stylesheet" href="./pages/2._javascript/javascript.css">
  <link rel="stylesheet" href="./pages/3._node/nodestyle.css">
  <link rel="stylesheet" href="../hightlight/styles/atom-one-dark.min.css">`
});




// 4._express =============================================================================

const express = readPage("./public/pages/4._express/express.html");
export const expressPage = renderPage(express, {
  tabTitle: "Express",
  cssLinks: `<link rel="stylesheet" href="../assets/css/style_new.css">
  <link rel="stylesheet" href="./pages/2._javascript/javascript.css">
  <link rel="stylesheet" href="../hightlight/styles/atom-one-dark.min.css">`
});



const expressProject = readPage("./public/pages/4._express/express_projekt.html");
export const expressProjectPage = renderPage(expressProject, {
  tabTitle: "Indstallere express",
  cssLinks: `<link rel="stylesheet" href="../assets/css/style_new.css">
  <link rel="stylesheet" href="./pages/2._javascript/javascript.css">
  <link rel="stylesheet" href="../hightlight/styles/atom-one-dark.min.css">`
});



const middleware = readPage("./public/pages/4._express/middleware.html");
export const middlewarePage = renderPage(middleware, {
  tabTitle: "Middleware",
  cssLinks: `<link rel="stylesheet" href="../assets/css/style_new.css">
  <link rel="stylesheet" href="./pages/2._javascript/javascript.css">
  <link rel="stylesheet" href="../hightlight/styles/atom-one-dark.min.css">`
});
