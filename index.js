var i = require('./js/appInit')
i.app.get('/lists/:mode/:model',(req,res)=>{
    params = req.params
    switch(params.mode){
      case 'view':
        res.render('lists/table',{
          title:'lists',path:'/lists/data/'+params.model,
          mode:params.mode,
          columns:i.listRoute.getColumns({type:params.model})
        })
      break
      case 'data':
        i.listRoute.getData({type:params.model,i:i,session_id:req.cookies.session_id},result=>{
          res.send({'data':result})
        })
      break
  }
  })
  i.app.get('/getdata/:type/:params/:filter',(req,res)=>{
    params = req.params
    i.listRoute.getData({type:params.type,i:i,filter:params.filter},result=>{
      res.send({"data":result})
    })
  })
i.app.get('/tables',(req,res)=>{
    res.render('main/table',{
      title:'data digital',
      columns:i.listRoute.getColumns({type:'test',i:i}),
      path:'getdata/test/test/test'//i.listRoute.getPath({type:'test',i:i})
    })
})
i.app.post('/uploader',(req,res)=>{
  params = req.body
  console.log('PARAMS GOT',req)
  form = new i.formidable.IncomingForm()
  form.parse(req,function(err,fields,files){
    if(err){
      next(err)
      return
    }
    res.json({fields,files})
  })
  form.on('file',function(field,files){
    console.log('file',files.filepath)
    i.fs.rename(files.filepath,'apalah.png',err=>{
      console.log("err",err)
    })
  })
  form.on('end',function(){
    i.myftp.send({
      host:i.setting.ftp.host,
      user:i.setting.ftp.user,
      password:i.setting.ftp.password,
      src:'apalah.png',dst:'/homes/puji/bebek.png'
    })
  })
})


i.app.post('/uploadist', (req, res, next) => {
	const form = new i.formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		let oldPath = files.upload[0].filepath;
		let newPath = files.upload[0].originalFilename
		let rawData = i.fs.readFileSync(oldPath)
		i.fs.writeFile(newPath, rawData, function (err) {
			if (err) console.log(err)
      i.myftp.send({
        host:i.setting.ftp.host,
        user:i.setting.ftp.user,
        password:i.setting.ftp.password,
        src:files.upload[0].originalFilename,
        dst:'/homes/puji/'+files.upload[0].originalFilename
      })
//			return res.send("Successfully uploaded")
        res.render('/tables')
		})
	})
})
i.app.get('/testmove',(req,res)=>{
  fs = i.fs
  fs.rename('/home/klien/www/jsserver/digitalisasi/catatan.txt','/home/klien/www/jsserver/digitalisasi/heiho.png',function(err){
    console.log('err',err)
  })
})
i.app.get('/testupload',(req,res)=>{
  res.render('test/upload',{})
})
i.app.get('/tesftp',(req,res)=>{
  i.myftp.send(i.setting.ftp)
})
i.app.get('/movetolavender/:dstname',(req,res)=>{
  params = req.params
  i.myftp.send({
    host:i.setting.ftp.host,
    user:i.setting.ftp.user,
    password:i.setting.ftp.password,
    src:'iniloh.png',dst:'/homes/puji/'+params.dstname
  })
})
i.app.listen(i.setting.port,_=>{
      console.log('Digitalisasi start at port ',i.setting.port)
})