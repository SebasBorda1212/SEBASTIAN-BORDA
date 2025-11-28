const Http = require('http');
const Server = Http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});

const PORT = 3000;
Server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
