const Express= require('express');
const routes= Express.Router();
const path= require('path');


routes.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','index.html'));
})

routes.get('/projects',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','projects.html'));
})

routes.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','about.html'));
})
routes.get('/proj2',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','proj2.html'));
})

module.exports=routes