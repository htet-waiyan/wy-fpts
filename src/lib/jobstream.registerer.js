const mainSchedular = require('./main.schedular');
const jobRunner = require('./job.runner');
const moment = require('moment');
const config = require('../config/')()

exports.startMainSchedular = () => {
    mainSchedular.start();
    logger.info(`Main Schedular has started.`);
    return this;
}

//load from config or database
exports.registerJobStreams = jobstream => {
    jobRunner.scheduleJobstream(jobstream);
}
