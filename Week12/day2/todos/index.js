const express = require('express');
const app = express();
const port = 3000;

let todos = ['get up', 'survive', 'go back to bed'];

app.set('view engine' , 'ejs');
app.use('views',express.static(`views`));
app.get('/' , (req,res) => {
    res.render('home' , {
        title: 'Things to do today:',
        todos: todos
    })
});

app.listen(port, () => {
    console.log(`Az app a ${port}-s port-on fut!`)
})