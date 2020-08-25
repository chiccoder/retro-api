
require('dotenv').config()
var bodyParser = require('body-parser')
const express = require('express')
var cors = require('cors')

const { sequelize }  = require('./models')
const app = express()
const port = process.env.PORT || 3000
const api = require('./routes')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api', api)
//app.all('*', express.static('build'))
sequelize.sync().then(() => {
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
});