var express = require('express');
var router = express.Router();
const empTM = require('../utils/empTM');

router.get('/', function (req, res, next) {
  const emp_id = req._parsedOriginalUrl.href.split('/')[2];
  new empTM(0, emps => {
    emps.delete(emp_id);
  });
  res.send('ok');
});

module.exports = router;