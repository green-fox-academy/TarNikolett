import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('static'));


app.listen(port, () => {
    console.log(`A szerver a ${port}-es porton fut`);
});