const Express = require('express');
const bodyParser=require('bodyparser');
const routes=require('./routes');
require('dotenv');

const app = Express();
const port = process.env.PORT||5000;


app.use(routes)








app.listen(port,()=>{
 console.log('app is listening')
})