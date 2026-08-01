const fs = require("fs");
const { url } = require("inspector");

function userMiddleware(filename) {
  return (req, res, next) => {
    const allDetails = JSON.stringify(req.headers);
    let logData = `${Date.now()}:  ${allDetails} / ${req.path}\n`;
    fs.appendFile(
      filename,
      logData,
      (err) => {
       next();
      },
    );
  };
}

module.exports = {
  userMiddleware,
};
