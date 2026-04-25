export function sendResponse(res, status, data) {
    if (status === 204 || data == null) {
        res.writeHead(status);
        return res.end();
    }

    const body = JSON.stringify(data);

    res.writeHead(status, {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": Buffer.byteLength(body),
    });

    return res.end(body);
}
