$(function () {
    validateKickout();
    validateRule();
    // $('.imgcode').click(function () {
    //     var url = ctx + "captcha/captchaImage?type=" + captchaType + "&s=" + Math.random();
    //     $(".imgcode").attr("src", url);
    // });
});

$.validator.setDefaults({
    submitHandler: function () {
        login();
    }
});

function login() {

    if (!isSuccess){
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
            if (r.code == 201){
                sessionStorage.setItem("public_profile", JSON.stringify(r.data.user));
                sessionStorage.setItem("token", r.data.token);
                location.href = './index.html';
            }else {
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