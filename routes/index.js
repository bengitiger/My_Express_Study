/**
* @Date:   2017-02-05T15:51:32+09:00
* @Last modified time: 2017-02-05T20:21:24+09:00
*/
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    console.log('call data');
    next();

}, function(req, res, next) {
    res.render('index', {
        title: 'Express',
        context: '테스트 한글 테스트 Wow'
    });
});

module.exports = router;
