/* eslint-env node */

const admin = require("firebase-admin");
let serviceAccount = JSON.parse(decodeURI(process.env.FIREBASE_ADMIN_JSON));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
let db = admin.firestore();

module.exports = db;
