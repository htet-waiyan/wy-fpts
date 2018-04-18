const express = require('express');
const apiRoute = require('./route.api');

module.exports = app => {
    app.use('/api',apiRoute);

    /** IMPORTANT to place this middleware here. Any endpoint registration, do it above of this */
    app.use('*',(req,res,next) => {
        res.sendStatus('404');
    })

    app.use((error,req,res,next) => {
        //fatal error occured
        logger.error('Internal Server Error ',error);
        res.sendStatus(500);
    })
}