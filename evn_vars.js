require('dotenv').config();

module.exports = {
    MESSAGE_STYLE: process.env.MESSAGE_STYLE,
    PORT: process.env.PORT || 3000
}