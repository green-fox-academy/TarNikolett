import express from 'express';

let app = express();
let port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`App listen on port ${port}`)
});
