const axios = require('axios');
gets = (obj,callback) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: obj.i.setting.server.url+'/api/site.location?'
        +'query={name,address,code,kelurahan_id{id,name},'
        +'kecamatan_id{id,name},kota_id{id,name},'
        +'state_id{id,name},partner_id{id,name,customernumber}}'
        ,
        headers: { 
            'Cookie': 'session_id='+obj.session_id+''
        }
        };
        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            callback(response.data)
        })
        .catch((error) => {
            console.log(error);
            callback(error)
        });    
}
getbyid = (obj,callback) => {
    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: obj.i.setting.server.url+'/api/site.location?'
    +'query={name,address,code,kelurahan_id{id,name},'
    +'kecamatan_id{id,name},kota_id{id,name},'
    +'state_id{id,name},partner_id{id,name}}&'
    +'filter=[["id","=",'+obj.location_id+']]',
    headers: { 
        'Cookie': 'session_id='+obj.session_id+''
    }
    };
    axios.request(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));
        callback(response.data)
    })
    .catch((error) => {
        console.log(error);
        callback(error)
    });
}
update = (obj,callback) => {
    let config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: obj.i.setting.server.url+'/api/site.location?'
    +'filter=[["id","=","6207"]]&'
    +'data={"name":"Jl. Laksda M. Nasir no. 29 Blok A-16 lt. 3  Surabaya"}',
    headers: { 
        'Cookie': 'session_id='+obj.session_id+''
    }
    };

    axios.request(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
    console.log(error);
    });

}
module.exports = {
    gets:gets,getbyid:getbyid
}