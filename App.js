const Express = require('express');
const routes=require('./routes');
const path= require('path');
require('dotenv');

const app = Express();
const port = process.env.PORT||5000;

app.use(Express.static('public'))
app.use(routes)



app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'./public','error.html'))
})




app.listen(port,()=>{
 console.log('app is listening')
})