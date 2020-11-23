var path = require('path');
var Crypto = require('./model');
var routes = function(app) {
    /* app.get('/crypto', function(req, res) {
        Crypto.find({}, function(err, result) {
            if ( err ) throw err;
            res.json(result);
            console.log("routes result: " + result);
        });
    }); */

    app.get('/crypto', function(req, res) {
        Crypto.aggregate([
            {$group:{_id:"$Currency",docs:{$push: '$$ROOT'}}}, 
            {$project:{docs:{$slice:["$docs", 30]}}}], function(err, result) {
            if ( err ) throw err;
            res.json(result);
            //console.log("routes result: " + JSON.stringify(result));
        });
    });
   
   
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname + '/public', 'index.html'));
    });
};
module.exports = routes;