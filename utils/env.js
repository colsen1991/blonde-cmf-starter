function getEnv() {
  return process.env.NODE_ENV;
}

function isDev() {
  return getEnv() === 'development';
}

function isProd() {
  return getEnv() === 'production';
}

function isTest() {
  return getEnv() === 'test';
}

exports.getEnv = getEnv;
exports.isDev = isDev;
exports.isProd = isProd;
exports.isTest = isTest;
