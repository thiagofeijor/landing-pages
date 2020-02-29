var sassdoc = require('sassdoc');
var source = './src/**/*.scss';
var config = {
    dest: './docs'
};
sassdoc(source, config);
