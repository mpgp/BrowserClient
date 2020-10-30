// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

interface IEnvironment {
  apiUrl: string;
  clientId: string;
  imageUrl: string;
  production: boolean;
  websocketPath: string;
}

export const environment: IEnvironment = {
  apiUrl: 'http://localhost:5000/api/',
  clientId: 'mpgpclient',
  imageUrl: 'http://localhost:5000/images/avatars/',
  production: false,
  websocketPath: 'ws://localhost:5000/elite-crew',
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
/*  import 'zone.js/dist/zone-error';  // Included with Angular CLI. */
