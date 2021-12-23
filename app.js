require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
app.listen(process.env.PORT)

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use( express.static('public') );


// Rutas
app.get('/', (req, res) => {
  res.render('home', {
    titulo: 'Handlebars Engine',
    nombre: 'by Sergio Turpin'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    titulo: 'Handlebars Engine',
    nombre: 'by Sergio Turpín'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    titulo: 'Handlebars Engine',
    nombre: 'by Sergio Turpín'
  });
})

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/back/404.html')
})