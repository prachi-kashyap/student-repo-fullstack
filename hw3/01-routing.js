const http = require('http');
const port = process.env.PORT || 5001;

// http://localhost:5000/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5000/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5000/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5000/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// http://localhost:5000/check-cookies should return 'yes' / 'no' in plain text depending on whether the browser has the 'hello' cookie

// For other routes, such as http://localhost:5000/other, this exercise should return a status code 404 with '404 - page not found' in html format

const server = http.createServer((req, res) => {
    const routes = [
        'welcome',
        'redirect',
        'redirected',
        'cache',
        'cookie',
        'check-cookies',
        'other',
    ];

    const getRoutes = () => {
        let result = '';

        routes.forEach((elem) => (result += `<li><a href="/${elem}">${elem}</a></li>`));

        return result;
    };

    if (req.url === '/') {
        let routeResults = getRoutes();
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<h1>Exercise 01</h1>`);
        res.write(`<ul> ${routeResults} </ul>`);
        res.end();
    } else if (req.url === '/welcome') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<H1>Welcome to Prachi's page!</H1>");
        res.end();
    } else if (req.url === '/redirect') {
        res.writeHead(302, { Location: '/redirected' });
        res.end();
    } else if (req.url === '/redirected') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<H1>You just got redirected!</H1>');
        res.end();
    } else if (req.url === '/cache') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Cache-Control': 'max-age = ' + 24 * 60 * 60,
        });
        res.write('<H1>This resource was cached!</H1>');
        res.end();
    } else if (req.url === '/cookie') {
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Set-Cookie': 'hello=world',
        });
        res.write('<H1>Cookies...Yummm!<H1>');
        res.end();
    } else if (req.url === '/check-cookies') {
        let message = 'no';
        let cookie = decodeURIComponent(req.headers.cookie);
        let cookie_list = cookie.split(';');

        cookie_list.every((element) => {
            if (element.includes('hello=world')) {
                message = 'yes';
                return true;
            }
        });
        res.writeHead(200, {
            'Content-Type': 'text/plain',
        });
        res.write(message);
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<H1>404 - Page not found</H1>');
        res.end();
    }
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
