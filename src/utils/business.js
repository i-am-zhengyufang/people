export function handleRoam(myChart) {
    myChart.on("georoam", function (params) {
        var option = myChart.getOption(); //获得option对象
        if (params.zoom != null && params.zoom != undefined) {
            //捕捉到缩放时
            option.geo[0].zoom = option.series[0].zoom; //下层geo的缩放等级跟着上层的geo一起改变
            option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
        } else {
            //捕捉到拖曳时
            option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
        }
        myChart.setOption(option); //设置option
    });
}

export function setFullScreen(docElm) {
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
    }
}

export function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
}
