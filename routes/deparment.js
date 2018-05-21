var express = require('express');
var router = express.Router();
const empTM = require('../utils/empTM');

/* GET home page. */
router.get('/', function (req, res, next) {
  const dep_id = req._parsedOriginalUrl.href.split('/')[2]
  new empTM(dep_id, emps => {
    emps.getAll(data => {      
      res.render('employees', { items: data })
    });
  })
});

module.exports = router;