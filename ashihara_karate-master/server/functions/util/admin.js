// const admin = require('firebase-admin');

// admin.initializeApp();

// const db = admin.firestore();

// 

var admin = require("firebase-admin");

var serviceAccount = require("../website-63ee1-firebase-adminsdk-zvea9-54b3685fad.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://website-63ee1.firebaseio.com"
});

const db = admin.firestore();
module.exports = { admin, db };