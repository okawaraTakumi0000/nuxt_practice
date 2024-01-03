import type { ArticleItemsResponse } from "@/infrastructures/items/types"

/** 記事一覧画面 API State */
export type State = {
    articles : Articles
}

/** 記事情報 */
export type Articles = ArticleItemsResponse | null