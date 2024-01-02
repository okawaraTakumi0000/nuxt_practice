import type { State, Articles } from "./types"
import { FetchError } from 'ofetch'
import { get as getArticles } from "@/infrastructures/items"

export const pageApiStore = () => {
    const _state = useState<State>('page-api-articles', () => {
        return {
            articles: null
        }
    })

    const getters = {
        articlesOrThrow: computed<Articles>(() => {
            return _state.value.articles
        })
    }

    const actions = {
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