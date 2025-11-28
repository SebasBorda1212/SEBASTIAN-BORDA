const Http= require('http');
const Server= Http.createServer((req, res) => {
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('un pelao con un botso\n');
    res.end('aqui termina la respuesta\n');
});
const PORT= 3000;
Server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



