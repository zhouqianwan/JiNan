var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});



// 定义倒计时函数
function Times() {
    //先获取ID节点，写完后再将字符串插入到clock节点内部.innerHTML=
    var clock = document.getElementById("clock");
    console.log(clock);
    //获取span节点
    var spans = clock.getElementsByTagName("span");
    //引入当前时间
    var today = new Date();
    //设置未来时间
    var enday = new Date("2023/5/12 00:00:00");
    //未来时间-当前时间，出来毫秒数，用到哪在哪除，并给其定义赋值，方便后面取用，用parseInt()取整
    var lastTime = parseInt((enday - today) / 1000);
    //剩余天数，（未来时间-当前时间）/1000/60/60/24
    var lastDate = parseInt(lastTime / 60 / 60 / 24);
    //剩余小时，（未来时间-当前时间）/1000/60%24 用取余方法，取出天后面的余数就是小时数
    var lastHour = parseInt(lastTime / 60 / 60 % 24);
    //剩余分钟数，（未来时间-当前时间）/1000/60%60，小时后面的余数就是分钟数
    var lastMin = parseInt(lastTime / 60 % 60);
    //剩余秒数，（未来时间-当前时间）/1000%60，分钟后的余数就是秒数
    var lastSec = parseInt(lastTime % 60);
    // 让天数为10以下时前面加个0，增加用户体验。 有更好的方法，这周写法不推荐
    if (lastDate < 10) {
        lastDate = "0" + lastDate;
    }
    // 让小时数为10以下时前面加个0，增加用户体验。 有更好的方法，这周写法不推荐
    if (lastHour < 10) {
        lastHour = "0" + lastHour;
    }
    // 让分钟数为10以下时前面加个0，增加用户体验。 有更好的方法，这周写法不推荐
    if (lastMin < 10) {
        lastMin = "0" + lastMin;
    }
    // 让秒数为10以下时前面加个0，增加用户体验。 有更好的方法，这周写法不推荐
    if (lastSec < 10) {
        lastSec = "0" + lastSec;
    }
    // 选择span节点，把相应的时间添加进去，span后用数组选择，数组从0开始，0代表1
    spans[0].innerHTML = lastDate;
    spans[1].innerHTML = lastHour;
    spans[2].innerHTML = lastMin;
    spans[3].innerHTML = lastSec;
}
// 定义计时器，1000毫秒更新一次
setInterval("Times()", 1000);