var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const dep_id = req._parsedOriginalUrl.href.split('/')[2];
  res.render('add', { items: dep_id })
});

module.exports = router;