var video;
var i = 1;
var v = 1;

var a = 0;

t();

setInterval(function () {
    video.children('h4').children('span').css("color", "blue");

    if ($("#iframe", parent.document.body).contents().find('iframe').contents().find('.x-container').length > 0) {
        console.log("检测到第" + i + "个弹题窗口");
        $("#iframe", parent.document.body).contents().find('iframe').contents().find('.x-container').remove();
        $("#iframe", parent.document.body).contents().find('iframe').contents().find('.x-component').remove();
        console.log("已关闭");
        i++;
    }

    if ($("#iframe", parent.document.body).contents().find('iframe').contents().find('.vjs-play-control')[0].title == "重播") {
        a++;
        console.log("检测到视频观看完成，准备跳到下一节:『" + video[a].title + "』");
        video[a].click();
        console.log("已跳转");
        console.log("目前播放了" + v + "个视频");
        v++;
        setTimeout(t(), 10000);
    } else if ($("#iframe", parent.document.body).contents().find('iframe').contents().find('.vjs-play-control')[0].title == "播放") {
        $("#iframe", parent.document.body).contents().find('iframe').contents().find('.vjs-big-play-button').click();

        if ($("#iframe", parent.document.body).contents().find('iframe').contents().find('.vjs-mute-control')[0].title == "静音") {
            $("#iframe", parent.document.body).contents().find('iframe').contents().find('.vjs-mute-control')[0].click();
            console.log("已静音");
        }

    }
}, 5000);

function t() {
    video = $('.ncells a');
    video.children('h4').children('span').css("color", "blue");
    console.log("已选取" + video.length + "个小节,并已用蓝色标明,请检查是否有遗漏,如有遗漏,概不负责");

    if (a == 0) {
        while ($('.main h1').text() != video[a].title) {
            a++;
        }
    }

    $("span[title='视频']").click();

    setTimeout(function () {
        var playerp = $("#iframe", parent.document.body);
        var playerf1 = playerp.contents().find('iframe');
        var playbtn = playerf1.contents().find('.vjs-big-play-button');

        playbtn.click();

        if ($("#iframe", parent.document.body).contents().find('iframe').contents().find('.x-container').length > 0) {
            $("#iframe", parent.document.body).contents().find('iframe').contents().find('.x-container').remove();
            $("#iframe", parent.document.body).contents().find('iframe').contents().find('.x-component').remove();
            i++;
        }
    },5000);
}

