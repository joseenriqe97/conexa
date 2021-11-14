import axios from "axios";

const URL = "http://localhost:3003/api"

export const URL_IMAGES = "https://conexa.ai/wp-content/uploads/2021/03/logo.svg"

export const httpPrivate = axios.create({
 baseURL: `${URL}/placeholder/`,
 headers: {
  'Authorization': localStorage.getItem('_token') as string
 }
})

export const httpPublic = axios.create({
 baseURL: `${URL}/user/`
})
