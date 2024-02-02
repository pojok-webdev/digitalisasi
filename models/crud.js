inp = {
    tablename:'',
    keys:[{nama:"nama"}]
}
backuptable = (obj,callback) => {
    sql = 'drop table if exists '+obj.tablename+'; '
    sql+= 'create table '+obj.tablename +' '
    sql+= '('+obj.keys+')'
}

module.exports = {
    backuptable:backuptable
}