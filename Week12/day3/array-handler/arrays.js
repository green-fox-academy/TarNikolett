import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`A szerver a ${port}-as porton fut!`)
});

app.get('/', (req, res) => {
    res.send('Helló Niki!');
});

app.post('/arrays', (req, res) => {
    let requestBodyObject = req.body;
    let what = requestBodyObject.what;
    let numbers = requestBodyObject.numbers;

    if (what == "sum" && numbers !== undefined) {
        let result = sumNumbers(numbers);
        res.send({
            result: result
        })
    }
    if (what == "multiply" && numbers !== undefined) {
        let result = multiplyNumbers(numbers);
        res.send({
            result: result
        })
    }
    if (what == "double" && numbers !== undefined) {
        let result = doubleNumbers(numbers);
        res.send({
            result: result
        })
    }
    if (numbers == undefined) {
        res.send({
            "error": "Kérem, adja meg a számokat!"
        })
    }
    if (what == undefined) {
        res.send({
            "error": "Kérem, adja meg a műveletet!"
        })
    }
    else {
        res.send({
            "error": "Nem definiált művelet!"
        })

    }
});

function sumNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
};

function multiplyNumbers(array) {
    let sum = 1;
    for (let i = 0; i < array.length; i++) {
        sum = sum * array[i];
    }
    return sum
};

function doubleNumbers(array) {
    let doubledArray = [];
    for (let i = 0; i < array.length; i++) {
        doubledArray.push(array[i] * 2)
    }
    return doubledArray
};


