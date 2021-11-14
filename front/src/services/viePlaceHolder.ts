import { httpPrivate } from "../lib/client";
import { requestPhotos, ResponsePhotos, ResponsePost } from "../model/viewPlaceHolder";



export const getPost = (): Promise<ResponsePost> => {
  return httpPrivate
    .get("post")
}

export const getPhoto = (params: requestPhotos): Promise<ResponsePhotos> => {
  return httpPrivate
    .get("photo", { params })
}