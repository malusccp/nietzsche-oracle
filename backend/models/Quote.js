const moongose = require('mongoose');

const QuoteSchema = new moongose.Schema({
    id: Number,
    advice: String,

});

module.exports = moongose.model('Quote', QuoteSchema)