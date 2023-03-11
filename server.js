const express = require('express')
const cors = require('cors')

const app = express()

// const PORT = process.env.PORT || 3001
require('dotenv').config();
const { Client } = require('pg')
const client = new Client({
    user: process.env.USERNAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT || 3001
})
client.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const AppRouter = require('./routes/AppRouter')

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', AppRouter, () => console.log('In AppRouter!'))
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
