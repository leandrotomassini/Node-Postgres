const { Router } = require('express');
const { getUsers } = require('../controller');

const router = Router();

router.get('/user', getUsers);

module.exports = router;