# parse-server-firebase-phone-auth

An module to login users in parse server with phone numbers using Firebase Auth.

## Get Your Service Account From Firebase Console

1. Go to https://console.firebase.google.com
   if you doesn't have an Developer Account register one then go to the next step
   if you already have one, then just go to the next step
2. Select or create your App in developer Console.
3. Go to this link: https://console.firebase.google.com/u/0/project/_/settings/serviceaccounts/adminsdk
4. Click on click in your Project and in GENERATE NEW PRIVATE KEY
5. Save the file as `firebaseServiceAccount.json`

## Install Module (Server Side)

1. Open tour SSH client and enter your credentials
2. Go to your parse-server-example folder and run
   eg. \$ cd /home/demo/parse-server-exemple
3.

```js
npm i --save parse-server-firebase-phone-auth
```

4. Copy the `firebaseServiceAccount.json` from Firebase into your folder, ex. root of your project's folder.

5. Edit the index.js file in parse-server-example and configure ParseServer with oauth,
   you can find this in parse server docs https://github.com/ParsePlatform/parse-server/wiki/OAuth
   Make sure to setup the accountkit oauth when starting your parse server:

```js
var api = new ParseServer({
    ...
    auth: {
        firebase: {
            module: 'parse-server-firebase-phone-auth',
            serviceAccount: 'path/to/firebaseServiceAccount.json',
            databaseURL: 'https://yourAppId.firebaseio.com'
        }
    }
});
```

## Client Side (React Native)

1. You'll need to install rnfirebase and rnfirebase auth
