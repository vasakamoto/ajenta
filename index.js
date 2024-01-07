import express from "express";

const localHost = 3000;

const server = express();

function app(localHost) {
    server.listen(localHost);
    console.log(`Server is listening at port ${localHost}`);
}

app(localHost);
