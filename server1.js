const http = require('http');

const server = http.createServer((req, res) => {
    
    if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hola mi héro n');

    } else if (req.url === '/about' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Acerca de mi héro n');

    } else if (req.url === '/contact' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Contacto mi héro n');

    } else if (req.url === '/services' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Servicios mi héro n');

    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 No encontrado mi héro n');
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`El servidor está corriendo en http://localhost:${PORT}/`);
});
