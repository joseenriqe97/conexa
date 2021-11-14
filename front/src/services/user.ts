import { httpPublic } from "../lib/client";
import { requestLogin, ResponseLogin } from "../model/user";

export const authUserService = (request: requestLogin): Promise<ResponseLogin> => {
  return httpPublic
    .post("auth", request)
}

export const createUserService = (request: requestLogin): Promise<ResponseLogin> => {
  return httpPublic
    .post("", request)
}