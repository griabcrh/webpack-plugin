class DeleteConsoleOrDebuggerPlugin {
  constructor(options) {
    this.options = options || {drop_debugger: false, drop_console: false};
  }

  apply(compiler) {
    var regDebugger = /debugger/g;
    var regConsole = /console.[a-z]*\('[a-zA-Z0-9_$,:'.\s]*\);/g;
    compiler.hooks.emit.tap('DeleteConsoleOrDebuggerPlugin', (compilation) => {
      Object.keys(compilation.assets).forEach((data) => {
        console.log(data);
        const suffix = data.lastIndexOf('.');
        console.log(data.substring(suffix + 1))
        if(data.substring(suffix + 1) === 'js') {
          let content = compilation.assets[data].source(); // 获取处理的文本
          if(this.options.drop_debugger) {
            content = content.replace(regDebugger, '');
          }
          if(this.options.drop_console) {
            content = content.replace(regConsole, '');
          }
          
          compilation.assets[data] = {
            source() {
              return content;
            },
            size() {
              return content.length;
            }
          }
        }
      });
    });
  }

}

module.exports = DeleteConsoleOrDebuggerPlugin;