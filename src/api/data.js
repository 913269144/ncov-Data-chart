import request from '@/request.js'
let HOST = 'http://193.112.137.60:3001/'

//全国疫情总览图
export function getStatisticsService(object){
    return request({
        url:HOST+'data/getStatisticsService',
        methods:'get',
        params:object
    })
}

//全国疫情各省市区数据
export function getareaData(object){
    return request({
        url:HOST+'data/getAreaStat',
        methods:'get',
        params:object
    })
}
//海外地区数据
export function getOverseas(object){
    return request({
        url:HOST+'data/getListByCountryTypeService2',
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

//最新辟谣
export function getIndexRumorList(object){
    return request({
        url:HOST+'data/getIndexRumorList',
        methods:'get',
        params:object
    })
}

//最新播报
export function getNewest(object){
    return request({
        url:HOST+"data/getNewest/281",
        methods:'get',
        params:object
    })
}
