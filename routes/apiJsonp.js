// 该文件全是跨域请求
/*
 *
 *
 *
 */


var express = require('express');
var router = express.Router();



// 我是/api中间件，任何跟/api相关的请求都会被拦截
router.use(function(req, res, next) {
    console.log(req);
    next();
})

// 查询
router.get('/list', function(req, res, next) {
  res.jsonp({user:'liangyt'})
});

module.exports = router;
