i = require('./js/appInit')
f = require('./js/testftp')
i.app.get('/tes',(req,res)=>{
    f.example()
})
i.app.listen(2000,res=>{
    console.log("testftp running on port 2000")
})