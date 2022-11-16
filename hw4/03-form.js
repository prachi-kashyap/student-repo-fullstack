const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.post('/submit', (req, res) => {
    let bodyparams = req.body;
    let text = '';
    let value = '';
    for (var key in req.body) {
        value = req.body[key];
        if (key === 'Newsletter') {
            req.body[key] === 'true'
                ? (value = 'Yes, I would like to join the newsletter')
                : (value = 'No, thank you.');
        }
        text += `<h2>${key}: ${value}</h2>`;
    }
    res.set('Content-Type', 'text/html');
    res.status(200).send(text);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
