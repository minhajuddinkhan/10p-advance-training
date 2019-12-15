const express = require('express')
const app = express();


const { UserService } = require('./db');
app.get('/hello', (req, res) => {
    
    res.json({key: new UserService().getUser()})
})

module.exports = app;