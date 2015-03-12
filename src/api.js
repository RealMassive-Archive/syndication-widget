var request = require('browser-request');
var BASE_URL = 'https://www.realmassive.com/';
var API_URL = BASE_URL+'api/v1/';

var api = {
    getSpaces: getSpaces,
    getSpace: getSpace
};

module.exports = api;

function getSpaces(page, limit, callback){

    var offset = limit * (page - 1);
    request( API_URL + "spaces/search?building.address.city=Austin&building.address.state=TX&offset=" +offset +"&limit="+limit, callback);

}

function getSpace(spaceId, callback){
    console.log(spaceId);
    request( API_URL + "spaces/" + spaceId, callback);
}

