const http = require("http");
const host = 'localhost';
const port = 8080;
const fs = require('fs').promises;
const requestListener = function (req, res) {
    console.log(req.url);
    const whitelist = [
        '/index.html'
    ];
    const css = [
        "/css/index-pc.css",
        "/css/index-mobile.css"
    ];
    const images = [
        '/assets/mochacafe/Ressources/logo.jpg',
        '/assets/mochacafe/Ressources/Cafe-En-Grain.jpg',
        '/assets/mochacafe/Ressources/150929101049-black-coffee-stock-exlarge-169.jpg',
        '/assets/mochacafe/Ressources/cockroach-coffee-art-by-chang_1.jpg',
        '/assets/mochacafe/Ressources/Chocolate-Marshmallow-Cooki.jpg',
        '/assets/mochacafe/Ressources/HOPE-Coffee-@-DTS-2017-600x300.jpg',
        '/assets/mochacafe/Ressources/coffee-571245571.jpg',
    ];
    if (whitelist.includes(req.url)) { 
        fs.readFile(__dirname + `/../${req.url}`).then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        }).catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
    } else if (images.includes(req.url)) { 
        fs.readFile(__dirname + `/../${req.url}`).then(contents => {
            res.setHeader("Content-Type", "image/jpg");
            res.writeHead(200);
            res.end(contents);
        }).catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
    } else if (req.url === "/assets/mochacafe/Ressources/RobotoSlab-Regular.ttf") { 
        fs.readFile(__dirname + `/../assets/mochacafe/Ressources/RobotoSlab-Regular.ttf`).then(contents => {
            res.setHeader("Content-Type", "binary/octet-stream");
            res.writeHead(200);
            res.end(contents);
        }).catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
    } else if (css.includes(req.url)) {
        fs.readFile(__dirname + `/../${req.url}`).then(contents => {
            res.setHeader("Content-Type", "text/css");
            res.writeHead(200);
            res.end(contents);
        }).catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
    } else if (req.url === "/") {
        fs.readFile(__dirname + `/../index.html`).then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        }).catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
    } else if (req.url === "/sitemap.xml") {
        fs.readFile(__dirname + `/../sitemap.xml`).then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        }).catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
    } else if (req.url === "/robots.txt") {
        fs.readFile(__dirname + `/../robots.txt`).then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        }).catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
    } else {
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
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
