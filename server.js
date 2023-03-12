const express = require('express');
const app = express();
// const { Sequlize } = require('sequelize');
// const path = require('path');
const cors = require('cors');

require('dotenv').config();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', AppRouter)

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001
app.get('/', (req, res) => res.json({ message: 'Server Works' }))

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))