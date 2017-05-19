function init(options) {
  return function validate(req, res, next) {
    next(); // TODO Validate req
  }
}

module.exports = init;
