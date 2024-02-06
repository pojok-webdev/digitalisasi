save = (obj,callback) => {
    sql = 'insert into dataarchives '
    sql+= '(subject,category_id,owner_id,releasedate,expiredate,description)'
    sql+= 'values '
    sql+= '("'+obj.subject+'",'+obj.category_id+','+obj.owner_id+',"'+obj.releasedate+'","'+obj.expiredate+'","'+obj.description+'")'
    obj.i.doQuery(sql,result=>{
        callback(result)
    })
}
module.exports = {
    save:save
}