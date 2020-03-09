import request from '@/request.js'
let HOST = 'http://www.wuliang.art'

export function getSameRide1(object){
    return request({
        url:HOST+'/ncov/sameRide/getSameRide1',
        methods:'get',
        params:object
    })
}