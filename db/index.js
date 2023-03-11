// const express = require('express');
// require('dotenv').config();

// let dbUrl = process.env.NODE_ENV === 'production' ? process.env.POSTGRES_URI : 'postgres://127.0.0.1'

require('dotenv').config();
const { Client } = require('pg')
const client = new Client({
    user: process.env.USERNAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
})
client.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});