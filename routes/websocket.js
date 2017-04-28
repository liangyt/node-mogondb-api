var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ws/index', { title: 'webSocket测试' });
});

module.exports = router;