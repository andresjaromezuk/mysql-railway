import express from 'express';
import {PORT} from './db/config.js'
import {pool} from './db/db.js'

const app = express();


app.get('/', /* async */ (req, res)=>{
    /* let [user] = await pool.query('SELECT * FROM users')
    res.json(user); */
    res.send('Hola')
})

app.get('/create', (req, res)=>{
    pool.query('INSERT INTO users(name) VALUES ("John")')
})



app.listen(PORT)
console.log('servidor funcionando en el puerto 3000')
