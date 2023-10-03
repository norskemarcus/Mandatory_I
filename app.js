

import express from 'express';
const app = express();
app.use(express.static('public'));

import {readPage, renderPage } from "./util/templateEngine.js"


const frontPage = readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = renderPage(frontPage, {
  tabTitle:"Kodekilden",
  cssLinks: `<link rel="stylesheet" href="../assets/css/style_new.css">`
});

app.get('/', (req, res) => {
  res.send(frontpagePage);
});

//  1.intro -------------------------------------------------------------------------

app.get('/klient-server', (req, res) => {
 
});


app.get('/variabler', (req, res) => {
//  res.sendFile(path.resolve('public/1._intro/variabler_scope.html'));
});


app.get('/datatyper', (req, res) => {
 // res.sendFile(path.resolve('public/1._intro/datatyper.html'));
});

app.get('/datastrukturer', (req, res) => {
 // res.sendFile(path.resolve('public/1._intro/datastrukturer.html'));
});

app.get('/clean-code', (req, res) => {
 // res.sendFile(path.resolve('public/1._intro/clean_code.html'));
});

// 2.javascript  -----------------------------------------------------------------------------


app.get('/funktioner', (req, res) => {
 // res.sendFile(path.resolve('public/2._javascript/funktioner.html'));
});

app.get('/callback-arrow', (req, res) => {
 // res.sendFile(path.resolve('public/2._javascript/callback_arrow.html'));
});


app.get('/fetch', (req, res) => {
//  res.sendFile(path.resolve('public/2._javascript/fetch.html'));
});


app.get('/node', (req, res) => {
 // res.sendFile(path.resolve('public/3._node/node.html'));
});


app.get('/nodemon', (req, res) => {
//  res.sendFile(path.resolve('public/3._node/nodemon.html'));
});



// -------------------------------------------------------------------------------------------------

app.get('/express', (req, res) => {
//  res.sendFile(path.resolve('public/4._express/express.html'));
});

app.get('/installere-express', (req, res) => {
 // res.sendFile(path.resolve('public/4._express/express_projekt.html'));
});


// ---------------------------------------------------------------------------------------------

//const PORT = process.env.PORT ? Number(process.env.PORT) || 8080:;
const PORT = Number(process.env.PORT);
app.listen(PORT, error => {
  if (error) {
    console.log('Server failed to start', error);
    return;
  }
  console.log('Server is running on port', PORT);
});
