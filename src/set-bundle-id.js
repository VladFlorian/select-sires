const replace = require('replace-in-file');
var fs = require('fs');

const filenameCopy = 'capacitor.config.json.copy';
const filename='capacitor.config.json'

require('dotenv').config();

const options = {
  files: './' + filename,
  from: /---APPBUNDLEID---/g,
  to: process.env.APP_BUNDLE_ID,
};
//copies file then does the replace
fs.copyFile(filenameCopy,filename,(err) =>{
  if(err) throw err;
  replace(options)
  .then(results => {
    console.log('Replacement results:', results);

  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
})
