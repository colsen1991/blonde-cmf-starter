const config = {
  databases: [
    {
      name: '_users',
      type: 'private',
      compaction: false,
      model: {
        username: 'username',
        email: 'email',
        password: 'password',
        salt: 'text'
      }
    }
  ]
};

module.exports = config;
