

import express from 'express';
const app = express();
app.use(express.static('public'));

import {frontpagePage, clientServerPage, variablerScopePage, datatypesPage,
   datastructurePage, cleancodePage, functionsPage, arrowCallbackPage, fetchPage,
    nodePage, nodemonPage, expressPage, expressProjectPage, middlewarePage} from "./util/preparePages.js"


app.get('/', (req, res) => {
  res.send(frontpagePage);
});

//  1.intro -------------------------------------------------------------------------

app.get('/klient-server', (req, res) => {
 res.send(clientServerPage);
});

app.get('/variabler', (req, res) => {
  res.send(variablerScopePage);
});

app.get('/datatyper', (req, res) => {
 res.send(datatypesPage);
});

app.get('/datastrukturer', (req, res) => {
 res.send(datastructurePage);
});

app.get('/clean-code', (req, res) => {
 res.send(cleancodePage);
});


// 2.javascript  -----------------------------------------------------------------------------


app.get('/funktioner', (req, res) => {
  res.send(functionsPage);
});

app.get('/callback-arrow', (req, res) => {
 res.send(arrowCallbackPage);
});


app.get('/fetch', (req, res) => {
  res.send(fetchPage);
});


app.get('/node', (req, res) => {
 res.send(nodePage);
});


app.get('/nodemon', (req, res) => {
 res.send(nodemonPage);
});

// Mangler her: Package managers, package.json og meta info, entry point, require og import


// -------------------------------------------------------------------------------------------------

app.get('/express', (req, res) => {
  res.send(expressPage);
});

app.get('/installere-express', (req, res) => {
 res.send(expressProjectPage);
});


app.get('/middleware', (req, res) => {
  res.send(middlewarePage);
 });
 


// ---------------------------------------------------------------------------------------------


//const PORT = process.env.PORT ? Number(process.env.PORT) || 8080;
const PORT = Number(process.env.PORT);
app.listen(PORT, error => {
  if (error) {
    console.log('Server failed to start', error);
    return;
  }
  console.log('Server is running on port', PORT);
});
