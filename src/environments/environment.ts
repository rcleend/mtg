// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hostUrl: "http://192.168.1.73:3000",
  firebase: {
    apiKey: "AIzaSyC1qe_fIx2VHYWoRFDnTYAlzFW2tXbEcwQ",
    authDomain: "mtgapp-5a05a.firebaseapp.com",
    databaseURL: "https://mtgapp-5a05a.firebaseio.com",
    projectId: "mtgapp-5a05a",
    storageBucket: "mtgapp-5a05a.appspot.com",
    messagingSenderId: "1008548924018"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
