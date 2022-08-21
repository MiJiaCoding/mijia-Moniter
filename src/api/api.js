import request from '../utils/request.js'

// 事件异常查询接口
export function scriptexception(data){
    return request({
        method: 'get',
        url: '/api/get/errorLog',
        data: data
    })
}