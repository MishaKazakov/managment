let papa = require('papaparse');
let fs = require('fs');
const recordSet = require('../utils/recordSet');

class depTM {
  constructor(callback) {
    fs.readFile(__dirname + `/../db/departments.csv`, (err, data) => {
      papa.parse(data.toString('utf8'), {
        delimiter: ",",
        complete: (result) => {
          this.data = result.data;
          this.data.splice(0,1);
          callback(this)
        }
      });
    });
  }

  geAll() {
    return new recordSet(this.data)
  }
}

module.exports = depTM;