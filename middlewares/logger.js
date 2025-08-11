const fs= require('node:fs');


exports.loggerMiddleware = (req, res, next) => {
  const log = `\n${new Date().toString()} - ${req.method} - ${req.path}`;
  fs.appendFileSync('logs.txt', log, 'utf-8');
  next();
}