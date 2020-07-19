const path = require('path');
module.exports = {
    entry: ['./public/index1.js', './public/index2.js'],
    output: {
        path: path.resolve(__dirname, 'dist'), //形成一个绝对经
        filename: '[name].js'
    }
}