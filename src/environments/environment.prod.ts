export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
  case 'feedaneed.herokuapp.com':
    APIURL = 'https://feedtheneed.azurewebsites.net'
    break;
  default:
    APIURL = 'http://localhost:44381';
}