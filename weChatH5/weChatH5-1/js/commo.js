// var myScroll;
//function loaded () {
//	myScroll = new IScroll('#wrap', { mouseWheel: true, tap: true });
//}
//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
//	capture: false,
//	passive: false
//} : false);
function loaded () {  
        var myScroll,  
                    pullDown = $("#pullDown"),  
                    pullUp = $("#pullUp"),  
                    pullDownLabel = $(".pullDownLabel"),  
                    pullUpLabel = $(".pullUpLabel"),  
                    container = $('#list'),  
                    loadingStep = 0;//加载状态0默认，1显示加载状态，2执行加载数据，只有当为0时才能再次加载，这是防止过快拉动刷新  
  
            pullDown.hide();  
            pullUp.hide();  
  
            myScroll = new IScroll("#wrap", {  
                scrollbars: false,  
                mouseWheel: false,  
                interactiveScrollbars: true,  
                shrinkScrollbars: 'scale',  
                fadeScrollbars: true,  
                scrollY:true,  
                probeType: 2,  
                bindToWrapper:true  ,
                mouseWheel: true, 
                tap: true
            });  
            myScroll.on("scroll",function(){  
                if(loadingStep == 0 && !pullDown.attr("class").match('refresh|loading') && !pullUp.attr("class").match('refresh')){  
                    if(this.y > 40){//下拉刷新操作  
                        $(".pulldown-tips").hide();  
                        pullDown.addClass("refresh").show();  
                        pullDownLabel.text("松手刷新数据");  
                        loadingStep = 1;  
                        myScroll.refresh();  
                    }else if(this.y < (this.maxScrollY - 14)){//上拉加载更多  
                        pullUp.addClass("refresh").show();  
                        pullUpLabel.text("正在载入");  
                        loadingStep = 1;  
//                      pullUpAction();  
 						myScroll.refresh();
                    }  
                }  
            });  
            myScroll.on("scrollEnd",function(){  
                if(loadingStep == 1){  
                    if( pullDown.attr("class").match("refresh") ){//下拉刷新操作  
                        pullDown.removeClass("refresh").addClass("loading");  
                        pullDownLabel.text("正在刷新");  
                        loadingStep = 2;  
                        pullDownAction();  
                    }
                    if( pullUp.attr("class").match("refresh") ){//下拉刷新操作  
                        pullUp.removeClass("refresh").addClass("loading");  
                        pullUpLabel.text("正在加载");  
                        loadingStep = 2;  
                        pullUpAction();  
                    }
                }  
            });  
  
        function pullDownAction(){  
            setTimeout(function(){  
                pullDown.attr('class','').hide();  
                myScroll.refresh();  
                loadingStep = 0;  
                $(".pulldown-tips").show();  
            },1000);  
        }  
        function pullUpAction(){
                pullUp.attr('class','').hide();  
                myScroll.refresh();  
                loadingStep = 0;  
        }  
  
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);  
        }  