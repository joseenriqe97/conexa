import httpClient from 'axios';
import { URL_PLACE_HOLDER } from '../config/constants';

export const getPostJsonPlaceHolder = async () => {
  try {
    const { data } = await httpClient.get(`${URL_PLACE_HOLDER}/posts`);
    return data;
  } catch (e) {
    throw new Error(e.toString());
  }
};

export const getPhotoJsonPlaceHolder = async () => {
  try {
    const { data } = await httpClient.get(`${URL_PLACE_HOLDER}/photos`);
    return data;
  } catch (e) {
    throw new Error(e.toString());
  }
};
