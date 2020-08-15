const Users = require('./auth.controller');
module.exports = (router) => {
  router.post('/registrar', Users.createUser);
  router.post('/login', Users.loginUser);
}
