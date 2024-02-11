const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath;

    switch (req.url) {
        case '/about':
            filePath = path.join(__dirname, 'views', 'about.html');
            break;
        case '/contact':
            filePath = path.join(__dirname, 'views', 'contact.html');
            break;
        case '/products':
            filePath = path.join(__dirname, 'views', 'products.html');
            break;
        case '/subscribe':
            filePath = path.join(__dirname, 'views', 'subscribe.html');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page not found');
            return;
    }

    fs.readFile(filePath, 'utf8', (err, html) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});