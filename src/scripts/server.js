const http = require("http");
const host = 'localhost';
const port = 8000;
const fs = require('fs').promises;
const requestListener = function (req, res) {
    if (req.url !== "/index.html") {
        // redirect on 404
        fs.readFile(__dirname + `/../404.html`).then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(404);
            res.end(contents);
        }).catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
    } else {
        fs.readFile(__dirname + `/../index.html`).then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        }).catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
