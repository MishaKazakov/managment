var express = require('express');
var router = express.Router();
const depTM = require('../utils/depTM');

/* GET home page. */
router.get('/', function (req, res, next) {
  new depTM(dep => {
    const data = dep.geAll();
    res.render('index', { items: data })
  });

  // fs.readFile(__dirname + '/../db/departments.csv', (err, data) => {
  //   let text = papa.parse(data.toString('utf8'), {
  //     complete: (result) => {
  //       result.data.splice(0, 1);
  //       result.data.splice(result.data.length - 1);
  //       res.render('index', { departments: result.data });
  //     }
  //   });
  // });

});

module.exports = router;
