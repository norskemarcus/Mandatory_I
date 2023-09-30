
// Backend med node

// const express = require('express');
import express from 'express';
const app = express();
app.use(express.static('public'));


import path from 'path'; // eksistererer internt i node, men pga effektivitet skal man importere det
// kan ikke længere bruge dette: console.log(__dirname); // les fejlbesked

app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/frontpage.html'));
});


app.get('/klient-server', (req, res) => {
  res.sendFile(path.resolve('public/1._intro/klient_server.html'));
});


app.get('/variabler', (req, res) => {
  res.sendFile(path.resolve('public/1._intro/variabler_scope.html'));
});


app.get('/datatyper', (req, res) => {
  res.sendFile(path.resolve('public/1._intro/datatyper.html'));
});

app.get('/datastrukturer', (req, res) => {
  res.sendFile(path.resolve('public/1._intro/datastrukturer.html'));
});

app.get('/funktioner', (req, res) => {
  res.sendFile(path.resolve('public/2._javascript/funktioner.html'));
});

app.get('/callback-arrow', (req, res) => {
  res.sendFile(path.resolve('public/2._javascript/callback_arrow.html'));
});


app.get('/fetch', (req, res) => {
  res.sendFile(path.resolve('public/2._javascript/fetch.html'));
});


app.get('/node', (req, res) => {
  res.sendFile(path.resolve('public/3._node/node.html'));
});

// mere her

app.get('/express', (req, res) => {
  res.sendFile(path.resolve('public/4._express/express.html'));
});

app.get('/installere-express', (req, res) => {
  res.sendFile(path.resolve('public/4._express/express_projekt.html'));
});



const PORT = 8080;
app.listen(8080, error => {
  if (error) {
    console.log('Server failed to start', error);
    return;
  }
  console.log('Server is running on port', PORT);
});
