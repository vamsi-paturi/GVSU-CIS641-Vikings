// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  APIEndpoint: 'http://localhost:3000/api',
  // DOMAIN_URL: 'http://localhost:4200/',
  // APIEndpoint: 'http://3.104.54.15:3000/api/v1',
  // DOMAIN_URL: 'http://3.104.54.15:5000/',
  // APIEndpoint: 'https://dev-api.kwixconnect.com/api/v1',
  //APIEndpoint: 'http://localhost:3000/api',
  DOMAIN_URL: 'https://dev-api.kwixconnect.com/',

  defaultPageSize: 10,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
