import { httpPrivate } from "../lib/client";
import { requestPhotos, ResponsePhotos, ResponsePost } from "../model/viewPlaceHolder";



export const getPost = (): Promise<ResponsePost> => {
  return httpPrivate
    .get("post", {
      headers: {
        'token': localStorage.getItem('_token') as string
      }
    })
}

export const getPhoto = (params: requestPhotos): Promise<ResponsePhotos> => {
  return httpPrivate
    .get("photo", {
      params,
      headers: {
        'token': localStorage.getItem('_token') as string
      }
    })
}