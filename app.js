const http = require('http');
const fs = require('fs');
const path = require('path');

// Read the index.html file and store its content in memory
const indexPath = path.join(__dirname, 'public', 'index.html');
let indexContent = '';

fs.readFile(indexPath, 'utf8', (err, content) => {
    if (err) {
        console.error('Failed to read index.html:', err);
        process.exit(1); // Exit the process if index.html cannot be read
    }
    indexContent = content;
});

const server = http.createServer((req, res) => {
    // Setting content type for HTML response
    res.setHeader('Content-type', 'text/html');

    if (req.url === '/' || req.url === '/home' || req.url === '/index.html') {
        res.statusCode = 200;
        res.end(indexContent);
    }

    // Serving static files
    else if (req.url.startsWith('/')) {
        const filePath = path.join(__dirname, 'public/static', req.url);
        

        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.statusCode = 404;
                res.end('File not found');
            } else {
                res.statusCode = 200;
                res.end(content);
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
