var mongoose = require('mongoose');
//const Double = require('@mongoosejs/double');
var SchemaTypes = mongoose.Schema.Types;
var dbHost = 'mongodb://localhost:27017/Cryptos';

mongoose.connect(dbHost, { useNewUrlParser: true } );
mongoose.connection;
mongoose.set('debug', true);
var cryptoSchema = mongoose.Schema( {
   _id: String,
   Currency: String,
   Date: Date,
   Open: String,
   High: String,
   Low: String,
   Close: String,
   Volume: String,
   MarketCap: String
});
var Crypto = mongoose.model('Crypto', cryptoSchema);
//console.log("model: " + cryptos);
module.exports = Crypto;