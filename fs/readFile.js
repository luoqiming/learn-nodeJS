// fs是node内置的文件读写系统，负责操作文件
// 文件操作的方式，都分为异步方法或者同步方法
const fs = require("fs");

// 1.读文件
// 异步操作,readFile方法
// 一般nodejs的异步方法，最后一个参数是回调函数，回调函数的第一个参数一般都是错误信息，第二个参数一般都是数据
fs.readFile('../hello.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        // console.log(data);
    }
})

// 同步操作,readFileSync方法
// 不同于异步操作中回调的参数可以返回错误信息，同步操作的错误信息需要用try，catch来自行捕获
try {
    const file = fs.readFileSync('../hello.txt', 'utf-8');
    // console.log(file);
}
catch (err) {}


// 读取图片
fs.readFile('../img1.jpg', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        // 对于图片来说，获取的是一个buffer对象，buffer对象可以和string互相转换
        // console.log(data);
        // toString方法转换成字符串
        let str = data.toString('utf-8');
        // Buffer.from方法将字符串转为buffer
        let buf = Buffer.from(str);
        // console.log(buf);

    }
})


// 2.写文件
// 通过writeFile方法(参数依次是：文件名，数据，回调函数)
// 如果参数二是string，默认采用utf-8编码，如果是buffer，默认写的是二进制文件
const fileData='console.log("这是node写下的js文件")';
fs.writeFile('writeFile.js',fileData,(err)=>{
    if(err){
        console.log('写文件失败了')
    }
})


// 3.读取文件信息
// 用stat方法
fs.stat('../hello.txt',(err,stat)=>{
    if(err){
        console.log(err)
    }
    else{
        // stat就是具体的信息
        console.log(stat)
    }
})