import winston from 'winston';

const logger = winston.createLogger({
    level: 'info', // Set the minimum level of messages to log (e.g., 'info', 'debug', 'error')
    format: winston.format.combine(
        winston.format.timestamp(), // Add a timestamp to your logs
        winston.format.printf(({ level, message, timestamp }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`; // Customize your log format
        })
    ),
    transports: [
        //new winston.transports.Console(), // Optional: Log to console as well
        new winston.transports.File({ filename: 'patrick.log' }) // Log to a file named 'app.log'
    ]
});

export default logger;