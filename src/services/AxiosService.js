import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})
api.defaults.headers.authorization = JSON.parse(localStorage.getItem('user-token'))


export const yelpApi = Axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/",
  timeout: 8000,
  headers: {
    Authorization: `Bearer 3gmu5uVRP_uikdQaLqN1FwE4d0ErGW51-X68trWp6dVfgg9fH6b8XWrWzuU2Xn90WT70mmCaCqyt7yVTRsQjl3VlIhxve-hHjWZCEk0QyctyR2JJhPZ12MFHsoA1ZHYx`
  }
})