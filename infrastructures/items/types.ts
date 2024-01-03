/** 記事一覧取得API 返り値 */
export type ArticleItemsResponse = {
    id: string;
    title: string;
    url: string;
    tags: Tag[]
}[]

/** タグ */
type Tag = {
    name: string;
}