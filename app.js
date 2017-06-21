/**
 * Created by Administrator on 2017/6/4.
 */

// 引入模块
const express = require('express')

// 初始化 express
const app = express()

// 配置静态资源目录
const asset = __dirname + '/static'
app.use('/static', express.static(asset))

// 引入路由文件
const { index } = require('./routes/index')
const { music } = require('./routes/music')
const { resume } = require('./routes/resume')
// console.log(index)

// 注册路由程序
app.use('/', index)
app.use('/music', music)
app.use('/resume', resume)

app.use((request, response) => {
    response.status(404)
    response.sendfile('static/error/404.html')
})

// 服务器运行
const run = (port, host='') => {
    const server = app.listen(port, host, () => {
            const address = server.address()
            host = address.address
            port = address.port
            console.log(`listening server at http://${host}:${port}`)
})
}

// 保证不会被其他文件引用时运行
if (require.main === module) {
    const port = 4000
    // windows 下设置为 127.0.0.1, mac 下设置为 0.0.0.0
    const host = '127.0.0.1'
    run(port, host)
}
