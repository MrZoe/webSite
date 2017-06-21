/**
 * Created by Administrator on 2017/6/4.
 */
const express = require('express')
const index = express.Router()

index.get('/', (request, response) => {
    response.sendfile('./static/index/index.html')
})


module.exports = {
    index: index,
}

