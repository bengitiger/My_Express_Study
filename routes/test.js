/**
* @Date:   2017-02-05T20:17:20+09:00
* @Last modified time: 2017-02-05T21:11:55+09:00
*/
var debug = require('debug')('worker');

var express = require('express');
var router = express.Router();

//--------------------------------------

var PageTime = function timeLog(req, res, next) {
  req.requestTime = Date.now();
  next();
}

router.use(PageTime);

//--------------------------------------

var cb0 = function(req, res, next) {
    console.log('CB0');
    next();
}

var cb1 = function(req, res, next) {
    console.log('CB1');
    next();
}

var cb2 = function(req, res) {
    console.log('CB2');
    next();
}

//--------------------------------------

router.get('/e1/:id?', [
    cb0, cb1, cb2
], function(err, req, res, next) {
    debug( 'Request URL: %s  / method : %s', [ req.originalUrl, req.method ] );

    res.responseText = 'Hello World!<br>';

    next();
}, function(req, res, next) {

    res.responseText += 'Requested at: ' + req.requestTime;
    res.responseText += '<br>Origin URL : ' + req.originalUrl;
    res.responseText += '<br>id = ' + req.params.id;

    res.send( res.responseText );

}).post(function(req, res) {
    res.send('Add a book');
}).put(function(req, res) {
    res.send('Update the book');
});

//--------------------------------------

module.exports = router;
