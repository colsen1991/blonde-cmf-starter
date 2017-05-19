function init(options) {
  return function authorize(req, res, next) {
    next(); // TODO Authorize req
  }
}

module.exports = init;
