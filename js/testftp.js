const ftp = require('basic-ftp')
async function example(){
    const client = new ftp.Client()
    client.ftp.verbose = true
    try{
        await client.access({
            host:'192.168.0.234',
            user:'puji',
            password:'puj12021',
            secure:false
        })
        console.log(await client.list())
        await client.uploadFrom('iniloh.png','/homes/puji/okde.png')
        //await client.downloadTo('','')
    }
    catch(err){
        console.log(err)
    }
    client.close()
}
module.exports = {
    example:example
}