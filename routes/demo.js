var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('demo/index', { title: 'Express' });
});

router.get('/deferred', function(req, res, next) {
  res.render('demo/deferred', { title: 'Express' });
});

module.exports = router;