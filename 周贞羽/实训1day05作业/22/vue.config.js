const { defineConfig } = require('@vue/cli-service')
const port = process.env.port || process.env.dev_port ||9527
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port:port,
    // 代理配置
    proxy:{
      // 如果我们的请求地址有  /api 就会触发代理机制
      [process.env.VUE_APP_BASE_API]:{
        // localhost:8080/api==>代理给另一个服务器
        // 本地的前端==》本地的后端==》代理我们向另一个服务器发请求
        target:process.env.VUE_APP_BASE_URL,
        changeOrigin:true ,  //是否跨域 
        // localhost:8080/api/users/login==>https://www.thenewstep.cn/v1/vue3system/api/users/login
        pathRewrite:{
          // 地址重写 把地址中的api替换成""
          ['^'+process.env.VUE_APP_BASE_API]:""
        }
      }
    }
  }
})