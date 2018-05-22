let papa = require('papaparse');
let fs = require('fs');
const recordSet = require('../utils/recordSet');

const path = __dirname + `/../db/employees.csv`;

class empTM {
  constructor(dep_id, callback) {
    fs.readFile(path, (err, data) => {
      papa.parse(data.toString('utf8'), {
        delimiter: ",",
        complete: (result) => {
          if (dep_id != 0) {
            this.data = result.data.filter(employee => {
              return employee[0] == dep_id
            });
          } else {
            this.data = result.data;
          }
          callback(this)
        }
      });
    });
  }

  getAll(callback) {
    callback(new recordSet(this.data))
  }

  getById(id, callback) {
    const emp = this.data.filter(employee => {
      return employee[1] == id
    })
    callback(new recordSet(emp))
  }

  edit(id, data) {
    this.data = this.data.map(emp => {
      if (emp[1] == id) {
        emp[2] = data[0];
        emp[3] = data[1];
        emp[4] = data[2];        
      }
      return emp;
    })
    let csv = papa.unparse({
      data: this.data,
    })
    fs.writeFileSync(path, csv);
  }

  delete(id) {
    let num = 0;
    this.data.forEach((element, i) => {
      if (element[1] == id)
        num = i;  
    });
    this.data.splice(num,1)
    let csv = papa.unparse({
      data: this.data,
    })
    fs.writeFileSync(path, csv);
  }

  add(dep_id, newData) {
    fs.readFile(path, (err, data) => {
      const fileLenght = data.length;
      papa.parse(data.toString('utf8'), {
        delimiter: ",",
        complete: (result) => {
          if (result.data[result.data.length - 1][0] == ' ' ){
            result.data.splice(result.data.length - 1);
          }
          const len = result.data.length;
          const lastId = (result.data[len - 1][1]);
          const newLine = [dep_id, parseInt(lastId) + 1, newData[0], parseInt(newData[1])]
          result.data.push(newLine)
          let csv = papa.unparse({
            data: result.data,
          })
          fs.writeFileSync(path, csv);
          //fs.write(file, \n`, fileLenght, 'utf8', () => { })
        }
      })
    })
  }
}


module.exports = empTM;