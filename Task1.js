const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Us</h1>');
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Contact Us</h1>');
    } else if (req.url === '/products') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Our Products</h1>');
    } else if (req.url === '/subscribe') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Subscribe to my Newsletter</h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});