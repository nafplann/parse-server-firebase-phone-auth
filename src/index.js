import * as admin from "firebase-admin";
const Parse = require('parse/node').Parse;

export class FirebaseAuth {
  constructor(options) {
    if (!options) {
      throw new Parse.Error(
        Parse.Error.INTERNAL_SERVER_ERROR,
        'No options passed to firebase auth'
      );
    }

    if (!options.serviceAccountPath) {
      throw new Parse.Error(
        Parse.Error.INTERNAL_SERVER_ERROR,
        'serviceAccountPath is required'
      );
    }

    if (!options.databaseURL) {
      throw new Parse.Error(
        Parse.Error.INTERNAL_SERVER_ERROR,
        'databaseURL is required'
      );
    }

    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert(require(options.serviceAccountPath)),
        databaseURL: options.databaseURL
      });
    }
  }

  validateAuthData(authData, options) {
    return admin.auth().verifyIdToken(authData.access_token)
      .then(function (decodedToken) {
        if (decodedToken && decodedToken.phone_number == authData.id) {
          return;
        }

        throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, 'Firebase auth not found for this user.');

      }).catch(function (error) {
        throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, 'Firebase auth is invalid for this user.');
      });
  }

  validateAppId() {
    return Promise.resolve();
  }
}

export default FirebaseAuth;
module.exports = FirebaseAuth;
