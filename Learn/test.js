//let a = 5;
function abcd() {
    var _loop_1 = function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100);
    };
    for (var i = 1; i < 5; i++) {
        _loop_1(i);
    }
}
abcd();
