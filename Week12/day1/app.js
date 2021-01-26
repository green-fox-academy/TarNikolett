import express from 'express';
import path, { dirname } from 'path';
import {fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static('assets'))

/* app.get('/' , (req, res) => {
    res.sendFile (`${__dirname}/index.hu.html`);
}); */

app.listen(3000, () => {
    console.log('Serves listens on 3000 port');
});


