var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


/* GET anounces page. */
router.get('/anounces', function(req, res, next) {
  res.render('anounces');
});

/* GET blog page. */
router.get('/blog', function(req, res, next) {
  res.render('blog');
});

/* GET team page. */
router.get('/team', function(req, res, next) {
  res.render('team');
});

/* GET contacts page. */
router.get('/contacts', function(req, res, next) {
  res.render('contacts');
});

/* GET 404 page. */
router.get('/forbidden', function(req, res, next) {
  res.render('404');
});

/* GET eventdetails page. */
router.get('/eventdetails', function(req, res, next) {
  res.render('eventedetails');
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  res.render('profile');
});


/* GET create page. */
router.get('/create', function(req, res, next) {
  res.render('create');
});

/* GET history page. */
router.get('/history', function(req, res, next) {
  res.render('history');
});

module.exports = router;
