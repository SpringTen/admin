module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            'api':{
                //代理 跨域ngix
                target:'https://www.imooc.com',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}