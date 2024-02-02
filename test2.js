   // import fs from 'node:fs/promises';
//    import path from 'node:path';
i = require('./js/appInit')
    const oldPath = '~/Documents/config.php';
    const newPath = '~/Documents/tesyaa.xxx';

    // Create a helper function
    async function moveFile(oldPath, newPath) {
        // 1. Create the destination directory if it does not exist
        // Set the `recursive` option to `true` to create all the subdirectories
        await i.fs.mkdir(path.dirname(newPath), { recursive: true });

        // 2. Rename the file (move it to the new directory)
        // Return the promise
        return i.fs.rename(oldPath, newPath);
    }
async function executt(){
    try {
        await moveFile(oldPath, newPath);

        // Handle success
        console.log('File moved successfully');
    } catch (error) {
    // Handle the error
    console.error(error);
    }}
    i.app.get('/do',(req,res)=>{
        executt()
    })
    i.app.listen(2000,_=>{
        console.log('Digitalisasi start at port ',2000)
    })