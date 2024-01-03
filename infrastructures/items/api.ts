import type { ArticleItemsResponse } from "./types"

/**
 * 記事一覧取得API
 * @returns 記事一覧情報
 */
export const get = async () :Promise<ArticleItemsResponse | null>=> {
    const {data} = await useFetch<ArticleItemsResponse>('https://qiita.com/api/v2/items',{method:'GET',headers:{authorization: `Bearer 3cd53ef857b2bb97a8e63708a1f47abd85320e87`}})
    return data.value
}