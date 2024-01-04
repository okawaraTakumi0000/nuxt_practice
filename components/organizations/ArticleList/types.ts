/** 記事データ */
export type Articles = {
    id: string;
    title: string;
    url: string;
    tags: Tag[]
}[]

/** タグ */
export type Tag = {
    name:string
}