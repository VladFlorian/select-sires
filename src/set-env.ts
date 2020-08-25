
import { writeFile } from 'fs';

// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';
const targetPathProd = './src/environments/environment.prod.ts';
// Load node modules
const colors = require('colors');
require('dotenv').config();

// `environment.ts` file structure
const envConfigFile = `export const environment = {
  production: false,
  firebase:{
    apiKey: '${process.env.SELECT_SIRES_API_KEY}',
    authDomain: '${process.env.SELECT_SIRES_FIREBASE_AUTH_DOMAIN}',
    databaseURL: '${process.env.SELECT_SIRES_FIREBASE_DATABASE_URL}',
    projectId: '${process.env.SELECT_SIRES_FIREBASE_PROJECT_ID}',
    storageBucket: '${process.env.SELECT_SIRES_FIREBASE_STORAGE_BUCKET}',
    messagingSenderId: '${process.env.SELECT_SIRES_FIREBASE_MESSAGING_SENDER_ID}',
    appId: '${process.env.SELECT_SIRES_FIREBASE_APP_ID}',
    measurementId: '${process.env.SELECT_SIRES_FIREBASE_MEASUREMENT_ID}'
  }
};
`;

const envConfigFileProd = `export const environment = {
  production: true,
  firebase:{
    apiKey: '${process.env.SELECT_SIRES_API_KEY}',
    authDomain: '${process.env.SELECT_SIRES_FIREBASE_AUTH_DOMAIN}',
    databaseURL: '${process.env.SELECT_SIRES_FIREBASE_DATABASE_URL}',
    projectId: '${process.env.SELECT_SIRES_FIREBASE_PROJECT_ID}',
    storageBucket: '${process.env.SELECT_SIRES_FIREBASE_STORAGE_BUCKET}',
    messagingSenderId: '${process.env.SELECT_SIRES_FIREBASE_MESSAGING_SENDER_ID}',
    appId: '${process.env.SELECT_SIRES_FIREBASE_APP_ID}',
    measurementId: '${process.env.SELECT_SIRES_FIREBASE_MEASUREMENT_ID}'
  }
};
`;

console.log(colors.magenta('Writing file environment.ts and '));

writeFile(targetPath, envConfigFile, function(err) {
  if (err) {
      throw console.error(err);
  } else {
      console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
  }
});

writeFile(targetPathProd, envConfigFileProd , function(err) {
  if (err) {
      throw console.error(err);
  } else {
      console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
  }
});


