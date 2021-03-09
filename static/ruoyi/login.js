$(function () {
    validateKickout();
    validateRule();
    // $('.imgcode').click(function () {
    //     var url = ctx + "captcha/captchaImage?type=" + captchaType + "&s=" + Math.random();
    //     $(".imgcode").attr("src", url);
    // });
});


function loginByPassword() {
    if (!isSuccess) {
        $.modal.msg("请通过验证");
        return
    }
    $.modal.loading($("#btnSubmitSignIn").data("loading"));
    var loginName = $.common.trim($("input[name='loginName']").val());
    var password = $.common.trim($("input[name='password']").val());
    $.ajax({
        type: "POST",
        url: sysUrl + '/sign_in_password',
        data: {
            "loginName": loginName,
            "password": password,
        },
        success: function (r) {
            if (r.code == 201) {
                sessionStorage.setItem("avatar", r.data.avatar);
                sessionStorage.setItem("name", r.data.name);
                sessionStorage.setItem("token", r.data.token);
                location.href = weclome;
            } else {
                $.modal.closeLoading();
                $.modal.msg(r.msg);
                bgColor.style.width = 0 + "px";
                slider.style.left = 0 + "px";
                bgColor.style.transition = "width 0.8s linear";
                slider.style.transition = "left 0.8s linear";
                isSuccess = false;
                txt.innerHTML = "按住滑块，拖动到最右边";
                txt.style.color = "#9c9c9c";
                slider.className = "slider";
                icon.className = "iconfont icondoubleright";
                slider.onmousedown = mousedownHandler;
                document.onmousemove = null;
                document.onmouseup = null;
            }
        },
    });
}
var inter;
function getVerify() {

    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test($("#phoneNumber").val())) {
        $.modal.msg("手机号长度错误");
    } else {
        $.ajax({
            type: "GET",
            url: sysUrl + '/sendSms',
            data: {
                "phoneNumber": $("#phoneNumber").val(),
            },
            success: function (r) {
                if (r.code == 2010) {
                    $.modal.msg(r.msg);
                } else {
                    clearInterval(inter);
                    var i = 60
                    inter = setInterval(function addData() {
                        if (i>0){
                            i=i-1;
                            $("#verifyBlock").html(i+"秒")
                            $("#verifyBlock").css("border","1px solid #e6e6e6")
                            $("#verifyBlock").css("background-color","#FBFBFB")
                            $("#verifyBlock").css("color","#C9C9C9")
                            $("#verifyBlock").css("cursor","not-allowed")
                            $("#verifyBlock").css("opacity",1)
                            $("#verifyBlock").removeAttr("onclick")
                        }else {
                            $("#verifyBlock").attr("onclick","getVerify()")
                            $("#verifyBlock").html("获取验证码")
                            $("#verifyBlock").removeAttr("style");
                            $("#verifyBlock").css("text-align","center")
                            $("#verifyBlock").css("padding","6px 0px")
                            clearInterval(inter);
                        }
                    },1000)
                }
            },
        });
    }

}

function loginByPhone() {

    // $.modal.loading($("#btnSubmitVerify").data("loading"));
    var phoneNumber = $.common.trim($("input[name='phoneNumber']").val());
    var verify = $.common.trim($("input[name='verify']").val());
    layer.alert("未开放")

}

function validateRule() {
    var icon = "<i class='fa fa-times-circle'></i> ";
    $("#signupForm").validate({
        rules: {
            loginName: {
                required: true
            },
            password: {
                required: true
            }
        },
        messages: {
            loginName: {
                required: icon + "请输入您的用户名",
            },
            password: {
                required: icon + "请输入您的密码",
            }
        },
        submitHandler: function () {
            loginByPassword();
        }
    })
    $("#signupFormPhone").validate({
        rules: {
            phoneNumber: {
                required: true
            },
            verify: {
                required: true
            }
        },
        messages: {
            phoneNumber: {
                required: icon + "请输入您的手机号",
            },
            verify: {
                required: icon + "请输入您的验证码",
            }
        },
        submitHandler: function () {
            loginByPhone();
        }
    })
}

function validateKickout() {
    if (getParam("kickout") == 1) {
        layer.alert("<font color='red'>您已在别处登录，请您修改密码或重新登录</font>", {
                icon: 0,
                title: "系统提示"
            },
            function (index) {
                //关闭弹窗
                layer.close(index);
                if (top != self) {
                    top.location = self.location;
                } else {
                    var url = location.search;
                    if (url) {
                        var oldUrl = window.location.href;
                        var newUrl = oldUrl.substring(0, oldUrl.indexOf('?'));
                        self.location = newUrl;
                    }
                }
            });
    }
}

function getParam(paramName) {
    var reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}