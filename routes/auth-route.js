var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/bnet',
        function(req, res, next) {
          console.log('/auth/bnet route hit'),
          next()
        },
        passport.authenticate('bnet'));

router.get('/bnet/callback',
        passport.authenticate('bnet', { failureRedirect: '/' }),
        function(req, res){
          console.log('bnet callback')
        });

router.get('/fail', function(req, res, next) {
  res.send({
    status: 401,
    message: 'Failed to Login'
  })
})

module.exports = router;
