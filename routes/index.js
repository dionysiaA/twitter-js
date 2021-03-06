const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const path = require('path');


// app.set('view engine', 'html');
// app.engine('html', nunjucks.render);
// nunjucks.configure('views', {noCache: true});

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  const user = tweetBank.random(tweets)
  // console.log(tweets);
  
  res.render( 'index', { tweets: tweets, user: user} );
});

// router.get('/stylesheets/style.css', function(req,res){
//   // console.log(__dirname + '/../public/stylesheets/style.css')
//   res.sendFile(path.join(__dirname, '..', '/public/stylesheets/style.css'));
// });
router.use(express.static('public'));

module.exports = router;
