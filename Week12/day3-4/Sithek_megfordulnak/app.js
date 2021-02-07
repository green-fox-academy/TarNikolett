import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/sith', (req, res) => {
    let sith_text = changeWords(req.body.text);
    res.send({
        sith_text
    })
});

function changeWords(text) {
    let splittedSentencedText = text.split(' ');
    let array = [];
    console.log(splittedSentencedText);
    for (let i = 0; i < splittedSentencedText.length; i++) {
        if (i % 2 == 0) {
            array.push(splittedSentencedText[i + 1])
        }
        else {
            array.push(splittedSentencedText[i - 1])
        }
    }
    return array
};

app.listen(port, () => {
    console.log(`A szerver a ${port}-es porton fut!`)
});