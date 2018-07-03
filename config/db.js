const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: 'mongodb://localhost:27017/mern-stack',
    secret: crypto,
    db: 'mearn-stack'
}