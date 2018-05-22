var express = require('express');
var router = express.Router();
const depTM = require('../utils/depTM');

/* GET home page. */
router.get('/', function (req, res, next) {
  new depTM(dep => {
    const data = dep.geAll();
    res.render('index', { items: data })
  });
});

module.exports = router;
