import request from '@/request.js'
let HOST = 'http://49.232.173.220:3001/'

//全国疫情总览
export function getStatisticsService(object){
    return request({
        url:HOST+'data/getStatisticsService',
        methods:'get',
        params:object
    })
}

//湖北地区数据
export function getAreaStat (object,type){
    return request({
        url:HOST+'data/getAreaStat/'+type,
        methods:'get',
        params:object
    })
}