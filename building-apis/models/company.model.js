const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CompanySchema = new Schema({
    name: {
        required: true,
        type: String
    },
    city: String,
    address: String
});

module.exports = mongoose.model('Company', CompanySchema);