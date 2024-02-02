const axios = require('axios');
gets = (obj,callback) => {
    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: obj.i.setting.server.url+'/api/res.partner?query={id,name,customernumber,type,is_company}',
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
    gets:gets
}