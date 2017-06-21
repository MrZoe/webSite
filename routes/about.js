/**
 * Created by Administrator on 2017/6/5.
 */
const express = require('express')
const about = express.Router()

about.get('/', (request, response) => {
    response.sendfile('./static/about/about.html')
})


module.exports = {
    about: about,
}

