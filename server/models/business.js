let mongoose = require('mongoose');
let Schema = mongoose.Schema; // alias
let Model = mongoose.model; // alias

let BusinessSchema = Schema({
    name:String,
    contactNumber: Number,
    email:String
},
{
    collection: 'business'
});

module.exports.Model = Model('Business', BusinessSchema);