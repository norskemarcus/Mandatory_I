
// Backend med node

// const express = require('express');
import express from 'express';
const app = express();
app.use(express.static('public'));


//import hljs from 'highlight.js/lib/core'; // Core library
//import javascript from 'highlight.js/lib/languages/javascript'; // Example language

//import 'highlight.js/styles/default.css'; // Example style, choose a different style if you prefer

// Register the language(s) you want to use
//hljs.registerLanguage('javascript', javascript);
//hljs.registerLanguage('css', css);
//hljs.registerLanguage('html', html);

import path from 'path'; // eksistererer internt i node, men pga effektivitet skal man importere det
// kan ikke længere bruge dette: console.log(__dirname); // les fejlbesked

app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/frontpage.html'));
});

const PORT = 8080;
app.listen(8080, error => {
  if (error) {
    console.log('Server failed to start', error);
    return;
  }
  console.log('Server is running on port', PORT);
});
