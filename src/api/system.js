import {
    getAction,
} from './manage'

// export const adminLoginApi = data=>postAction('/admin/login',data)
export const webGetListApi = data=>getAction('/web/getList',data)