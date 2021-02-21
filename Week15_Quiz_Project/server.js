import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import db from './db.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public'))); 

//FRONTEND:
app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'game.html'));
});

app.get('/questions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'questions.html'));
});


//BACKEND:
app.use(express.json());
app.get('/api/game', async (req, res) => {
    const queryRef = await db.collection('questions').get();
    const questions = [];

    queryRef.forEach( doc => questions.push( {id: doc.id, ...doc.data()}));

    const randomIndex =  Math.floor(Math.random() * questions.length);

    res.json(questions[randomIndex]);
});

app.get('/api/questions', async (req, res) => {
    const queryRef = await db.collection('questions').get();
    const questions = [];

    queryRef.forEach( doc => questions.push( {id: doc.id, question: doc.data().question}));

    res.json(questions);
});

app.post('/api/questions', async (req, res) => {
    const inputData = req.body;

    if(typeof inputData.question !== 'string' || inputData.question.length < 3){
        throw new Error ('invalid question');
    }
    if (!Array.isArray(inputData.answers) || inputData.answers.length !== 4 ) {
        throw new Error ('invalid answers');  
    }
    for (let i = 0; i < inputData.answers.length; i++){
        const answerObject = inputData.answers[i];
        if (typeof answerObject.answer !== 'string' || answerObject.answer.length < 3){
            throw new Error (`invalid answer[${ i }]`)
        }
    }
    if (typeof answerObject.is_correct !== 'boolean'){
        throw new Error (`invalid is_correct[${ i }]`)
    }
    if (inputData.answers.filter( answerObject => answerObject.is_correct).length !== 1){
        throw new Error ( `there are more than 1 correct answers`)
    };

    let doc = await db.collection('questions')
        .add(inputData);
    
    res.json({
        id: doc.id
    });
});

app.delete('/api/questions/:id', async (req, res) => {
    const id = req.params.id;

    await db.collection('questions')
        .doc(id)
        .delete();

    res.json({});
});

app.listen(port, () => {
    console.log(`A szerver a ${port} porton fut.`)
});