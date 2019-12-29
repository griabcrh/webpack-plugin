## 自定义插件名config/deleteConsoleOrDebuggerPlugin.js

使用方法：在plugins下加入如下代码,
``` 
new DeleteConsoleOrDebuggerPlugin({
   drop_debugger: true,  // true表示开启，不写或者false表示关闭
   drop_console: false // 同上
}),
``` 
