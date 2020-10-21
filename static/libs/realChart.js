function addzz() {
    alert("报警开发中");
    event.stopImmediatePropagation();
}

var log, className = "dark";
var beginTime;


function getDeviceData2(treeNode, data) {
    $.ajax({
        url: "http://127.0.0.1:9021/deviceData/getDeviceData?id=" + treeNode.id,
        type: "GET",
        dataType: 'json',
        success: function (r) {
            var m = r.data;
            var t = format(m["time"]);
            for (var a = 0; a < data.count; a++) {
                $("#stime" + a).html(t)
                if (data.data[a].isOnOffData == "1") {
                    if (m[data.data[a].dataName] == "1") {
                        $("#2" + data.data[a].dataName).html("<img src='assets/images/icon/run.png'  alt='运行'>")
                    } else {
                        $("#2" + data.data[a].dataName).html("<img src='assets/images/icon/stop.png'  alt='停止' >")
                    }
                } else {
                    $("#2" + data.data[a].dataName).html(m[data.data[a].dataName])
                }
            }
        }
    });

    // 基于准备好的dom，初始化echarts实例
    var asChart = echarts.init(document.getElementById('asChart'));

    var cellSize = [140, 90];//每一小格大小
    var pieRadius = '10%';//大小
    //此处应该是从数据库默认读取当天的数据格式
    var json = [
        {"data": [{"name": "1#运行时长", "value": 1}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 2}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 3}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 4}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 5}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 6}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 7}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 8}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 9}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 10}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 11}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 12}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 13}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 14}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 15}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 16}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 17}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 18}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 19}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 20}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 21}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 22}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 23}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 24}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 25}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 26}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 27}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 28}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 29}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
        {"data": [{"name": "1#运行时长", "value": 30}, {"name": "2#运行时长", "value": 103}, {"name": "3#运行时长", "value": 56}]},
    ]
    var startDate = '2017-04';
    var endDate = '2017-05';
    var data_name = ['1#运行时长', '2#运行时长', '3#运行时长'];//该出应该是从数据库中读取
    var options = calendar(cellSize, pieRadius, startDate, endDate, json, data_name);
    asChart.setOption(options);
    //添加点击事件
    asChart.on('click', function (params) {
        // 控制台打印数据的名称

        var year_month = params.event.event.path[8].startDate;
        var day = params.seriesIndex;
        if (day < 10) {
            day = "0" + day;
        }
        var year_month_day = year_month + "-" + day;//获取当前点击的年月日
        var status = params.name;//获取当前点击状态名称
        get_this_click_data({"datetime": year_month_day, "status": status});
    });
    //cellSize-----日历整体宽高
    //pieRadius----日历饼图大小
    //startDate----开始月份
    //endDate------结束月份
    //data---------数据集
    //data_name----数据描述名称
    function calendar(cellSize, pieRadius, startDate, endDate, json, data_name) {
        var data_arr = [];

        for (var i = 0; i < json.length; i++) {
            data_arr.push(json[i].data);

        }

        function getVirtulData() {
            var date = +echarts.number.parseDate(startDate);
            var end = +echarts.number.parseDate(endDate);
            var dayTime = 3600 * 24 * 1000;
            var data = [];
            for (var time = date; time < end; time += dayTime) {
                data.push([
                    echarts.format.formatTime('yyyy-MM-dd', time),
                    Math.floor(Math.random() * 10000)
                ]);
            }
            return data;
        }

        function getPieSeries(scatterData, chart) {
            return echarts.util.map(scatterData, function (item, index) {
                var center = chart.convertToPixel('calendar', item);

                return {
                    id: index + 'pie',
                    type: 'pie',
                    center: center,
                    label: {
                        normal: {
                            formatter: '{c}',
                            position: 'inside'
                        }
                    },
                    radius: pieRadius,
                    data: data_arr[index]
                };
            });
        }


        // 使用刚指定的配置项和数据显示图表。

        function getPieSeriesUpdate(scatterData, chart) {
            return echarts.util.map(scatterData, function (item, index) {
                var center = chart.convertToPixel('calendar', item);
                return {
                    id: index + 'pie',
                    center: center
                };
            });
        }

        var scatterData = getVirtulData();

        var option = {
            tooltip: {},
            legend: {
                data: data_name,
                bottom: 20
            },
            calendar: {
                top: 'middle',
                left: 'center',
                orient: 'vertical',
                cellSize: cellSize,
                yearLabel: {
                    show: false,
                    textStyle: {
                        fontSize: 30
                    }
                },
                dayLabel: {
                    margin: 20,
                    firstDay: 1,
                    nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
                },
                monthLabel: {
                    show: false
                },
                range: [startDate]
            },
            series: [{
                id: 'label',
                type: 'scatter',
                coordinateSystem: 'calendar',
                symbolSize: 1,
                label: {
                    normal: {
                        show: true,
                        formatter: function (params) {
                            return echarts.format.formatTime('dd', params.value[0]);
                        },
                        offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                        textStyle: {
                            color: '#000',
                            fontSize: 14
                        }
                    }
                },
                data: scatterData
            }]
        };

        if (!asChart.inNode) {
            var pieInitialized;
            setTimeout(function () {
                pieInitialized = true;
                asChart.setOption({
                    series: getPieSeries(scatterData, asChart)
                });
            }, 10);

            asChart.onresize = function () {
                if (pieInitialized) {
                    asChart.setOption({
                        series: getPieSeriesUpdate(scatterData, asChart)
                    });
                }
            };
        }
        return option;
    }

    //点击事件方法

    //根据点击事件获取相应数据
    function get_this_click_data(data) {
        $("#html").html('<p>传入后台数据格式：{"datetime":' + data.datetime + ',"status":' + data.status + '}<p>向后台请求当前点击的数据get_this_click_data</p>');
//              $.getJSON("__URL__/get_this_click_data",data,function(res){
//                  if(res){
//                      console.log("这是处理返回数据的逻辑");
//                  }
//              })
    }


}

function getDeviceData3(treeNode, data) {
    $.ajax({
        url: "http://127.0.0.1:9021/deviceData/getDeviceData?id=" + treeNode.id,
        type: "GET",
        dataType: 'json',
        success: function (r) {
            var m = r.data;
            var t = format(m["time"]);
            for (var a = 0; a < data.count; a++) {
                $("#stime" + a).html(t)
                if (data.data[a].isOnOffData == "1") {
                    if (m[data.data[a].dataName] == "1") {
                        $("#2" + data.data[a].dataName).html("<img src='assets/images/icon/run.png'  alt='运行'>")
                    } else {
                        $("#2" + data.data[a].dataName).html("<img src='assets/images/icon/stop.png'  alt='停止' >")
                    }
                } else {
                    $("#2" + data.data[a].dataName).html(m[data.data[a].dataName])
                }
            }
        }
    });
}

var inter1
//表格刷新定时任务
var tableRefresh;
//数据表格加载方法

//绘制表格,加载数据基础信息（不包含参数）
function addTable(treeId, treeNode) {
    $.ajax({
            url: "http://127.0.0.1:9021/deviceUnit/getDeviceRealParm?IOTCode=" + treeNode.id,
            type: "GET",
            dataType: 'json',
            success: function (data) {
                var html = "";

                for (var a = 0; a < data.count; a++) {
                    var warnbutton = "";
                    if (data.data[a].isWarnData == 1 && data.data[a].isWarnData == "1") {
                        warnbutton = "<button onclick='addzz()' style='height: 22px;line-height: 22px;padding: 0 5px;font-size: 12px;display: inline-block;background-color: #009688;color: #fff;white-space: nowrap;text-align: center;border: none; border-radius: 2px;cursor: pointer;'>设置参数</button>"
                    }

                    html += '<tr onclick=\"chartView(\'' + treeNode.id + '\',\'' + data.data[a].name + '\',\'' + data.data[a].unit + '\',\'' + data.data[a].dataName + '\')"><td>' + (a + 1)
                        + '</td><td>' + data.data[a].name
                        + '</td><td id="' + treeNode.id + data.data[a].dataName + '">' + '-'
                        + ' </td><td>' + data.data[a].unit
                        + '</td><td  id="time' + treeNode.id + a + '">' + '-'
                        + '</td><td>' + data.data[a].warnNumber
                        + '</td><td>' + warnbutton
                        + '</td></tr>'
                }
                chartView(treeNode.id,"水箱液位" ,"m","level");

                $("#realTbody").html(html);

                getDeviceData(treeNode, data);
                tableRefresh = setInterval(function addData() {
                    getDeviceData(treeNode, data);
                }, 2000);
            }
        }
    );
}


function getDeviceData(treeNode, data) {

    $.ajax({
        url: "http://127.0.0.1:9021/deviceData/getDeviceData?IotCode=" + treeNode.id,
        type: "GET",
        dataType: 'json',
        success: function (r) {

            var t = r.data['date'];
            //对数据进行移位
            //绘制表格,加载数据基础信息（不包含参数）
            for (var a = 0; a < data.count; a++) {
                $("#time" + treeNode.id + a).html(t)
                if (data.data[a].isOnOffData == "1" && data.data[a].isAlarmData != "1") {
                    if (r.data[data.data[a].dataName] == "1") {
                        $("#" + treeNode.id + data.data[a].dataName).html("<img src='assets/images/icon/run.png'  alt='运行'>")
                    } else {
                        $("#" + treeNode.id + data.data[a].dataName).html("<img src='assets/images/icon/stop.png'  alt='停止' >")
                    }
                } else if (data.data[a].isOnOffData == "1" && data.data[a].isAlarmData == "1") {
                    if (r.data[data.data[a].dataName] == "1") {
                        $("#" + treeNode.id + data.data[a].dataName).html("<img src='assets/images/icon/alarm6.png'  alt='报警'>")
                    } else {
                        $("#" + treeNode.id + data.data[a].dataName).html("<img src='assets/images/icon/alarm5.png'  alt='正常' >")
                    }
                } else {
                    $("#" + treeNode.id + data.data[a].dataName).html(r.data[data.data[a].dataName])
                }
            }
        }
    });
}

function chartView(parm1, parm2, parm3, parm4) {

    clearInterval(inter1);

    var newData = [];
    var oldData = [];
    var timeData = [];
    //获取最近的50条参数
    $.ajax({
        url: "http://127.0.0.1:9021/deviceData/getDeviceInitDataByDataName?deviceId=" + parm1 + "&dataName=" + parm4,
        type: "GET",
        dataType: 'json',
        success: function (r) {
            beginTime = r.time[r.time.length - 1];
            for (var a = 0; a < r.time.length; a++) {
                newData[a] = r.new[a];
                oldData[a] = r.old[a];
                timeData[a] = formatNoYear(r.time[a]);
            }
            getDeviceDataByDataName(beginTime, parm1, parm2, parm3, parm4, newData, oldData, timeData);
        }
    })
    var historyChart = echarts.init(document.getElementById('historyChart'));

    var levelWarn = 2.0;
    if (parm2 == "水箱液位") {
        $("#historyClass").css({"height": "10%", "margin-top": "1%", "display": "block"});
        var val = $("#dateQuery").val();
        var startTime;
        var endTime;
        if (val == "" || val == null || val == undefined || val == NaN) {
            var obj = new Date();
            obj.setHours(0);
            obj.setMinutes(0);
            obj.setSeconds(0);
            val = obj.getTime();
            startTime = val;
            endTime = startTime + 86400000;
        } else {
            startTime = formatStringTotTimestamp(val);
            endTime = startTime + 86400000;
        }

        var data = {};
        data.code = parm1;
        data.dataName = 'level';
        data.number = 48;
        data.startTime = startTime;
        data.endTime = endTime;

        var levelArray = [];
        var timeArray = [];
        var dataArray = [];
        $.ajax({
            url: "http://127.0.0.1:9021/deviceData/findDataByTime",
            type: "GET",
            data: data,
            dataType: 'json',
            success: function (r) {
                var obj = {};
                var i = 0;
                var gt = 0;
                var sign = "";
                for (var a = 0; a < r.data.length; a++) {
                    levelArray[a] = r.data[a].level;
                    timeArray[a] = formatNoYear(r.data[a].time);

                    if (r.data[a].level > levelWarn && sign == "") {
                        sign = "big";
                        obj.gt = gt;
                    } else if (r.data[a].level <= levelWarn && sign == "") {
                        sign = "small";
                        obj.gt = gt;
                    } else if (r.data[a].level > levelWarn && sign == "small") {
                        sign = "big";
                        obj.lte = a;
                        obj.color = '#1e9fff';
                        dataArray[i] = obj;
                        i++;
                        obj = {};
                        obj.gt = a;
                    } else if (r.data[a].level <= levelWarn && sign == "big") {
                        sign = "small";
                        obj.lte = a;
                        obj.color = 'red';
                        dataArray[i] = obj;
                        i++;
                        obj = {};
                        obj.gt = a;
                    } else if (a == r.data.length - 1) {
                        obj.lte = a;
                        if (sign == "small") {
                            obj.color = '#1e9fff';
                        } else {
                            obj.color = 'red';
                        }
                        dataArray[i] = obj;
                    }
                }


                historyChart.setOption({
                    title: {
                        text: parm2 + '历史曲线',
                        subtext: "区间：?",
                        textStyle: {
                            fontSize: 14,
                            fontWeight: 'lighter',
                        },
                        subtextStyle: {
                            fontSize: 10,
                            fontWeight: "normal",
                            color: "blcak",
                        }
                    },

                    grid: {
                        left: '4%',
                        right: '4%',
                        bottom: '6%',
                        containLabel: true,
                        transitionDuration: 0,
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            saveAsImage: {}
                        },
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: timeArray,
                        nameTextStyle: {color: '#5b6be8'},
                        minorTick: {
                            show: true,
                            splitNumber: 5,
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#009688',
                                width: 2
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#009688'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#eaeaea'
                            }
                        },
                        axisTick: {
                            lineStyle: {
                                color: '#green'
                            }
                        }
                    },
                    yAxis: {
                        scale: true,
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} T'
                        },
                        axisPointer: {
                            snap: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#009688',
                                width: 2
                            },
                        },
                        axisPointer: {
                            snap: true
                        },
                        minorTick: {
                            show: true,
                            splitNumber: 1,
                        },
                    },
                    visualMap: {
                        show: false,
                        dimension: 0,
                        pieces: dataArray
                    },
                    series: [
                        {
                            data: levelArray,
                            itemStyle: {
                                color: '#1e9fff',
                            },
                            name: '用水量',
                            type: 'line',
                            smooth: true,
                            markArea: {
                                slient: true,
                                itemStyle: {
                                    color: 'rgba(193,35,43,0.5)',
                                },
                                // data: [[{
                                //     name: '',
                                //     xAxis: '09:35:21'
                                // }, {
                                //     xAxis: '09:38:36'
                                // }], [{
                                //     name: '警戒值',
                                //     xAxis: '09:45:16',
                                // }, {
                                //     xAxis: '11:39:43'
                                // }]]
                            },
                            markPoint: {
                                itemStyle: {
                                    color: '#009688',
                                },
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            areaStyle: {},
                            markLine: {
                                lineStyle: {
                                    color: '#1e9fff',
                                    width: 1
                                },
                                data: [
                                    {type: 'average', name: '平均值2'}
                                ]
                            }
                        }
                    ]
                });

            }
        })
    } else if (parm2 == "出口压力") {
        // $("#historyClass").css({"display": "none"});
        $("#historyClass").css({"height": "10%", "margin-top": "1%", "display": "block"});

        var val = $("#dateQuery").val();
        var startTime;
        var endTime;
        if (val == "" || val == null || val == undefined || val == NaN) {
            var obj = new Date();
            obj.setHours(0);
            obj.setMinutes(0);
            obj.setSeconds(0);
            val = obj.getTime();
            startTime = val;
            endTime = startTime + 86400000;
        } else {
            startTime = formatStringTotTimestamp(val);
            endTime = startTime + 86400000;
        }

        var data = {};
        data.code = parm1;
        data.dataName = ['outlet_pressure', 'no1_frequency_oper', 'no2_frequency_oper', 'no3_frequency_oper', 'no1_powerfrequency_oper', 'no2_powerfrequency_oper', 'no3_powerfrequency_oper'];
        data.number = 23;
        data.startTime = startTime;
        data.endTime = endTime;

        var outArray = [];
        var timeArray = [];
        var frequencyArray = [];
        var powerFrequencyArray = [];

        $.ajax({
            url: "http://127.0.0.1:9021/deviceData/findMuDataByTime",
            type: "GET",
            data: data,
            dataType: 'json',
            success: function (r) {
                for (var a = 0; a < r.data.length; a++) {
                    outArray[a] = r.data[a].outlet_pressure;
                    timeArray[a] = formatNoYear(r.data[a].time);
                    frequencyArray[a] = r.data[a].no1_frequency_oper + r.data[a].no2_frequency_oper + r.data[a].no3_frequency_oper;
                    powerFrequencyArray[a] = r.data[a].no1_powerfrequency_oper + r.data[a].no2_powerfrequency_oper + r.data[a].no3_powerfrequency_oper;
                    if (window.isNaN(frequencyArray[a])) {
                        frequencyArray[a] = 0;
                    }
                    if (window.isNaN(powerFrequencyArray[a])) {
                        powerFrequencyArray[a] = 0;
                    }

                }

                historyChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['工频运行个数', '变频运行个数']
                    },
                    grid: {
                        left: '4%',
                        right: '4%',
                        bottom: '6%',
                        containLabel: true,
                        transitionDuration: 0,
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: timeArray,
                            minorTick: {
                                show: true,
                                splitNumber: 5,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#009688',
                                    width: 2
                                },
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#009688'
                                },
                            },

                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#eaeaea'
                                }
                            },
                            axisTick: {
                                alignWithLabel: true,
                                lineStyle: {
                                    color: '#green'
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            name: '运行个数',
                            type: 'value',
                            max: 5,    //设置最大值
                            min: 0,                                 //最小值
                            splitNumber: 5,
                            axisPointer: {
                                snap: true
                            },
                            axisLabel: {
                                formatter: '{value} 个'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#009688',
                                    width: 2
                                },
                            },
                            axisPointer: {
                                snap: true
                            },
                            minorTick: {
                                show: true,
                                splitNumber: 1,
                            },
                        },
                        {
                            name: '压力',
                            type: 'value',
                            axisPointer: {
                                snap: true
                            },
                            axisLabel: {
                                formatter: '{value} Mpa'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#009688',
                                    width: 2
                                },
                            },
                            axisPointer: {
                                snap: true
                            },
                            minorTick: {
                                show: true,
                                splitNumber: 1,
                            },
                        }
                    ],
                    series: [
                        {
                            name: '变频运行个数',
                            type: 'bar',
                            itemStyle: {
                                color: '#5fb878',
                            },
                            stack: '运行个数',
                            data: frequencyArray
                        },
                        {
                            name: '工频运行个数',
                            type: 'bar',
                            itemStyle: {
                                color: '#1e9fff',
                            },
                            stack: '运行个数',
                            data: powerFrequencyArray
                        },
                        {
                            data: outArray,
                            type: 'line',
                            name: "压力",
                            smooth: true,
                            yAxisIndex: 1,
                            itemStyle: {
                                normal: {
                                    color: '#ffb980',
                                    lineStyle: {
                                        color: '#ffb980',
                                    }
                                }
                            },
                            markPoint: {
                                itemStyle: {
                                    color: '#009688',
                                },
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                        }
                    ]
                });
            }
        });
    }
    // if (parm2 == "自动运行" || parm2 == "手动运行") {
    //     $("#historyClass").css({"display": "none"});
    //     historyChart.setOption({
    //         tooltip: {
    //             trigger: 'axis',
    //             axisPointer: {            // 坐标轴指示器，坐标轴触发有效
    //                 type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    //             }
    //         },
    //         legend: {
    //             data: ['自动运行','手动运行']
    //         },
    //         grid: {
    //             left: '3%',
    //             right: '4%',
    //             bottom: '3%',
    //             containLabel: true
    //         },
    //         xAxis: {
    //             type: 'value'
    //         },
    //         yAxis: {
    //             type: 'category',
    //             data: ['1']
    //         },
    //         series: [
    //             {
    //                 name: '自动运行',
    //                 type: 'bar',
    //                 stack: '总量',
    //                 label: {
    //                     show: true,
    //                     position: 'insideRight'
    //                 },
    //                 data: [12]
    //             },
    //             {
    //                 name: '手动运行',
    //                 type: 'bar',
    //                 stack: '总量',
    //                 label: {
    //                     show: true,
    //                     position: 'insideRight'
    //                 },
    //                 data: [60]
    //             },
    //             {
    //                 name: '自动运行',
    //                 type: 'bar',
    //                 stack: '总量',
    //                 label: {
    //                     show: true,
    //                     position: 'insideRight'
    //                 },
    //                 data: [12]
    //             },
    //         ]
    //     });
    //     return
    // } else {
    //     historyChart.clear();
    // }

    inter1 = setInterval(function () {
        if (beginTime == undefined) {
            return;
        }
        ;
        getDeviceDataByDataName(beginTime, parm1, parm2, parm3, parm4, newData, oldData, timeData)
    }, 4000);
}


function getDeviceDataByDataName(startTime, parm1, parm2, parm3, parm4, newData, oldData, timeData) {
    var realChart = echarts.init(document.getElementById('realChart'));

    $.ajax({
        url: "http://127.0.0.1:9021/deviceData/getDeviceDataByDataName?deviceId=" + parm1 + "&dataName=" + parm4 + "&beginTime=" + startTime,
        type: "GET",
        dataType: 'json',
        success: function (r) {
            if (r.time.length > 0) {
                beginTime = r.time[r.time.length - 1];
                for (var a = 0; a < r.time.length; a++) {
                    var timer = formatNoYear(r.time[a]);
                    timeData.shift();
                    timeData.push(timer);
                    newData.shift();
                    newData.push(r.new[a]);
                    oldData.shift();
                    oldData.push(r.old[a]);
                }
            }
        }
    })

    realChart.setOption({
        title: {
            text: parm2 + '实时曲线',
            subtext: "周期 20s",
            textStyle: {
                fontSize: 14,
                fontWeight: 'lighter',
            },
            subtextStyle: {
                fontSize: 10,
                fontWeight: "normal",
                color: "blcak",
            }
        },
        legend: {
            data: ["实时" + parm2, "昨日" + parm2],
        },
        grid: {
            left: '4%',
            right: '4%',
            bottom: '6%',
            containLabel: true,
            transitionDuration: 0,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            }

        },

        toolbox: {
            show: true,
            feature: {
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            data: timeData,
            nameTextStyle: {color: '#5b6be8'},
            boundaryGap: false,
            minorTick: {
                show: true,
                splitNumber: 5,
            },
            axisLine: {
                lineStyle: {
                    color: '#009688',
                    width: 2
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#009688'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#eaeaea'
                }
            },
            // minorSplitLine: {
            //     show: true,
            //     lineStyle: {
            //         color: '#ddd'
            //     }
            // }

        },
        yAxis: {
            type: 'value',
            // boundaryGap: [0, '100%'],
            scale: true,
            showSymbol: true,
            nameTextStyle: {color: '#5b6be8'},
            axisLabel: {
                formatter: '{value}' + parm3,
                textStyle: {
                    color: '#009688'
                }

            },
            axisLine: {
                lineStyle: {
                    color: '#009688',
                    width: 2
                },
            },
            splitNumber: 4,
            axisPointer: {
                snap: true
            },
            minorTick: {
                show: true,
                splitNumber: 1,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#eaeaea'
                }
            },
            minorSplitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd'
                }
            }
        },
        series: [{
            name: "实时" + parm2,
            smooth: true,
            type: 'line',
            itemStyle: {
                color: '#1e9fff',
            },
            markPoint: {
                itemStyle: {
                    color: '#1e9fff',
                },
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            lineStyle: {
                color: '#1e9fff',
            },
            showSymbol: true,
            // hoverAnimation: false,
            data: newData,
            markLine: {
                lineStyle: {
                    color: '#1e9fff',
                    width: 1
                },
                data: [
                    {type: 'average', name: '平均值1'}
                ]
            }
        }, {
            name: "昨日" + parm2,
            smooth: true,
            type: 'line',
            showSymbol: true,
            // hoverAnimation: false,
            data: oldData,
            itemStyle: {
                color: '#009688',
            },
            lineStyle: {
                color: '#009688',
            },
            markPoint: {
                itemStyle: {
                    color: '#009688',
                },
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                lineStyle: {
                    color: '#009688',
                    width: 1
                },
                data: [
                    {type: 'average', name: '平均值2'}
                ]
            }
        }]
    });
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

