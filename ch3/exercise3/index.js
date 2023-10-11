const express = require('express');
const app = express();
const port = 3000;

app.get('/factorial', (req, res) => {
    res.redirect(`/factorial/${req.query.number}`);
});

app.get('/factorial/:number', (req, res) => {
    const number = parseInt(req.params.number);
    res.send(`${factorial(number)}`);
});

const factorial = n => {
    if (n == 1) return 1;
    else return n * factorial(n - 1);
};

app.listen(port, () => console.log(`Server listening on port ${port}!`));