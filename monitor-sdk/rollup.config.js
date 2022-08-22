const path = require('path');
const babel = require('rollup-plugin-babel');

const resolve = function (...args) {
  return path.resolve(__dirname, ...args);
};

export default { 
  input: resolve('./src/index.js'), // 入口文件
  output: [
    {
      file: resolve('./lib/index.esm.js'),
      format: 'esm', // ES 模块文件
    },
    {
      file: resolve('./lib/index.umd.js'),
      format: 'umd', // umd 规范的可执行文件
      name: 'monitorSdk',
    }
  ],
  watch: {  // 配置监听处理
    exclude: 'node_modules/**'
  },
  plugins: [
    // 使用插件 @rollup/plugin-babel
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js']
    })
  ]
};
