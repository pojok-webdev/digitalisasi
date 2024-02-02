const { fs, path } = require("./appInit")

async function moveFile(oldPath,newPath){
    await fs.mkdir(path.dirname(newPath),{recursive:true})
    return fs.rename(oldPath,newPath)
}
module.exports = {
    moveFile:moveFile
}