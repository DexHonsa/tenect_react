var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config.js');
var api = require('./routes/api');
var json2xls = require('json2xls');
var xlsxtojson = require("xlsx-to-json-lc");
var multer = require('multer');
var CircularJSON = require('circular-json');
var Excel = require('exceljs');
var workbook = new Excel.Workbook();
var exphbs = require('express-handlebars');
var nodemailer = require('nodemailer');
//body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client/build')));

mongoose.connect('mongodb://tenect:Tenect1!@tenect-shard-00-00-4a4fj.mongodb.net:27017,tenect-shard-00-01-4a4fj.mongodb.net:27017,tenect-shard-00-02-4a4fj.mongodb.net:27017/tenect?ssl=true&replicaSet=Tenect-shard-0&authSource=admin');
var db = mongoose.connection;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// create reusable transporter object using the default SMTP transport
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
let transporter = nodemailer.createTransport({
  host: 'mail.commonbrain.io',
  maxConnections: 1,
  port: 587 ,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'support@commonbrain.io', // generated ethereal user
    pass: 'Support1!' // generated ethereal password
  },
  tls: {
    //ciphers: 'SSLv3',
    rejectUnauthorized: false,
    secureProtocol: "TLSv1_method"
  }
  //ignoreTLS:true
});
//console.log('sending....');

app.post('/send', (req, res) => {
  const output = `
  <div style="background:#f8f8f8; text-align: center; width:100%; padding:30px 15px;box-sizing: border-box;">
	<div style="max-width: 500px; width:100%; background:#fff; padding:15px; text-align: center;display: inline-block; border:solid 1px #eaeaea; border-radius: 3px;box-sizing: border-box;">
	<div style="">
		<img src="https://commonbrain.io/img/logo_color_with_line.png" alt="" height="100px">
	</div>
		<div style="color:#000;  font-size: 12pt; font-family: Arial; font-weight: bold; margin:10px 0px; display: inline-block">Welcome To CommonBrain<sup>TM</sup></div>
		<div style=" font-size: 10pt;
		color:#808080;
		font-family:Arial;
		">
			Thank you for joining CommonBrain!  Your email has been setup and you are ready to start using our software.  If you need any help, click the button below to get help quickly and easily!
		</div>
		<a target="_blank" href="https://commonbrain.com"><div style="background:#66d0f7; color:#fff; font-size: 12pt;
		font-family:Arial; display:inline-block; padding:7px 15px; border-radius:3px; margin-top:25px;">
			Learn More
		</div></a>

	</div><br>
	<div style="display: inline-block; font-size: 10pt;
		font-family:Arial; color:#AFAFAF; margin-top:15px">
			CommonBrain | 77900 Country Club Dr | Palm Desert, CA 92211
		</div>
    </div>
  `;


  // setup email data with unicode symbols
  let mailOptions = {
    from: '"CommonBrain Support" <support@commonbrain.io>', // sender address
    to: 'dexhonsa@hotmail.com', // list of receivers
    subject: 'Welcome to CommonBrain!', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    //res.send(output);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
})
app.route('/api/login').post(api.LoginCheck);
app.route('/confirmation/:token').get(api.ConfirmEmail);
app.route('/api/users').get(api.Users);


app.route('/api/sign_up').post(api.SignUpUser);
//application api
app.route('/api/applications').get(api.getApplications);

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

app.use(json2xls.middleware);
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb'}));
var jsonArr = [
  {
    'Location #': '',
    'Location Name': '',
    'Address': '',
    'State': '',
    'City': '',
    'Zip Code': '',
    'Square Feet': '',
    'Lat': '',
    'Long': ''
  }
];
app.get('/xlfile', function(req, res) {
  res.xls('template.xlsx', jsonArr);
})
app.listen(config.expressPort, function() {
  console.log("Express server listening on port %d in %s mode", config.expressPort, app.settings.env);
});
