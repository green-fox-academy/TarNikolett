import express from 'express';

const app = express();
const port = 5000;

app.get('/signup', (req, res) => {
    res.send('Hello');
});


app.listen(port);