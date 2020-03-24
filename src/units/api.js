import { fetchApi } from './request'
export function fetchHome() {
  return fetchApi(`/api/users`)
}
export function fetchList() {
  return fetchApi(`/api/users/1`)
}