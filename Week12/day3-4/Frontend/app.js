import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.static('./assets'));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.hu.html`);
});

app.get('/doubling', (req, res) => {
    let num = duplication(req.query.input);
    if (req.query.input == undefined) {
        res.send({
            "error": "Please provide an input!"
        });
    }
    res.send({
        received: parseInt(req.query.input),
        result: num
    });
});

function duplication(num) {
    let duplicatedNumber = num * 2;
    return duplicatedNumber;
};

app.get('/greeter', (req, res) => {
    let name = req.query.name;
    let title = req.query.title;
    let answer;
    if (name == undefined && title !== undefined) {
        answer = {
            "error": "Please provide a name!"
        }
        res.writeHead(400);
    }
    else if (title == undefined && name !== undefined) {
        answer = {
            "error": "Please provide a title!"
        }
        res.writeHead(400);
    }
    else if (name == undefined && title == undefined) {
        answer = {
            "error": "Please provide a name and a title!"
        }
        res.writeHead(400);
    }
    else {
        res.send(
            {
                name: name,
                title: title,
                "welcome_message": `Oh, hi there ${name}, my dear ${title}!`
            }
        )
    };
    res.end(JSON.stringify(answer));
});

app.get('/appenda/:appendable', (req, res) => {
    let obj = {
        appended: req.params.appendable
    };
    obj.appended = appendA(req.params.appendable);
    console.log(obj);
    res.send({
        appended: obj.appended
    });
});

function appendA(word) {
    let addLetter = "a";
    return word.concat(addLetter)
};

app.post('/dountil/:action', (req, res) => {
    if (req.params.action == 'sum') {
        let sumNumber = doUntilSum(req.body.until)
        res.send({
            result: sumNumber
        })
    }
    if (req.params.action == 'factor') {
        let factoredNumber = doUntilFactor(req.body.until)
        res.send({
            result: factoredNumber
        })
    }
})

function doUntilSum(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i
    }
    return sum
};

function doUntilFactor(number) {
    let factoredNumber = 1;
    for (let i = 1; i <= number; i++) {
        factoredNumber = factoredNumber * i;
    }
    return factoredNumber
};

app.listen(port, () => {
    console.log(`A szerver fut a ${port} csatornán.`);
});