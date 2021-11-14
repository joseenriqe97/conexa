import { httpPublic } from "../lib/client";
import { requestLogin, ResponseLogin } from "../model/user";

export const authUser = (request: requestLogin): Promise<ResponseLogin> => {
  return httpPublic
    .post("auth", request)
}