const express = require('express')
const app = express()
const port = 5000
const mongoose =require ('mongoose')
mongoose.connect('mongodb+srv://jangjaeho:wkdwogh4@jaeho01.qh04t.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify :false
}).then (()=> console.log('MongoDB connected..'))
  .catch(err => console.log(err))


app.get('/',(req,res)=> res.send('Hello World'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))




