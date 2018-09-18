// Require the node-sentiment module
var sentiment = require('node-sentiment');
// Data input
const text = 'huy is little dumb';
// Service
const sentimentService = (textParam) => {
    if (typeof textParam === 'undefined' || textParam === null) {
        return false;
    } else {
        return sentiment(textParam.trim(), 'en');
    }
}
// Run
console.log(sentimentService(text))