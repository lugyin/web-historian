var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../web/archives/sites.txt'),
  'home' : path.join(__dirname, '../web/public/index.html'),
  'loading' : path.join(__dirname, '../web/public/loading.html')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!


exports.isUrlInList = function(url){
  // fs.readFile(exports.paths.list, function(err, data){
  //     if(err){
  //       console.log(err);
  //       return false;
  //     } else {
  //       return data.toString().indexOf(url) > 0 ? true : false;
  //     }
  // });
  var result = fs.readFileSync(exports.paths.list);
  return result.toString().indexOf(url) > 0 ? true : false;
};

exports.addUrlToList = function(data){
  fs.appendFile(exports.paths.list, data, function(error){
    if (error){
      throw err;
    } else {
      console.log('appended successfully!');
    }
  });
};

exports.isURLArchived = function(url){
  var newUrlFilePath = exports.paths.archivedSites + '/' + url.split('.').join('') + '.html';
  return fs.existsSync(newUrlFilePath);
};

exports.readListOfUrls = function(){
  fs.readFile(exports.paths.list, function(err, data){
    if (err){
      console.log(err);
    } else {
      //do something with data

    }
  });
};

exports.downloadUrls = function(){
};
