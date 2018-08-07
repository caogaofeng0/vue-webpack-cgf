document.getElementById('app').innerHTML="这是我第一个打包成功的程序";
require('./first.js');
// require("!style-loader!css-loader!./style.css");
require("./style.css") // 这样需要修改启动命令 --module-bind "css=style-loader\!css-loader"