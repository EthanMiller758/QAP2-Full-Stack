const EventEmitter = require('events');
const fs = require('fs');

class MyEmitter extends EventEmitter {

    processRequest(route) {
        const statusCode = 200;
        this.emit('httpStatus', statusCode);

        const filePath = 'views/index.html';
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                this.emit('fileReadError', err.message);
            } else {
                this.emit('fileReadSuccess', filePath);
            }
        });

        if (route.path != '/') {
            this.emit('routeAccess', route.path);
        }
    }
}

const myEmitter = new MyEmitter();

myEmitter.on('httpStatus', (statusCode) => {
    console.log(`HTTP Status Code: ${statusCode}`);
});

myEmitter.on('fileReadSuccess', (filePath) => {
    console.log(`File successfully read: ${filePath}`);
});

myEmitter.on('fileReadError', (errorMessage) => {
    console.error(`File read error: ${errorMessage}`);
});

myEmitter.on('routeAccess', (routePath) => {
    console.log(`Route accessed: ${routePath}`);
});

myEmitter.processRequest({ path: '/about', method: 'GET' });
myEmitter.processRequest({ path: '/contact', method: 'POST' });