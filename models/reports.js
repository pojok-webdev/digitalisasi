const { doQuery } = require('../js/connection')
laporandowntime = (obj,callback) => {
    sql = 'select id, kdticket,clientname,location_id,cause,requesttype from ticketodoo '
    sql+= 'where status="0"';
    doQuery(sql,result=>{
        callback(result)
    })
}
laporanticketterselesaikan = (obj,callback) => {
    sql = 'select id, kdticket,clientname,location_id,cause,requesttype from ticketodoo '
    sql+= 'where status="1"';
    doQuery(sql,result=>{
        callback(result)
    })
}
laporanticketterbuka = (obj,callback) => {
    console.log('OBJ',obj)
    sql = 'select id, kdticket,clientname,location_id,cause,requesttype from ticketodoo '
    sql+= 'where status="1"';
    if(obj.filter!='none'){
        sql+='and ticketstart>"'+obj.filter.ticketstart+'" '
        sql+='and ticketend<"'+obj.filter.ticketend+'" '
    }
    doQuery(sql,result=>{
        console.log('sql',sql)
        console.log('result',result)
        callback(result)
    })
}
filterpelanggan = callback => {
    sql = 'select distinct id,clientname from ticketodoo '
    sql+= 'where clientname is not null '
    doQuery(sql,result=>{
        callback(result)
    })
}
module.exports = {
    laporanticketterbuka:laporanticketterbuka,
    laporanticketterselesaikan:laporanticketterselesaikan,
    laporandowntime:laporandowntime,filterpelanggan:filterpelanggan
}