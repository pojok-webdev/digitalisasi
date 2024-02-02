doRoute = (obj,callback) => {
    console.log('obj doRoute',obj)
    switch(obj.type){
        case 'test':
            callback('mainreportpage/'+obj.type)
        break
    }
}
getPath = (obj) => {
    switch(obj.type){
        case "test":
            return('getpath/'+obj.type)
        break
    }
}
submenu = _=>{
    return "<button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown'> Action </button> <div class='dropdown-menu'> <a class='dropdown-item' href='#'>Jadikan Favorit</a> <a class='dropdown-item' href='#'>Lihat Dokumen</a> <a class='dropdown-item' href='#'>Unduh Dokumen</a> <div class='dropdown-divider'></div> <a class='dropdown-item' href='#'>Hapus</a> </div>"
}
getData = (obj,callback) => {
    switch(obj.type){
        case 'test':
            callback([
                ["judl1","kateg1","I Ketut Ariana","keteraangan 1","11 jan 24","11 jan 24","Puji P, I Ketut Ariana",submenu()],
                ["judl2","kateg2","I Ketut Ariana","keteraangan 1","11 jan 24","11 jan 24","Puji P, I Ketut Ariana",submenu()],
                ["judl3","kateg3","Habdal Hastanto","keteraangan 1","11 jan 24","11 jan 24","Puji P, Habdal Hastanto, I Ketut Ariana",submenu()],
                ["judl4","kateg1","Habdal Hastanto","keteraangan 1","11 jan 24","11 jan 24","Puji P, Habdal Hastanto, I Ketut Ariana",submenu()],
                ["judl5","kateg5","Puji P","keteraangan 1","11 jan 24","11 jan 24","Puji P, I Ketut Ariana",submenu()],
                ["judl6","kateg6","Puji P","keteraangan 1","11 jan 24","11 jan 24","Puji P, I Ketut Ariana",submenu()]
            ])
    }
}
getColumns = obj => {
    switch(obj.type){
        case 'test':
            return ["judul","kategori","pemilik","deskripsi","tgl terbit","tgl kedaluwarsa","Pemilik Akses","Aksi"]
        break
    }
}
module.exports = {
    doRoute:doRoute,getPath:getPath,getData:getData,getColumns
}