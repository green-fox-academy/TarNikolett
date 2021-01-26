const express = require('express');
const app = express();
const PORT = 3000;

// beállítjuk, hogy view engine (nézet motor) az ejs legyen
app.set('view engine', 'ejs');

app.use('/static', express.static('views'));

// kezdőoldal
app.get('/', (req, res) => {
  // jelenítse meg a `home.ejs`-t
  res.render('home', {
    title: 'Hello World!',
    content: 'My name is Niki!',
    introduce: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  });
});

// a 3000-es porton indítsa el az alkalmazást
app.listen(PORT, () => {
  console.log(`Az app a ${PORT}-s port-on fut.`);
});