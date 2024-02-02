const axios = require('axios');
subscriptionLocations = (obj,callback) => {
    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: obj.i.setting.server.url+'/api/sale.subscription.line?query={'
    +'id,name,display_name,'
    +'product_id{name,display_name},'
    +'analytic_account_id{name,display_name},'
    +'site_location_id{id,address,kota_id{name},kecamatan_id{name},kelurahan_id{name}}'
    +'}&'
    +'filter=[["site_location_id","!=",false]]',
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
subscriptionLocs = (obj,callback) => {
    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: obj.i.setting.server.url+'/api/sale.subscription?query={name, user_id{id,name}, recurring_invoice_line_ids{product_id, name, quantity, price_unit,site_location_id{id,name,address}},partner_id{id,name}}&filter=[["recurring_invoice_line_ids.site_location_id","=",false]]',
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
module.exports = {
    subscriptionLocations:subscriptionLocations,
    subscriptionLocs:subscriptionLocs
}