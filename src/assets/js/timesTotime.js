
export function timetrans(date,type){
    let numberString = date.toString().length
    if(numberString!=13){
        var date = new Date(date*1000);//如果date为13位不需要乘1000
    }else{
        var date = new Date(date)
    }
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
    if(type == 'y-y-d-time'){
        return Y+M+D+h+m+s;
    }else if(type == 'd-time'){
        return D+h+m+s
    }else{
        return Y+M+D
    }
}