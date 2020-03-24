import { host } from './host'
export function fetchApi(api) {
  return fetch(`${host}${api}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      return myJson
    });
}