const express = require('express')
const music = express.Router()

music.get('/', (request, response) => {
    response.sendfile('./static/music/music.html')
})


module.exports = {
    music: music,
}

