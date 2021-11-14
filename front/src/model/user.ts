export type ResponseLogin = {
 message: string;
 data?: Data | DataCreationUser;
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

export interface DataCreationUser {
 _id: string;
 email: string;
 password: string;
 __v: number;
}
