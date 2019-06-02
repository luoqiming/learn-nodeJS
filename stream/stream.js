// stream模块是nodejs仅在服务端可用的模块,目的就是为了支持"流"这种数据结构.

// Node.js 中有四种基本的流类型：
// Writable - 可写入数据的流（例如 fs.createWriteStream()）。
// Readable - 可读取数据的流（例如 fs.createReadStream()）。
// Duplex - 可读又可写的流（例如 net.Socket）。
// Transform - 在读写过程中可以修改或转换数据的 Duplex 流（例如 zlib.createDeflate()）。

// 在nodejs中流也是一个对象,我们只需要响应流的事件：
// data事件表示流的数据已经可以被读取了
// end事件表示流已经结束
// error事件表示出错了

// 示例
//创建一个读取文件的流
const fs = require('fs');
const rs = fs.createReadStream('./chunk.txt', 'utf-8');
// data事件可能有多次，每一次的chunk是流的部分数据
rs.on('data', (chunk) => {
    // console.log(chunk);
})

rs.on('close', () => {
    // console.log('流关闭了');
})

rs.on('error', (error) => {
    console.log(error);
})


// 创建一个写入文件的流
const ws1 = fs.createWriteStream('output1.txt');
ws1.write('这里是使用write方法写入的stream数据\n');
ws1.write('第二次写入数据');
ws1.end();


// 所有可以读取数据的流都继承自stream.Readable，所有可以写入的流都继承自stream.Writable。
// 这两个流的数据也可以串起来，Readable流的数据自动进入Writable流，这样的操作叫pipe
// 在Node.js中，Readable流有一个pipe()方法，就是用来干这件事的。
// 实际上这就是一个复制文件的过程

const readS = fs.createReadStream('../hello.txt', 'utf-8');
const writeS = fs.createWriteStream('merge.txt');
writeS.write('我写入一些合并的数据试一下\n');
const mergeS = readS.pipe(writeS);
writeS.write('我又写了一些东西测试\n')












