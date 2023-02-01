var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "../images/avatar.png");
        document.title = '╭(°A°`)╮ Crash Crash ~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "../images/avatar.png");
        document.title = '(ฅ>ω<*ฅ) Just Kidding ~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});