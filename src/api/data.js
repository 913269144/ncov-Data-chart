import request from '@/request.js'
let HOST = 'http://193.112.137.60:3001/'

//全国疫情总览图
export function getStatisticsService(object){
    return request({
        url:HOST+'data/getStatisticsService',
        method:'get',
        params:object
    })
}

//全国疫情各省市区数据
export function getareaData(object){
    return request({
        url:HOST+'data/getAreaStat',
        method:'get',
        params:object
    })
}
//海外地区数据
export function getOverseas(object){
    return request({
        url:HOST+'data/getListByCountryTypeService2true',
        method:'get',
        params:object
    })
}
//湖北地区数据
export function getAreaStat (object,type){
    return request({
        url:HOST+'data/getAreaStat/'+type,
        method:'get',
        params:object
    })
}

//最新辟谣
export function getIndexRumorList(object){
    return request({
        url:HOST+'data/getIndexRumorList',
        method:'get',
        params:object
    })
}

//最新播报
export function getNewest(object){
    return request({
        url:"http://49.232.173.220:3001/data/getNewest/281",
        method:'get',
        params:object
    })
}

export function getIndexRecommendList(object){
    return request({
        url:'http://49.232.173.220:3001/data/getIndexRecommendList',
        method:"get",
        params:object
    })
}

export function getWikiList(object){
    return request({
        url:HOST+'data/getWikiList',
        method:'get',
        params:object
    })
}