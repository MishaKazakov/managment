var express = require('express');
var router = express.Router();
const empTM = require('../utils/empTM');

router.post('/edit-handler/', (req, res, next) => {
  new empTM(0, emps => {
    const data = Object.values(req.body);
    const id = data[0];
    data.splice(0, 1);
    emps.edit(id, data);
  })
  res.send('ok');
})

module.exports = router;