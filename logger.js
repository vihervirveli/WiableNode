const winston = require('winston');

const myFormat = winston.format.cli({colors:{info: 'blue'}})
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: myFormat
        })
    ]
});

module.exports = logger