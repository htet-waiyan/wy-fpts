const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

require('./config/')(app);

server.listen(process.env.PORT||3000, () => {
    logger.info(`Server started at ${process.env.PORT||3000}`);
})