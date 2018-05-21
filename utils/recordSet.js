class recordSet {
  constructor(data) {
    this.data = data;
    this.row = 0;
  }

  isEmpty() { this.data.length === 0 ? true : false }

  getRow() {
    if (this.row < this.data.length)
      return this.data[this.row++];
  }

  isEOF() { return this.row === this.data.length ? true : false }

  findRow(field, value) {
    let resultRow = -1;
    this.header.forEach((row, num) => {
      if (row == field) { result = num; }
    })
    if (resultRow === -1) { return; }
    this.data.forEach(row => {
      if (row[resultRow] == value) {
        return row;
      }
    })
  }
}

module.exports = recordSet;

// class recordSet {
//   constructor(req, callback) {
//     if (req == 'to') {
//       fs.readFile(__dirname + `/../db/sales.csv`, (err, data) => {
//         papa.parse(data.toString('utf8'), {
//           delimiter: ",",
//           complete: (result) => {
//             this.header = result.data[0];
//             this.data = result.data.filter(item => (item != ''));
//             const id = this.data[this.data.length - 1][0];
//             let newData = id + ',';
//             console.log(callback)
//             const desc = fs.open(__dirname + `/../db/sales.csv`);
//             fs.write(0, __dirname + `/../db/sales.csv`, newData, result.data.length, (err, data) => {
//             })
//           }
//         });
//       });
//     }
//     else {
//       const table = tables[req];
//       this.row = 0;
//       if (table != undefined && table != 'to')
//         fs.readFile(__dirname + `/../db/${table}.csv`, (err, data) => {
//           papa.parse(data.toString('utf8'), {
//             delimiter: ",",
//             complete: (result) => {
//               this.header = result.data[0];
//               result.data.splice(0, 1);
//               this.data = result.data.filter(item => (item != ''));
//               callback(this);
//             }
//           });
//         });
//       else
//         callback(null);
//     }
//   }



