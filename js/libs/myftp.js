const ftp = require('basic-ftp')
async function send(obj){
    console.log('Obj received',obj)
    const client = new ftp.Client()
    client.ftp.verbose = true
    try{
        await client.access({
            host:obj.host,
            user:obj.user,
            password:obj.password,
            secure:false
        })
        console.log(await client.list())
        await client.uploadFrom(obj.src,obj.dst)
    }
    catch(err){
        console.log(err)
    }
    client.close()
}
module.exports = {
    send:send
}