function init(options) {
  return function authenticate(req, res, next) {
    next(); // TODO Auth with jwt
  }
}

module.exports = init;
