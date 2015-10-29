var Merge = require('broccoli-merge-tree');
var Sass = require('broccoli-sass');

var stylePaths = [
  'sass',
  'bower_components/normalize-css',
  'bower_components/bourbon/app/assets/stylesheets',
  'bower_components/neat/app/assets/stylesheets',
  'bower_components/yoga-sass/assets',
  'bower_components/font-awesome/scss',
];

var styles = new Sass(stylePaths, 'app.scss', 'app.css');

module.exports = new Merge(['public', styles], {overwrite: true});
