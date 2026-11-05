const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
        <h1>DevOps CI/CD Pipeline</h1>
        <h2>Welcome to Node.js Demo Application!</h2>
        <p>Successfully deployed on AWS EC2 using Docker.</p>
    `);
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});
