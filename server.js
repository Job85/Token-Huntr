// const express = require('express')
// const cors = require('cors')

// const app = express()

// const PORT = process.env.PORT || 3001

// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// const AppRouter = require('./routes/AppRouter')

// app.get('/', (req, res) => res.json({ message: 'Server Works' }))
// app.use('/api', AppRouter, () => console.log('In AppRouter!'))
// app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))


const { Pool } = require("pg")
const dotenv = require("dotenv")
dotenv.config()

const conectDb = async () => {
    try {
        const pool = new Pool({
            user: process.env.USERNAME,
            host: process.env.HOST,
            database: process.env.DATABASE,
            password: process.env.PASSWORD,
            port: process.env.PORT
        })

        await pool.connect()
        const res = await client.query('SELECT * FROM clients')
        console.log(res)
        await pool.end()
    } catch (error) {
        console.log(error)
    }
}

conectDb()
