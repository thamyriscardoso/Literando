const firebase = require('firebase');
import {config} from './config.js';
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export const database = firebase.database();
export const auth = firebase  .auth();
