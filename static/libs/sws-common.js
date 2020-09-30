var address = "http://127.0.0.1"
var loginUrl = address + ":14029/system"
var pumpHouseUrl = address + ":14029"
var pumpHouseUrl1 = address + ":14029/pumpHouse"
var wxUrl = address + ":14029/wxuser"
var deviceUrl = address + ":14029/device"
var deviceWarnUrl = address + ":14029/deviceWarn"
var deviceTypeUrl = address + ":14029/deviceType"
var deviceDataUrl = address + ":14029/deviceData"
var deviceUnitUrl = address + ":14029/deviceUnit"
var companyUrl = address + ":14029/company"
var projectUrl = address + ":14029/project"
var userUrl = address + ":14029/user"
var postSaleTask = address + ":14029/postSaleTask"



function add0(m) {
    return m < 10 ? '0' + m : m
}

function format(shijianchuo) {
    var time = new Date(shijianchuo);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}

function formatNoYear(shijianchuo) {
    var time = new Date(shijianchuo);
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return add0(h) + ':' + add0(mm) + ':' + add0(s);
}


function formatGetH(shijianchuo) {
    var time = new Date(shijianchuo);
    var h = time.getHours();
    return add0(h);
}

function formatTotTimestamp(dateString) {

    var date = dateString.replace(/-/g,'/');

    var timestamp = new Date(date).getTime();

    return timestamp;
}

function formatStringTotTimestamp(dateString) {

    var date = dateString.replace('年','/').replace('月','/').replace('日','/');

    var timestamp = new Date(date).getTime();

    return timestamp;
}

function cleanInput(array) {

    for (var i = 0;i<array.length;i++){
        alert($("#"+array[i]).val(""))
    }
}

function verifyInputNoEmpty(array) {

    for (var i = 0;i<array.length;i++){
        var value = $("#"+array[i]).val();
        if(value==undefined||value==null||value.length<1){
            alert("error");
            return false;
        }
    }
}

function showLog(str) {
    if (!log) log = $("#log");
    log.append("<li class='" + className + "'>" + str + "</li>");
    if (log.children("li").length > 8) {
        log.get(0).removeChild(log.children("li")[0]);
    }
}

function getTime() {
    var now = new Date(),
        h = now.getHours(),
        m = now.getMinutes(),
        s = now.getSeconds(),
        ms = now.getMilliseconds();
    return (h + ":" + m + ":" + s + " " + ms);
}