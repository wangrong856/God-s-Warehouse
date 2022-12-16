const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      [process.env.VUE_APP_BASE_API]:{
        target:process.env.VUE_APP_BASE_URL,
        changeOrigin:true
      }
    }
  }
})
