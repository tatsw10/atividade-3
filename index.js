const PORT = process.env.PORT || 5607
//const PORT = 8000
const express = require('express')
const app = express()
//const { response } = require('express')

require("./route/route.js")(app)
app.use(express.static("."))
app.listen(PORT, ()=> console.log(`server listening on ${PORT}`))