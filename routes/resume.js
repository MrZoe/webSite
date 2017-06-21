/**
 * Created by Administrator on 2017/6/12.
 */

const express = require('express')
const resume = express.Router()

resume.get('/', (request, response) => {
    response.sendfile('./static/resume/resume.html')
})


module.exports = {
    resume: resume,
}

