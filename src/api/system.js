import {
    getAction,
    getJoinAction
} from './manage'

export const webGetListApi = data=>getAction('/web/getList',data)   //文章列表
export const webGetArticle = data =>getJoinAction('/web/getArticle/:articleId',data)  ///文章getArticle/:articleId