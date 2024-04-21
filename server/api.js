const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");

/**
 * @param {string} an 
 * @param {http.ServerResponse<http.IncomingMessage> & {req: http.IncomingMessage}} res 
 * @param {url.UrlWithParsedQuery & url.UrlWithStringQuery & url.Url} pu 
 */
function load_api(an, res, pu) {
    const parsed = path.parse(an);
    let body = "";
    res.req.on("data", chunk => {
        body += chunk;
    });
    res.req.on("end", () => {
        if (body.startsWith("{")) {
            body = JSON.parse(body);
        }
        else {
            body = {};
        }
        switch (parsed.base) {
            case "api_name":
        }
    });
}

module.exports = load_api;
