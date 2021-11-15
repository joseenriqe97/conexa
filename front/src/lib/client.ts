import axios from "axios";

const URL = "https://api-conexa.herokuapp.com/api"

export const URL_IMAGES = "https://conexa.ai/wp-content/uploads/2021/03/logo.svg"

export const httpPrivate = axios.create({
 baseURL: `${URL}/placeholder/`,
 headers: {
  'token': localStorage.getItem('_token') as string
 }
})

export const httpPublic = axios.create({
 baseURL: `${URL}/user/`
})
