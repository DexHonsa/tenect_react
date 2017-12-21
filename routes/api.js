'use strict';
var config = require(__dirname+'/../config.js');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var multer = require('multer');
var MongoClient = require('mongodb').MongoClient;
var URL = 'mongodb://tenect:Tenect1!@tenect-shard-00-00-4a4fj.mongodb.net:27017,tenect-shard-00-01-4a4fj.mongodb.net:27017,tenect-shard-00-02-4a4fj.mongodb.net:27017/tenect?ssl=true&replicaSet=Tenect-shard-0&authSource=admin';
var Excel = require('exceljs');
var workbook = new Excel.Workbook();
var CircularJSON = require('circular-json');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
let transporter = nodemailer.createTransport(smtpTransport({
  name: 'Server',
  host: 'mail.tenect.com',
  //maxConnections: 1,
  port: 587 ,
  secure: false,
  auth: {
    user: 'support@tenect.com',
    pass: 'Support1!'
  },
  tls: {
    //ciphers: 'SSLv3',
    rejectUnauthorized: false,
  //  secureProtocol: "TLSv1_method"
  }

}));

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



mongoose.connect('mongodb://tenect:Tenect1!@tenect-shard-00-00-4a4fj.mongodb.net:27017,tenect-shard-00-01-4a4fj.mongodb.net:27017,tenect-shard-00-02-4a4fj.mongodb.net:27017/tenect?ssl=true&replicaSet=Tenect-shard-0&authSource=admin');
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
    var _username = username.toLowerCase();
    MongoClient.connect(URL, function(err, db) {
      if (err) return

        var collection = db.collection('users');

        collection.findOne({"username": _username},function(err, result) {
          if(result == null){
            //console.log(result);
            res.status(401).json({errors: {form : "Username Does Not Exist" } });
            db.close()
          }else{
            if(result.password === password){


            const token = jwt.sign({
                  id: result._id,
                  username: result.username
              }, config.jwtSecret);


              res.json({
                  token
               })
             }else{
               res.status(401).json({errors: {form : "Wrong Password" } });
             }
            //db.close()
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
exports.ConfirmEmail = function(req,res){
  var ObjectId = require('mongodb').ObjectId;
  var token = req.params.token;
  const _id = jwt.verify(token, config.jwtSecret);
  MongoClient.connect(URL, function(err,db){
    if (err) throw err;
    var collection = db.collection('users');
    //console.log(_id);
    //res.send(_id);
    console.log(_id.id);
    collection.updateOne({ _id: ObjectId(_id.id) },{$set: {confirmed:true}}, function(err, result){
      if (err) throw err;

      res.send(result);
    })
  });
}
exports.SignUpUser = function(req,res){

  const {username, email, password } = req.body;
  var EMAIL_SECRET;
  MongoClient.connect(URL, function(err, db) {
      if (err) throw err;

      var collection = db.collection("users")

      collection.find({email:email}).toArray(function(err, result) {
        var firstResult = result;
        collection.find({username:username}).toArray(function(err, result) {
          if(result.length < 1 && firstResult.length < 1){
            var user = {username:username,email:email,password:password,confirmed:false,isAdmin:false};
            collection.insert(user, function(err){
              const token = jwt.sign({
                  id: user._id,
                  username:user.username,
                  email: user.email
                  }, config.jwtSecret);

              const emailToken = jwt.sign({
                id:user._id
              },
                  config.jwtSecret,
              {
                expiresIn:'1d'
              });

              var url = `http://localhost:9000/confirmation/${emailToken}`;
              const emailOutput = `
              <div style="background:#f8f8f8; text-align: center; width:100%; padding:30px 15px;box-sizing: border-box;">
              	<div style="max-width: 500px; width:100%; background:#fff; padding:15px; text-align: center;display: inline-block; border:solid 1px #eaeaea; border-radius: 3px;box-sizing: border-box;">
              	<div style="">
              		<img src="http://tenect.com/img/logo_1.png" alt="" height="50px">
              	</div>
              		<div style="color:#000;  font-size: 12pt; font-family: Arial; font-weight: bold; margin:10px 0px; display: inline-block">Welcome To Tenect<sup style="font-size: 6pt;">TM</sup></div>
              		<div style=" font-size: 10pt;
              		color:#808080;
              		font-family:Arial;
              		">
              			Thank you for joining Tenect!  In order to take full advantage of the benefits of Tenect, you need to verify your email address.  By clicking the button below, you will activate your account.
              		</div>
              		<a target="_blank" href="${url}"><div style="background:#34b2b8; color:#fff; font-size: 12pt;
              		font-family:Arial; display:inline-block; padding:7px 15px; border-radius:3px; margin-top:25px;">
              			Confirm Your Email
              		</div></a>

              	</div><br>
              	<div style="display: inline-block; font-size: 10pt;
              		font-family:Arial; color:#AFAFAF; margin-top:15px">
              			Tenect | 77900 Country Club Dr | Palm Desert, CA 92211
              		</div>
              </div>
              `;
              let mailOptions = {
                from: '"Tenect Support" <support@tenect.com>', // sender address
                to: user.email, // list of receivers
                subject: 'Welcome to Tenect!', // Subject line
                text: 'Hello world?', // plain text body
                html: emailOutput // html body
              };
              console.log({email:user.email})

              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
              });

              res.json({
                  token
               })
            })


          }else{
            if(result.length >= 1){
              res.status(401).json({errors: {form : "Username exists" } });
            }
            if(firstResult.length >= 1){
              res.status(401).json({errors: {form : "Email is already in use" } });
            }
          }
      })
  })
})





}
