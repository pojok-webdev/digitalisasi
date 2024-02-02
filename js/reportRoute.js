doRoute = (obj,callback) => {
    console.log('obj doRoute',obj)
    switch(obj.type){
        case 'laporandowntime':
            callback('mainreportpage/'+obj.type)
        break
        case 'laporanticketterselesaikan':
            callback('mainreportpage/'+obj.type)
        break
        case 'laporanticketterbuka':
            callback('mainreportpage/'+obj.type)
        break
        case 'filterpelanggan':
            callback('mainreportpage/'+obj.type)
        break
    }
}
getPath = (obj,callback) => {
    switch(obj.type){
        case 'laporandowntime':
            callback('getpath/'+obj.type)
        break
        case 'laporanticketterselesaikan':
            callback('getpath/'+obj.type)
        break
        case 'laporanticketterbuka':
            callback('getpath/'+obj.type)
        break    
        case 'filterpelanggan':
            callback('getpath/'+obj.type)
        break    
    }
}
getData = (obj,callback) => {
    console.log('obj getdata',obj)
    switch(obj.type){
        case 'laporandowntime':
            obj.i.reports.laporanticketterbuka({},rpts=>{
                console.log('rpts',rpts)
                callback(rpts.map(row=>{
                    return [
                        row.kdticket,
                        row.clientname,
                        row.location_id,
                        row.cause,
                        row.requesttype
                    ]
                }))
            })
        break
        case 'laporanticketterselesaikan':
            obj.i.reports.laporanticketterselesaikan({},rpts=>{
                console.log('rpts',rpts)
                callback(rpts.map(row=>{
                    return [
                        row.kdticket,
                        row.clientname,
                        row.location_id,
                        row.cause,
                        row.requesttype
                    ]
                }))
            })
        break
        case 'laporanticketterbuka':
            console.log('getdata obj',obj)
            obj.i.reports.laporanticketterbuka({filter:obj.filter},rpts=>{
                callback(rpts.map(row=>{
                    return [
                        row.kdticket,
                        row.clientname,
                        row.location_id,
                        row.cause,
                        row.requesttype
                    ]
                }))
            })
        break
        case 'filterpelanggan':
            obj.i.reports.filterpelanggan(fltr=>{
                console.log('fltr',fltr)
                callback(fltr.map(flt=>{
                    return [
                        flt.id,
                        flt.clientname
                    ]
                }))
            })
        break
        case 'test':
            callback([
                ["judl1","kateg1","I Ketut Ariana","lokasi1","#penting "],
                ["judl2","kateg2","I Ketut Ariana","lokasi2","#penting "],
                ["judl3","kateg3","Habdal Hastanto","lokasi3","#penting #gapenting"],
                ["judl4","kateg4","Habdal Hastanto","lokasi4","#penting #gapenting"],
                ["judl5","kateg5","Puji P","lokasi5","#penting #ga penting"],
                ["judl6","kateg6","Puji P","lokasi6","#penting #ga penting"]
            ]) 
        break
    }
}
getColumns = obj => {
    switch(obj.type){
        case 'laporandowntime':
            return ["kdticket","nama","alamat","penyebab","type"]
        break
        case 'laporanticketterselesaikan':
            return ["kdticket","nama","alamat","penyebab","type"]
        break
        case 'laporanticketterbuka':
            return ["kdticket","nama","alamat","penyebab","type"]
        break
        case 'filterpelanggan':
            return ["id","nama"]
        break
    }
}
getmodals = obj => {
    switch(obj.type){
        case 'laporandowntime':
            return 'filterdowntime'
        break
        case 'laporanticketterselesaikan':
            return 'filterterselesaikan'
        break
        case 'laporanticketterbuka':
            return 'filterterbuka'
        break
        case 'filterharian':
            return 'filterharian'
        break
    }
}
module.exports = {
    doRoute:doRoute,getPath:getPath,getData:getData,getColumns,getmodals:getmodals
}