const { initializeApp } = require('firebase-admin/app');
const {getDatabase, getDatabaseWithUrl} = require('firebase-admin/database')
const admin = require('firebase-admin');

const firebaseConfig = {
    apiKey: "AIzaSyAH8MpedAHMXK4NthVHc6bz2hxf_e1AZnY",
    authDomain: "book-web-app-dc65f.firebaseapp.com",
    projectId: "book-web-app-dc65f",
    storageBucket: "book-web-app-dc65f.appspot.com",
    messagingSenderId: "297935202745",
    appId: "1:297935202745:web:a05fe6d534992f57c82e68",
    measurementId: "G-EB7JYE2XEP",
    credential: admin.credential.cert(require('/Users/malvikavaidya/Downloads/book-web-app-dc65f-firebase-adminsdk-difc2-d4a496090f.json')),
    databaseURL: "https://book-review-storage.firebaseio.com/"
  };

const app = admin.initializeApp(firebaseConfig);
var db = getDatabaseWithUrl('https://book-review-storage.firebaseio.com/');

module.exports = {db};