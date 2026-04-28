import http from "http";
import fs from "fs";
import path from "path";

const PORT = process.env.PORT;
const basePath = path.resolve(process.cwd());

const server = http.createServer((req, res) => {
    let filePath = path.join(basePath, req.url === "/" ? "index.html" : req.url);

    const ext = path.extname(filePath);
    const contentType = {
        ".html": "text/html",
        ".js": "text/javascript",
        ".css": "text/css",
    }[ext] || "text/plain";

    if (req.url === "/env") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            API_URL: process.env.API_URL
        }));
        return;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end("Not found");
            return;
        }

        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
    });
});

server.listen(PORT, () => {
    console.log(`Rodando em http://localhost:${PORT}`);
});