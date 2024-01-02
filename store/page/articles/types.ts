import type { ArticleItemsResponse } from "@/infrastructures/items/types"

export type State = {
    articles : Articles
}

export type Articles = ArticleItemsResponse | null