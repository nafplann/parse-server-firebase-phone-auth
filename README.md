# Parse-Server-phone-Firebase-auth
An module to login users in parse server with phone numbers using Firebase Auth.

## Install Module (Server Side)
1. Open tour SSH client and enter your credentials
2. Go to your Parse-server-exemple folder and run
   eg. $ cd /home/demo/parse-server-exemple
3.
```js
npm i -S parse-server-phone-firebase-auth
```
4. Copy the `firebaseAccountKey.json` from Firebase into your folder, maybe root of your project's folder.
5. Add new environment into your `.env` or using export in your terminal.
```js
// firebaseAccountKey.json store in root of project.
FIREBASE_SERVICE_ACCOUNT_KEY = '../../firebaseAccountKey.json'

// URL for connect to Firebase database.
FIREBASE_DATABASE_URL = "https://SOME_ID.firebaseio.com"
```

6. Edit the index.js file in parse-server-example and configure ParseServer with oauth, 
     you can find this in parse server docs https://github.com/ParsePlatform/parse-server/wiki/OAuth
     
     Make sure to setup the accountkit oauth when starting your parse server:

```js
var api = new ParseServer({
    ...
    auth: {
        firebase: {
        module: 'parse-server-phone-firebase-auth',
        serviceAccount: 'path/to/serviceAccountKey.json',
        databaseURL: 'https://yourAppId.firebaseio.com'
        }
    }
});
```

### Get FirebaseAccount.json in firebase Conseole

7. Go to https://console.firebase.google.com
   if you not have an Developer Account register one then go to the next step
   if you already have one, then just go to the next step
8. Select or create your App in developer Console.
9. Go to this link: https://console.firebase.google.com/u/0/project/_/settings/serviceaccounts/adminsdk
10. Click on click in your Project and in GENERATE NEW PRIVATE KEY
11. Save the file and also use it Step # 4

## Cliente Side (Android)

1. Soon...

## Cliente Side (iOS)

1. Soon...
## Cliente Side (Web)

1. Soon...

Note. Ww will update this repo as soon possible.
