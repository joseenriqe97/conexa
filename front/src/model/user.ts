export type ResponseLogin = {
 message: string;
 data?: Data;
}

export type Data = {
 email: string;
 password: string;
 token: string;
}


export type requestLogin = {
 email: string;
 password: string;
}