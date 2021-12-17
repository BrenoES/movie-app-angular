const { writeFile } = require('fs');
const { argv } = require('yargs');

declare var process: {
  env: {
    API_URL: string;
    MOVIE_API_KEY: string;
    firebase_apiKey: string;
    firebase_authDomain: string;
    firebase_databaseURL: string;
    firebase_projectId: string;
    firebase_storageBucket: string;
    firebase_messagingSenderId: string;
    firebase_appId: string;
  };
};

// read environment variables from .env file
require('dotenv').config();
// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;
// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   API_URL: '${process.env.API_URL}',
   MOVIE_API_KEY: '${process.env.MOVIE_API_KEY}',
   firebase: {
    apiKey:'${process.env.firebase_apiKey}',
    authDomain:'${process.env.firebase_authDomain}',
    databaseURL:'${process.env.firebase_databaseURL}',
    projectId:'${process.env.firebase_projectId}',
    storageBucket:'${process.env.firebase_storageBucket}',
    messagingSenderId:'${process.env.firebase_messagingSenderId}',
    appId:'${process.env.firebase_appId}',
  }
};
`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
