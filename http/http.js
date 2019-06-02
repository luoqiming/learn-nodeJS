// 要实现http服务器的程序，需要使用nodejs的http模块。模块已经完成了一些底层实现。我们则需要操作模块提供的request和response对象
// requset对象封装了http请求，我们通过操作他的属性或者方法能够得到所有的http请求信息
// response对象封装了http响应，我们通过操作他的方法来将http响应返回给浏览器
const http = require('http');
// createServer方法来创建一个http服务
const server = http.createServer((request, response) => {
    console.log(request.method)
    console.log(request.url)
    // 通过writeHead方法设置响应头
    // 参数1（必须）number：状态码
    // 参数3（可选）object：具体的响应头设置
    response.writeHead(200, {
        'Content-Type': 'application/json'
    })
    // 必须调用end方法，表明已经发送了所有的响应头和主体。视为此消息已经完成
    // 参数1（可选）string/buffer:发送的数据
    // 参数2（可选）string:字符编码，比如utf-8
    // 参数3（可选）func:消息完成后的回调
    response.end('{"name":"lqm"}')
})

server.listen(8080);
console.log('http服务运行中... localhost:8080');
