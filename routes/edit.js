var express = require('express');
var router = express.Router();
const empTM = require('../utils/empTM');

router.get('/', function (req, res, next) {
  const dep_id = req._parsedOriginalUrl.href.split('/')[2]
  const emp_id = req._parsedOriginalUrl.href.split('/')[3]
  new empTM(dep_id, emps => {
    emps.getById(emp_id, data =>{
      res.render('edit', { items: data })
    });
  });
});

module.exports = router;