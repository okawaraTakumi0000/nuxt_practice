export type ArticleItemsResponse = {
    id: string;
    title: string;
    url: string;
    tags: Tag[]
}[]

type Tag = {
    name: string;
}