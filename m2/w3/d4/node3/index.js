const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req,res)=>{
   // res.send('Hello World')
   res.sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
    console.log('Sever running at http://127.0.0.1:3000');
})