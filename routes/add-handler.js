var express = require('express');
var router = express.Router();
const empTM = require('../utils/empTM');

router.post('/add-handler/', (req, res, next) => {
  new empTM(0, emps => {
    const data = Object.values(req.body);
    const dep_id = data[0];
    data.splice(0, 1);
    emps.add(dep_id, data);
  })
  res.send('ok');
})

module.exports = router;