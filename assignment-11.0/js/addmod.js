"use strict";

export function add(req, res, vals) {
    const sum = parseFloat();
    res.writeHead(200, {"Content-Type": "text/html"});
    const content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Adder</title>
</head>
<body>
    <h1>sum is ${string(sum)}</h1>
</body>
</html>`;

    res.write(content);
    return res.end();
}