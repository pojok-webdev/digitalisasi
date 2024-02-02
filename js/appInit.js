var express = require('express'),
app = new express(),
setting = require('./appSetting'),
con = require('./connection'),
logging = require('./../assets/app/logging'),
sha1 = require('sha1'),
sessions = require('express-session'),
bodyParser = require('body-parser'),
mailer = require("nodemailer"),
mail = require('./../js/mail'),
modelsubscription = require('./../models/subscriptions'),
modellocation = require('./../models/locations'),
reports = require('../models/reports'),
crud = require('./orm/crud'),
cookieParser = require('cookie-parser'),
reportRoute = require('./reportRoute'),
formidable = require('formidable'),
fs = require('fs'),
myftp = require('./libs/myftp'),
basicftp = require('basic-ftp'),
path = require('path'),
listRoute = require('./listRoute')
app.set('views', './views');
app.set('view engine','ejs')
app.use(express.static(__dirname + '/..'));
app.use(bodyParser.json({'limit':'10mb',extended:true}))
app.use(bodyParser.urlencoded({'limit':'10mb',extended:true}))
app.use(cookieParser())
app.use(sessions({
    secret:'haha',
    saveUninitialized:true,
    cookie:{maxAge:1000*24*60*60},
    resave:false
}))
console.log("DIRNAME",__dirname)
module.exports = {
    app:app,
    setting:setting,
    con:con,
    sha1:sha1,
    logging:logging,
    mailer:mailer,
    mail:mail,
    crud:crud,
    reportRoute:reportRoute,reports:reports,
    modelsubscription:modelsubscription,
    modellocation:modellocation,
    listRoute:listRoute,formidable:formidable,fs:fs,path:path,myftp:myftp
}