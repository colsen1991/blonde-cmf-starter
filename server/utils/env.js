function setEnv(env) {
  process.env.NODE_ENV = env;
}
function getEnv() {
  return process.env.NODE_ENV;
}
function isDev() {
  return getEnv() === 'development';
}
function isProd() {
  return getEnv() === 'production';
}
function isStaging() {
  return getEnv() === 'staging';
}
function isTest() {
  return getEnv() === 'test';
}

module.exports = {
  setEnv,
  getEnv,
  isDev,
  isProd,
  isStaging,
  isTest
};
