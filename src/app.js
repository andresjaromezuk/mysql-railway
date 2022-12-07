import express from 'express';
import {PORT} from './db/config.js'

const app = express();


app.get('/', (req, res)=>{
    res.send('Hola Mundo!')
})

app.listen(PORT)
console.log('servidor funcionando en el puerto 3000')
