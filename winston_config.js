const winston = require('winston');
const logDir = 'logs';
const fs = require('fs');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    exitOnError: false,
    transports: [
        new (require('winston-daily-rotate-file'))({
            filename: `${logDir}/logs.log`,
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            level: 'silly'
        }),
        new (require('winston-daily-rotate-file'))({
            filename: `${logDir}/errors.log`,
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            level: 'error'
        })
    ],
});

export {logger};