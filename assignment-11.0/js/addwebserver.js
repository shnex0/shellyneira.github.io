"use strict";

import { createServer } from "http";
import { parse } from "url";
import { readFile } from "fs";
import { add } from "./js/addmod.js";

createServer((req, res) => {
    const endpoint = parse(req.url, true);
    endpointName = `.${endpoint.pathname}`;

    if(endpoint.pathname == "/add.js"){
        add(req,res, endpoint.query);
    }
    else{
        readFile(endpointName, (err,data) => {
            if(err){
                res.writeHead(404, {"Content-Type": "text/html"});
                return res.end("404 Not Found");
            }
            res.writeHead(200);  // Content-Type not included
            res.write(data);
            return res.end();
        })
    }
}).listen(8080);