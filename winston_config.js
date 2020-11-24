const config = require("config")

const { createLogger, format, transports } = require('winston');
const { combine, splat, timestamp, printf } = format;

const myFormat = printf( ({ level, message, timestamp , ...metadata}) => {
  let msg = `${timestamp} [${level}] : ${message} `  
  if(metadata) {
	msg += JSON.stringify(metadata)
  }
  return msg
});

const logger = createLogger({
  level: 'debug',
  format: combine(
	format.colorize(),
	splat(),
	timestamp(),
	myFormat
  ),
  transports: [
	new transports.Console({ level: 'info' }),
	new transports.File({ filename: "./logs/app.log", level: 'debug' }),
  ]
});
module.exports = logger
/*

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
            filename: `${logDir}/app.log`,
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            level: 'info'
        })
    ],
});

module.exports = logger

*/