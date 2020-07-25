const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const api = require('./routes')

app.use(cors())
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api', api)
//app.all('*', express.static('build'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))