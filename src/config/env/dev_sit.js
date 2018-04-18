const _ = require('lodash');
const commonConfig = require('./');

module.exports = _.merge(commonConfig,{
    // development related config
    logging : {
        level : 'debug',
        print_to_console: false
    }
})