module.exports = app => { 
    const request = require('../controllers/translate')
    let router = require("express").Router();
//translate
    router.post('/',request.translate)

    app.use('/translate',router)
}