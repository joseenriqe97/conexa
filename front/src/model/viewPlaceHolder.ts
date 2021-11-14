export type ResponsePost = {
 data?: dataPost[];
}

export type dataPost = {
 userId: number;
 id: number;
 title: string;
 body: string;
}

export type requestPhotos = {
 start: number,
 limit: number
}

export type ResponsePhotos = {
 message: string;
 data: dataPhoto[];
}

export type dataPhoto = {
 albumId: number;
 id: number;
 title: string;
 url: string;
 thumbnailUrl: string;
}