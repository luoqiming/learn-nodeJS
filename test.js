const val = require('./hello');
const val2 = require('./hello');
console.log(val())
console.log(val2())
// 这里引入了两次hello模块
// 但是hello模块中的私有变量num，并不会重置
// 这说明引入多次相同模块被视为是同一个模块