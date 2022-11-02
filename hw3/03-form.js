const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
    let url = new URL(req.url, `http://${req.headers.host}`);
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.end(fs.readFileSync(__dirname + '/03-form.html'));
    } else if (url.pathname === '/submitForm') {
        const parameters = url.searchParams;
        let text = '';
        parameters.forEach((value, key) => {
            if (key == 'Newsletter') {
                value == 'true'
                    ? (value = 'Yes, I would like to join the newsletter')
                    : (value = 'No, thank you.');
            }
            text += `<h2>${key}: ${value}</h2>`;
        });
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(text);
        res.end();
    }

    res.end();
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
