const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5001;
// Use the express-session module
app.use(
    session({
        store: new session.MemoryStore(),
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

app.get('/favicon.ico', (req, res) => res.status(204));

//Middleware gets executed for every route
app.use((req, res, next) => {
    res.set({ 'Content-Type': 'text/plain' });
    res.write(`Currently on route ${req.url}\n\n`);
    if (req.session.previouslyVisited) {
        req.session.previouslyVisited.push(`${req.url}`);
        let resp = 'Previously Visited';
        let previouslyVisitedPaths = req.session.previouslyVisited
            .slice(0, req.session.previouslyVisited.length - 1)
            .join('\n');
        res.write(resp + '\n' + previouslyVisitedPaths);
    } else {
        req.session.previouslyVisited = [];
        res.write(`Welcome to ${req.protocol + '://' + req.get('host') + req.originalUrl}\n\n`);
        req.session.previouslyVisited.push(`${req.url}`);
    }
    next();
});

app.get('*', (req, res, next) => {
    res.send();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
