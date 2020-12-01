const config = require("config")

const { createLogger, format, transports } = require('winston');
const { combine, splat, printf } = format;

const myFormat = printf( ({ level, message, ...metadata}) => {
  let ourTime = new Date().toLocaleString('fi-FI',{timeZone: 'Europe/Helsinki'})
  
  let msg = `${ourTime} [${level}] : ${message} ` 
  if(metadata) {
  msg += JSON.stringify(metadata)
  msg += `*** end of our code block P0033 ***`
  }
  return msg
});

const logger = createLogger({
  level: 'debug',
  format: combine(
	format.colorize(),
	splat(),
	//timestamp(),
	myFormat
  ),
  transports: [
	new transports.Console({ level: 'debug' }),
	new transports.File({ filename: "./logs/app.log", level: 'debug' }),
  ]
});
module.exports = logger
