var express = require('express')
var getToken = require('./routes/getToken')
var app = express()
var port = 3000

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/routes/home.html')
})

app.get('/token', getToken)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
