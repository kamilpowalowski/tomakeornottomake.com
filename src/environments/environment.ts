// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC52eBvBXFV0-P6P8z9ca2X1GjSe-wMeV8',
    authDomain: 'tomakeornottomake.com',
    databaseURL: 'https://to-make-or-not-to-make.firebaseio.com',
    projectId: 'to-make-or-not-to-make',
    storageBucket: 'to-make-or-not-to-make.appspot.com',
    messagingSenderId: '519436964468'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
