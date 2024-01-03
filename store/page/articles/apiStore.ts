import type { State, Articles } from "./types"
import { FetchError } from 'ofetch'
import { get as getArticles } from "@/infrastructures/items"

/**
 * 記事一覧画面の API Storeを取得
 * @returns 記事一覧画面の API Store
 */
export const pageApiStore = () => {
    /** State */
    const _state = useState<State>('page-api-articles', () => {
        return {
            articles: null
        }
    })

    /** Getters */
    const getters = {
        /** 記事一覧データ */
        articlesOrThrow: computed<Articles>(() => {
            return _state.value.articles
        })
    }

    /** Actions */
    const actions = {
        /** 
         * 記事一覧データを取得
         */
        async getArticles() :Promise<void>{
            try {
                const response = await getArticles()
                _state.value.articles = response
            } catch (err) {
                if(err instanceof FetchError) {
                    _state.value.articles = null
                }
            }
        }
    }
    return {
        ...getters,
        ...actions
    } as const
}