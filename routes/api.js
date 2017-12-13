'use strict';
var config = require(__dirname+'/../config.js');
var Validator = require('Validator');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var multer = require('multer');
var MongoClient = require('mongodb').MongoClient;
var URL = 'mongodb://localhost/commonbrain';
var Excel = require('exceljs');
var workbook = new Excel.Workbook();
var CircularJSON = require('circular-json');

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/') //folder to save uploading file
  },
  filename: function(req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
  }
});
var upload = multer({storage: storage}).single('file');



mongoose.connect('mongodb://localhost/commonbrain');
var db = mongoose.connection;


exports.ImportExcel = function(req,res){
  upload(req, res, function(err) {
    if (err) {
      res.json({error_code: 1, err_desc: err});
      return;
    }
    if (!req.file) {
      res.json({error_code: 1, err_desc: "No file passed"});
      return;
    }

    workbook.xlsx.readFile(req.file.path).then(function() {
      var worksheet = workbook.getWorksheet('TestImport');
      var sheet2 = JSON.parse(CircularJSON.stringify(worksheet));
      var arr = [];
      for (var i = 0, len = sheet2._rows.length; i < len; i++) {
              if(sheet2._rows[i]._number != 1){
                var Obj = {};
                  for (var i2 = 0, len2 = sheet2._rows[i]._cells.length; i2 < len2; i2++) {
                    if (sheet2._rows[i]._cells[i2] !== null && sheet2._rows[i]._cells[i2] !== undefined) {
                      var cell = sheet2._rows[i]._cells[i2]._value.model.address;
                      if (sheet2._rows[i]._cells[i2]._value.model.value === undefined) {
                        if(cell.indexOf('A') > -1){
                          Obj['applicationName'] = sheet2._rows[i]._cells[i2]._value.model.text;
                        }
                        if(cell.indexOf('B') > -1){
                          Obj['applicationType'] = sheet2._rows[i]._cells[i2]._value.model.text;
                        }
                        if(cell.indexOf('C') > -1){
                          Obj['riskScore'] = sheet2._rows[i]._cells[i2]._value.model.text;
                        }
                        if(cell.indexOf('D') > -1){
                          Obj['adminName'] = sheet2._rows[i]._cells[i2]._value.model.text;
                        }
                        if(cell.indexOf('E') > -1){
                          Obj['adminEmail'] = sheet2._rows[i]._cells[i2]._value.model.text;
                        }
                        if(cell.indexOf('F') > -1){
                          Obj['numberOfSeats'] = sheet2._rows[i]._cells[i2]._value.model.text;
                        }
                        if(cell.indexOf('G') > -1){
                          Obj['numberOfSeatsLink'] = sheet2._rows[i]._cells[i2]._value.model.text;
                        }
                        if(cell.indexOf('H') > -1){
                          Obj['expirtaion'] = sheet2._rows[i]._cells[i2]._value.model.text;
                        }
                        if(cell.indexOf('I') > -1){
                          Obj['expirationLink'] = sheet2._rows[i]._cells[i2]._value.model.text;
                        }
                        if(cell.indexOf('J') > -1){
                          Obj['compliancyPercentage'] = sheet2._rows[i]._cells[i2]._value.model.text;
                        }
                        if(cell.indexOf('K') > -1){
                          Obj['compliancyPercentageLink'] = sheet2._rows[i]._cells[i2]._value.model.text;
                        }
                        if(cell.indexOf('L') > -1){
                          Obj['downloadLink'] = sheet2._rows[i]._cells[i2]._value.model.text;
                        }
                      } else {
                        if(cell.indexOf('A') > -1){
                          Obj['applicationName'] = sheet2._rows[i]._cells[i2]._value.model.value;
                        }
                        if(cell.indexOf('B') > -1){
                          Obj['applicationType'] = sheet2._rows[i]._cells[i2]._value.model.value;
                        }
                        if(cell.indexOf('C') > -1){
                          Obj['riskScore'] = sheet2._rows[i]._cells[i2]._value.model.value;
                        }
                        if(cell.indexOf('D') > -1){
                          Obj['adminName'] = sheet2._rows[i]._cells[i2]._value.model.value;
                        }
                        if(cell.indexOf('E') > -1){
                          Obj['adminEmail'] = sheet2._rows[i]._cells[i2]._value.model.value;
                        }
                        if(cell.indexOf('F') > -1){
                          Obj['numberOfSeats'] = sheet2._rows[i]._cells[i2]._value.model.value;
                        }
                        if(cell.indexOf('G') > -1){
                          Obj['numberOfSeatsLink'] = sheet2._rows[i]._cells[i2]._value.model.value;
                        }
                        if(cell.indexOf('H') > -1){
                          Obj['expirtaion'] = sheet2._rows[i]._cells[i2]._value.model.value;
                        }
                        if(cell.indexOf('I') > -1){
                          Obj['expirationLink'] = sheet2._rows[i]._cells[i2]._value.model.value;
                        }
                        if(cell.indexOf('J') > -1){
                          Obj['compliancyPercentage'] = sheet2._rows[i]._cells[i2]._value.model.value;
                        }
                        if(cell.indexOf('K') > -1){
                          Obj['compliancyPercentageLink'] = sheet2._rows[i]._cells[i2]._value.model.value;
                        }
                        if(cell.indexOf('L') > -1){
                          Obj['downloadLink'] = sheet2._rows[i]._cells[i2]._value.model.value;
                        }
                      }
                    }
                  }
                  arr.push(Obj);
              }
      }
      MongoClient.connect(URL, function(err, db) {
        if (err) throw err;

        var collection = db.collection("applications")
        collection.remove();

        collection.insert(arr)
        res.json(arr);




      })


    });
  })
}
exports.LoginCheck = function(req, res){
    const { username, password } = req.body;
    MongoClient.connect(URL, function(err, db) {
      if (err) return

        var collection = db.collection('users')

        collection.findOne({"username": username},function(err, result) {
          if(result == null){
            //console.log(result);
            res.status(401).json({errors: {form : "invalid" } });
            db.close()
          }else{
            const token = jwt.sign({
                  id: result._id,
                  username: result.username
              }, config.jwtSecret);


              res.json({
                  token
               })
            db.close()
          }

        })

    })




    // db.collection('users').find({username:username}).toArray(function(err,result){
    //   if (err) throw err
    //   console.log(err);
    //   res.status(401).json({errors: {form : result } });
    // })


    //res.status(401).json({errors: {form : "Invalid Credentials" } });




};
exports.excelData = function(req, res) {
    console.log(req);
    comsole.log(res);
};
exports.getApplications = function(req, res){
    MongoClient.connect(URL, function(err, db) {
      if (err) throw err;

      var collection = db.collection("applications")

        collection.find({}).toArray(function(err, result) {
          if (err) throw err;

          res.send(result);
          db.close();
        })

    })
};
exports.Users = function(req, res){
    MongoClient.connect(URL, function(err, db) {
      if (err) throw err;

      var collection = db.collection("users")

        collection.find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        })

    })
};
exports.GetPortfolios = function(req, res){
  var userId = req.params.id;
    MongoClient.connect(URL, function(err, db) {
      if (err) throw err;

      var collection = db.collection("portfolios")

        collection.find({userId:userId}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        })

    })
};
