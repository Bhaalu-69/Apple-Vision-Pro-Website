const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Setting content type for HTML response
    res.setHeader('Content-type', 'text/html');

    if(req.url === '/' || req.url === '/home' || req.url === '/index.html'){
        const indexPath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(indexPath, 'utf8', (err, content) => {
            if(err){
                res.statusCode = 500;
                res.end('Internal Server Error');
            } else {
                res.statusCode = 200;
                res.end(content);
            }
        });
    }

    // Serving static files
    else if(req.url.startsWith('/static')){
        const filePath = path.join(__dirname, req.url);
        fs.readFile(filePath, (err, content) => {
            if(err){
                res.statusCode = 500;
                res.end('File was not found or an internal error was encountered.');
            } else {
                res.statusCode = 200;
                res.end(content);
            }
        });
    }
});

server.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});