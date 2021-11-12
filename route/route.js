module.exports = app => {
    const { application } = require("express");
    const controller = require("../controllers/controller.js");
    
    var router = require("express").Router()
    
    router.get("/", controller.findall)
    
    app.use('/api/gpus', router);
    };
