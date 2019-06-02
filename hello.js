let num = 0;
// 用module.exports来输出一个函数
// 将默认输出重写为了这个函数
module.exports = function () {
    num += 1;
    console.log(`hello+${num}`);
}